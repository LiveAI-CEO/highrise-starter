# Start Here

Use this page as the shortest route from an empty project to a working HighRise implementation.

## Pick one build type

| Build type | Best starting file |
|---|---|
| HighLevel embedded application | [`knowledge-base/03-scaffold-templates/iframe-highrise-app-template.md`](knowledge-base/03-scaffold-templates/iframe-highrise-app-template.md) |
| Nuxt server-rendered application | [`knowledge-base/03-scaffold-templates/ghl-nuxt-ssr-boilerplate-structure.md`](knowledge-base/03-scaffold-templates/ghl-nuxt-ssr-boilerplate-structure.md) |
| Standalone Vue/HighRise application | [`knowledge-base/03-scaffold-templates/standalone-highrise-app-template.md`](knowledge-base/03-scaffold-templates/standalone-highrise-app-template.md) |
| AI-assisted scaffold | [`knowledge-base/06-ai-builder-prompts/highrise-scaffold-prompts.md`](knowledge-base/06-ai-builder-prompts/highrise-scaffold-prompts.md) |

## The build sequence

### Step 1 — Confirm access

- Confirm you are authorized to use the HighRise private package registry.
- Obtain the correct registry URL and token through the approved HighLevel channel.
- Store the token in an environment variable or secrets manager.
- Do not paste a live token into a prompt, issue, commit, screenshot, or chat.

### Step 2 — Read the installation requirements

Open [`knowledge-base/01-official-docs/highrise-installation.md`](knowledge-base/01-official-docs/highrise-installation.md).

Then choose the matching registry example:

- npm: [`example-npmrc-private-registry.md`](knowledge-base/02-config-examples/example-npmrc-private-registry.md)
- Yarn: [`example-yarnrc-private-registry.md`](knowledge-base/02-config-examples/example-yarnrc-private-registry.md)

### Step 3 — Apply the configuration

Review these files in order:

1. [`example-nuxt-config.ts`](knowledge-base/02-config-examples/example-nuxt-config.ts)
2. [`example-tailwind-config.ts`](knowledge-base/02-config-examples/example-tailwind-config.ts)
3. [`example-postcss-config.js`](knowledge-base/02-config-examples/example-postcss-config.js)

Copy only what matches your actual stack and package versions.

### Step 4 — Build the smallest working screen

Before building the full product, prove these four things:

- HighRise styles load.
- One HighRise component renders.
- Client and server rendering do not disagree.
- Embedded sizing and navigation work when used inside HighLevel.

### Step 5 — Add state and utilities

Use:

- [`pinia-vueuse-patterns.md`](knowledge-base/05-component-references/pinia-vueuse-patterns.md)
- [`recommended-libraries.md`](knowledge-base/05-component-references/recommended-libraries.md)
- [`highrise-component-patterns.md`](knowledge-base/05-component-references/highrise-component-patterns.md)

### Step 6 — Troubleshoot by symptom

| Symptom | Guide |
|---|---|
| 401, 403, or package not found | [`registry-auth-errors.md`](knowledge-base/04-troubleshooting/registry-auth-errors.md) |
| Hydration or SSR failure | [`nuxt-ssr-highrise-errors.md`](knowledge-base/04-troubleshooting/nuxt-ssr-highrise-errors.md) |
| Styles missing or selectors wrong | [`tailwind-prefix-wrapper-errors.md`](knowledge-base/04-troubleshooting/tailwind-prefix-wrapper-errors.md) |
| Vue package conflict | [`vue-peer-dependency-errors.md`](knowledge-base/04-troubleshooting/vue-peer-dependency-errors.md) |
| Bolt environment problem | [`bolt-new-highrise-setup.md`](knowledge-base/04-troubleshooting/bolt-new-highrise-setup.md) |
| Emergent environment problem | [`emergent-highrise-setup.md`](knowledge-base/04-troubleshooting/emergent-highrise-setup.md) |

## Definition of done

Your starter is ready when:

- [ ] No secrets are committed.
- [ ] Dependencies install without forcing incompatible peer versions.
- [ ] The first HighRise component renders correctly.
- [ ] SSR and hydration complete without warnings when SSR is enabled.
- [ ] The interface remains usable at narrow embedded widths.
- [ ] Error, loading, empty, and success states are present.
- [ ] The build passes linting, type checking, and production compilation.
- [ ] The implementation has been checked against the current official docs.
