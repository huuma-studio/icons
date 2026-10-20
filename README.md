# Huuma UI Icons

This library provides various icon libraries for use in your Huuma UI project. All icons are sourced from open-source projects with permissive licenses.

## Development

Install [Vite+](https://viteplus.dev/guide/) and use the pinned Node.js and pnpm versions:

```sh
vp install
vp check
```

`vp check` checks formatting, lint rules, and TypeScript types. Use `vp fmt` to format files and `vp lint` to run lint and type checks separately.

## Publishing

The package is published as TypeScript source to [JSR](https://jsr.io/@huuma/icons). Package metadata, icon exports, and the publishing file list are defined in `jsr.json`; `package.json` configures development dependencies and commands. No build step is required.

```sh
vp run publish:check
vp run release
```

`publish:check` validates the package without uploading it. To release a new version, update `version` in `jsr.json`. CI runs checks and a publishing dry run for pull requests and pushes to `main`, then publishes pushes to `main` using JSR's GitHub OIDC authentication.

## Icon Libraries

### Pixelarticons

**Pixelarticons** is a collection of pixel art style icons perfect for retro and minimalist design projects.

- **Version**: 1.8.0
- **Icons Available**: 486 icons (Open-source version)
- **License**: MIT License
- **Website**: [https://pixelarticons.com](https://pixelarticons.com)
- **Repository**: [GitHub](https://github.com/halfmage/pixelarticons)

#### About
Pixelarticons are presented in a singular color scheme, embodying a line art variant that captures the essence of minimalist and brutalist design principles. These icons are perfect for designers looking to add a touch of retro flair to their work.

#### Features
- Minimalist pixel art design
- Scalable SVG format
- Consistent line art style
- Perfect for retro and brutalist design themes
- MIT licensed for commercial and personal use

### Lucide

**Lucide** is a beautiful and consistent icon toolkit, forked from Feather Icons and maintained by the community.

- **Icons Available**: 1694 icons
- **License**: ISC License
- **Website**: [https://lucide.dev](https://lucide.dev)
- **Repository**: [GitHub](https://github.com/lucide-icons/lucide)

#### About
Lucide is a community-driven fork of Feather Icons, offering a growing collection of beautifully crafted, consistent icons. Each icon is designed on a 24x24 grid with a focus on simplicity, readability, and visual consistency.

#### Features
- Clean and consistent design
- Scalable SVG format
- Lightweight and optimized
- Active community with frequent updates
- ISC licensed for commercial and personal use

---

## License Information

All icon libraries used in this project are open-source and licensed under permissive licenses that allow for commercial and personal use. Please refer to each library's specific license for detailed terms.

## Credits

- **Pixelarticons**: Created by the Pixelarticons team. Thank you for providing this excellent open-source icon library.
- **Lucide**: Created by the Lucide community, forked from Feather Icons by Cole Bemis. Thank you for providing this excellent open-source icon library.
