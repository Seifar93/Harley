# Installed Skills

## ui-ux-pro-max (and companions)

Vendored from [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill).

- **Version:** v2.12.0
- **Upstream commit:** `14ddef5c05e52d7c253b8f0129de7bcd1045ae5b`
- **License:** MIT — see `UI-UX-PRO-MAX-LICENSE`

### Skills included

| Skill | Purpose |
|-------|---------|
| `ui-ux-pro-max` | Core design intelligence: 84 UI styles, 192 color palettes, 74 font pairings, 192 product types, 98 UX guidelines, 25 chart types, 22 tech stacks |
| `design` | Design reasoning and review workflows |
| `design-system` | Design system + slide generation from project requirements |
| `ui-styling` | Styling implementation guidance and canvas fonts |
| `brand` | Brand guidelines, tokens, asset validation |
| `banner-design` | Banner sizes and style presets |
| `slides` | Presentation layout guidance |

### Usage

The skills auto-activate on UI/UX requests — just ask naturally:

```
Build a landing page for my SaaS product
Create a dashboard for healthcare analytics
Design a portfolio website with dark mode
```

Direct query against the database:

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "saas landing page"
python3 .claude/skills/ui-ux-pro-max/scripts/design_system.py "beauty spa landing page"
```

### Requirements

Python 3.x (standard library only — the scripts make no network calls and install nothing).

### Updating

Re-copy `.claude/skills/` from a fresh clone of the upstream repo, or use the
official CLI: `npm install -g ui-ux-pro-max-cli && uipro update`.
