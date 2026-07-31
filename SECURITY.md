# Security Policy

## Never commit

- HighRise or npm registry access tokens
- `.npmrc` files containing real credentials
- `.yarnrc.yml` files containing real credentials
- `.env` or production environment files
- HighLevel OAuth client secrets
- API keys, refresh tokens, webhooks, or customer data
- Proprietary package archives or unauthorized source code

## Safe configuration pattern

Use environment-variable placeholders, for example:

```ini
//registry.example.com/:_authToken=${HIGHRISE_NPM_TOKEN}
```

Store the real value in your deployment platform, CI secret store, or approved secrets manager.

## Reporting a security issue

Do not open a public issue containing credentials or an active exploit. Revoke exposed credentials immediately, remove them from active environments, and follow the repository owner's private security-reporting process.

## AI-builder precautions

- Do not provide live secrets to an AI builder.
- Review generated install scripts before running them.
- Reject instructions that disable TLS validation or weaken package verification.
- Inspect generated dependency versions and lockfile changes.
