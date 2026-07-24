# Emergent Operating Contract

## Governing architecture

- Preserve Nuxt SSR, Vue 3, strict TypeScript, Tailwind CSS 3, and HighRise.
- Never convert this repository to React, FastAPI, or another default stack.
- Never add another component framework when HighRise has an equivalent.
- Use `config/app-spec.yaml` as the requested-product contract.
- Use `modules/registry.ts` before creating new modules.

## Work boundaries

- One feature or module per branch.
- Build complete vertical slices: UI, state, server boundary, authorization, errors, and tests.
- Do not refactor unrelated code.
- Do not change platform-core behavior during app feature work.
- Do not deploy production automatically.
- Do not request or print secret values.

## Required workflow

1. Read `README.md`, `docs/ARCHITECTURE.md`, and `config/app-spec.yaml`.
2. Perform a read-only compatibility audit.
3. Report blockers before editing.
4. Implement the smallest complete change.
5. Run lint, typecheck, tests, and production build.
6. Report every changed file and unresolved risk.
