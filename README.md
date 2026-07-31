# HighRise Starter

A practical starter and reference repository for building **HighLevel applications with the HighRise design system**.

This repository combines:

- Official-documentation summaries and source links
- Nuxt, Tailwind, PostCSS, npm, and Yarn configuration examples
- Standalone, SSR, and embedded-app scaffold plans
- Fast troubleshooting guides
- Component, Pinia, VueUse, and RTE patterns
- Prompt packs for AI-assisted builders

> **Important:** HighRise packages are distributed through authenticated private registries. Use your own authorized credentials. Never commit access tokens, registry passwords, `.npmrc` secrets, or production environment files.

---

## Start here

| Goal | Open this |
|---|---|
| Understand the repository | [`START-HERE.md`](START-HERE.md) |
| Install HighRise | [`knowledge-base/01-official-docs/highrise-installation.md`](knowledge-base/01-official-docs/highrise-installation.md) |
| Build a Nuxt SSR app | [`knowledge-base/03-scaffold-templates/ghl-nuxt-ssr-boilerplate-structure.md`](knowledge-base/03-scaffold-templates/ghl-nuxt-ssr-boilerplate-structure.md) |
| Build an embedded HighLevel app | [`knowledge-base/03-scaffold-templates/iframe-highrise-app-template.md`](knowledge-base/03-scaffold-templates/iframe-highrise-app-template.md) |
| Fix registry authentication | [`knowledge-base/04-troubleshooting/registry-auth-errors.md`](knowledge-base/04-troubleshooting/registry-auth-errors.md) |
| Use an AI builder | [`knowledge-base/06-ai-builder-prompts/`](knowledge-base/06-ai-builder-prompts/) |
| Review every source | [`knowledge-base/SOURCES.md`](knowledge-base/SOURCES.md) |

---

## Choose your path

### 1. I need the fastest setup

1. Read [`START-HERE.md`](START-HERE.md).
2. Review the [installation guide](knowledge-base/01-official-docs/highrise-installation.md).
3. Copy the relevant [configuration examples](knowledge-base/02-config-examples/).
4. Select one [scaffold template](knowledge-base/03-scaffold-templates/).
5. Run through the matching [troubleshooting checklist](knowledge-base/04-troubleshooting/).

### 2. I am building inside HighLevel

Start with the [iframe app template](knowledge-base/03-scaffold-templates/iframe-highrise-app-template.md), then use the [component patterns](knowledge-base/05-component-references/highrise-component-patterns.md).

### 3. I am building a standalone or SSR app

Start with the [SSR guide](knowledge-base/01-official-docs/highrise-ssr.md), then use the [Nuxt boilerplate structure](knowledge-base/03-scaffold-templates/ghl-nuxt-ssr-boilerplate-structure.md).

### 4. I am prompting Bolt or Emergent

Use the platform-specific prompt pack:

- [Bolt.new prompts](knowledge-base/06-ai-builder-prompts/bolt-new-prompts.md)
- [Emergent integration-agent prompts](knowledge-base/06-ai-builder-prompts/emergent-integration-agent-prompts.md)
- [General HighRise scaffold prompts](knowledge-base/06-ai-builder-prompts/highrise-scaffold-prompts.md)

---

## Repository map

```text
highrise-starter/
├── README.md
├── START-HERE.md
├── CONTRIBUTING.md
├── SECURITY.md
└── knowledge-base/
    ├── README.md
    ├── SOURCES.md
    ├── MANIFEST.json
    ├── 01-official-docs/
    ├── 02-config-examples/
    ├── 03-scaffold-templates/
    ├── 04-troubleshooting/
    ├── 05-component-references/
    └── 06-ai-builder-prompts/
```

---

## Safety rules

- Keep registry credentials in environment variables or a secrets manager.
- Commit only placeholder values.
- Treat HighRise package access as credential-dependent and authorization-dependent.
- Verify package versions against current official documentation before production deployment.
- Review AI-generated code before installation or deployment.

## Download everything

Use GitHub's **Code → Download ZIP** option to download the complete repository as one archive.

## Source and ownership note

This repository contains original summaries, implementation guidance, examples, and source links. HighRise, HighLevel, Nuxt, Vue, Tailwind CSS, Pinia, VueUse, Bolt, Emergent, npm, and Yarn remain the property of their respective owners.
