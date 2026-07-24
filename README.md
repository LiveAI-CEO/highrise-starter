# Golden HighRise Starter

A production-oriented, app-factory foundation for HighLevel Custom Pages and standalone HighRise applications.

## What it provides

- Nuxt SSR, Vue 3, strict TypeScript, Tailwind CSS 3, and HighRise.
- Namespaced styling through one root `HLContentWrap`.
- Secure HighLevel iframe-context boundary.
- Server-only configuration for OAuth and token handling.
- Configuration-driven app generation through `config/app-spec.yaml`.
- Versioned module registry for reusable app-production features.
- Unit/E2E testing, GitHub Actions, secret scanning, dependency review, and Docker deployment.
- `EMERGENT.md` governance for controlled Emergent.ai production.

## First authenticated setup

1. Copy `.env.example` to `.env`.
2. Configure `GITHUB_PKG_AUTH_TOKEN` and `GOOGLE_PKG_AUTH_TOKEN` outside source control.
3. Replace `latest` private HighRise package ranges with the versions approved by the current HighRise release.
4. Run `npm install` and commit the generated lockfile.
5. Wire the official HighLevel signed-context decryption helper in `server/api/context/decrypt.post.ts`.
6. Run `npm run verify`.

## App factory workflow

1. Clone or generate a repository from this starter.
2. Edit `config/app-spec.yaml`.
3. Enable existing modules from `modules/registry.ts`.
4. Build custom functionality as one complete vertical slice per branch.
5. Require CI and security review before merge.
6. Deploy only after the production checklist passes.

## Security status

This starter deliberately does not fabricate HighLevel's private context-decryption algorithm. The endpoint fails closed with HTTP 501 until the current official routine is wired. That is a production safety control, not an unfinished silent fallback.
