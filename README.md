# minions-scaffolds

**Project scaffolding templates, tech stack configs, and initial file sets**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-scaffolds/sdk minions-sdk

# Python
pip install minions-scaffolds

# CLI (global)
npm install -g @minions-scaffolds/cli
```

---

## CLI

```bash
# Show help
scaffolds --help
```

---

## Python SDK

```python
from minions_scaffolds import create_client

client = create_client()
```

---

## Project Structure

```
minions-scaffolds/
  packages/
    core/           # TypeScript core library (@minions-scaffolds/sdk on npm)
    python/         # Python SDK (minions-scaffolds on PyPI)
    cli/            # CLI tool (@minions-scaffolds/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [scaffolds.minions.help](https://scaffolds.minions.help)
- Blog: [scaffolds.minions.blog](https://scaffolds.minions.blog)
- App: [scaffolds.minions.wtf](https://scaffolds.minions.wtf)

---

## License

[MIT](LICENSE)
