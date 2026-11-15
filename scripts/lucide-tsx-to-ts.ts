// Rewrites the Lucide icons from JSX (src/lucide/*.tsx) to `jsx()` calls
// (src/lucide/*.ts), like the Pixelarticons, and points jsr.json's exports
// at the new files. Run it with `node scripts/lucide-tsx-to-ts.ts`, then
// `vp fmt`.
//
// The icons all have one shape: an <svg> with string attributes, a
// `size`-based width and height and {...props}, holding self-closing shape
// elements with string attributes. The script parses exactly that shape and
// stops at anything else, so it never drops or changes markup silently.

import { readdirSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = join(import.meta.dirname, "..");
const dir = join(root, "src/lucide");

type Attribute =
  | { kind: "string"; name: string; value: string }
  | { kind: "size"; name: string }
  | { kind: "spread" };

interface Element {
  tag: string;
  attributes: Attribute[];
}

const header =
  /^\/\*\* @jsxImportSource @huuma\/ui \*\/\s*import type \{ JSX \} from "@huuma\/ui\/jsx-runtime";\s*import type \{ IconProps \} from "\.\/icons\.ts";\s*/;
const signature =
  /^export default function (\w+)\(\{\s*children: _,\s*size = 24,\s*\.\.\.props,?\s*\}: IconProps\): JSX\.Element \{\s*return \(\s*/;
const footer = /^\);\s*\}\s*$/;

function parseAttributes(source: string, file: string): Attribute[] {
  const attributes: Attribute[] = [];
  const token =
    /\s*(?:([a-zA-Z][\w:-]*)="([^"]*)"|([a-zA-Z][\w:-]*)=\{`\$\{size\}`\}|(\{\.\.\.props\}))/y;
  let rest = source;
  while (rest.trim()) {
    token.lastIndex = 0;
    const match = token.exec(rest);
    if (!match)
      throw new Error(`${file}: unexpected attribute syntax: ${rest.trim().slice(0, 60)}`);
    if (match[1]) attributes.push({ kind: "string", name: match[1], value: match[2] });
    else if (match[3]) attributes.push({ kind: "size", name: match[3] });
    else attributes.push({ kind: "spread" });
    rest = rest.slice(token.lastIndex);
  }
  return attributes;
}

function parse(source: string, file: string): { name: string; svg: Element; children: Element[] } {
  let rest = source;
  const head = header.exec(rest);
  if (!head) throw new Error(`${file}: unexpected imports`);
  rest = rest.slice(head[0].length);

  const fn = signature.exec(rest);
  if (!fn) throw new Error(`${file}: unexpected function signature`);
  rest = rest.slice(fn[0].length);

  const open = /^<svg\b([^>]*)>/.exec(rest);
  if (!open) throw new Error(`${file}: expected <svg>`);
  const svg: Element = { tag: "svg", attributes: parseAttributes(open[1], file) };
  if (svg.attributes.filter((a) => a.kind === "spread").length !== 1) {
    throw new Error(`${file}: expected one {...props} on <svg>`);
  }
  rest = rest.slice(open[0].length);

  const children: Element[] = [];
  for (;;) {
    rest = rest.trimStart();
    if (rest.startsWith("</svg>")) break;
    const child = /^<([a-z]+)\b([^>]*?)\s*\/>/.exec(rest);
    if (!child) throw new Error(`${file}: unexpected child: ${rest.slice(0, 60)}`);
    const attributes = parseAttributes(child[2], file);
    if (attributes.some((a) => a.kind !== "string")) {
      throw new Error(`${file}: <${child[1]}> has a non-string attribute`);
    }
    children.push({ tag: child[1], attributes });
    rest = rest.slice(child[0].length);
  }
  if (!children.length) throw new Error(`${file}: <svg> has no children`);
  rest = rest.slice("</svg>".length).trimStart();
  if (!footer.test(rest)) throw new Error(`${file}: unexpected code after </svg>`);

  return { name: fn[1], svg, children };
}

function key(name: string): string {
  return /^[A-Za-z_$][\w$]*$/.test(name) ? name : JSON.stringify(name);
}

function props(attributes: Attribute[], indent: string): string[] {
  return attributes.map((a) => {
    if (a.kind === "spread") return `${indent}...props,`;
    if (a.kind === "size") return `${indent}${key(a.name)}: \`\${size}\`,`;
    return `${indent}${key(a.name)}: ${JSON.stringify(a.value)},`;
  });
}

function generate({ name, svg, children }: ReturnType<typeof parse>): string {
  return [
    `import type { IconProps } from "./icons.ts";`,
    `import { type JSX, jsx } from "@huuma/ui/jsx-runtime";`,
    ``,
    `export default function ${name}({ children: _, size = 24, ...props }: IconProps): JSX.Element {`,
    `  return jsx("svg", {`,
    ...props(svg.attributes, "    "),
    `    children: [`,
    ...children.map(
      (child) =>
        `      jsx(${JSON.stringify(child.tag)}, {\n${props(child.attributes, "        ").join("\n")}\n      }),`,
    ),
    `    ],`,
    `  });`,
    `}`,
    ``,
  ].join("\n");
}

const files = readdirSync(dir).filter((file) => file.endsWith(".tsx"));
// Parse every icon before writing any, so a failure leaves nothing half done.
const icons = files.map((file) => ({
  file,
  code: generate(parse(readFileSync(join(dir, file), "utf8"), file)),
}));

for (const { file, code } of icons) {
  writeFileSync(join(dir, file.replace(/\.tsx$/, ".ts")), code);
  unlinkSync(join(dir, file));
}

const jsrPath = join(root, "jsr.json");
const jsr = JSON.parse(readFileSync(jsrPath, "utf8"));
let exports = 0;
for (const [name, path] of Object.entries<string>(jsr.exports)) {
  if (path.startsWith("./src/lucide/") && path.endsWith(".tsx")) {
    jsr.exports[name] = path.replace(/\.tsx$/, ".ts");
    exports++;
  }
}
writeFileSync(jsrPath, `${JSON.stringify(jsr, null, 2)}\n`);

console.log(`Converted ${icons.length} icons and ${exports} jsr.json exports.`);
