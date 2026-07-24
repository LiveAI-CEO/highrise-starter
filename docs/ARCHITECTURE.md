# Architecture

## Layers

1. **HighRise UI shell** — one root wrapper and namespace-scoped Tailwind output.
2. **Application modules** — registered, versioned vertical slices selected by `app-spec.yaml`.
3. **Browser context boundary** — validates parent origin and message source.
4. **Server security boundary** — decrypts signed context, owns OAuth secrets and tokens, and calls HighLevel APIs.
5. **Release boundary** — GitHub pull requests, CI, secret scanning, and explicit production approval.

## Non-negotiable rules

- No secret or refresh token enters Pinia, Nuxt public runtime config, local storage, or logs.
- No unverified cryptography is implemented. Wire the official HighLevel context-decryption routine.
- Private HighRise package versions must be pinned by the authenticated first install and committed in `package-lock.json`.
- All produced apps derive behavior from the platform core, module registry, and app specification.
