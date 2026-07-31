# Contributing

## Before changing a guide

1. Confirm the behavior against a primary source.
2. Prefer official documentation over third-party summaries.
3. Update [`knowledge-base/SOURCES.md`](knowledge-base/SOURCES.md) when adding a new source.
4. Keep instructions task-oriented and easy to scan.
5. Never commit credentials, private registry tokens, customer data, or proprietary package contents.

## File placement

| Content | Folder |
|---|---|
| Official-doc summary | `knowledge-base/01-official-docs/` |
| Configuration example | `knowledge-base/02-config-examples/` |
| Scaffold or architecture | `knowledge-base/03-scaffold-templates/` |
| Troubleshooting | `knowledge-base/04-troubleshooting/` |
| Component/library pattern | `knowledge-base/05-component-references/` |
| AI-builder prompt | `knowledge-base/06-ai-builder-prompts/` |

## Writing standard

Each guide should contain:

- A clear purpose
- Assumptions and prerequisites
- A numbered implementation sequence
- Safe placeholder values
- A verification checklist
- Source links

## Pull-request checklist

- [ ] Links work.
- [ ] Examples contain no live secrets.
- [ ] Package names and version claims are verified.
- [ ] Commands are copy-ready.
- [ ] The change does not reproduce proprietary documentation verbatim.
- [ ] The relevant index or README has been updated.
