# Harley

Claude Code configuration: design skills and MCP servers.

## Skills

Seven UI/UX skills are vendored in `.claude/skills/` — see
[`.claude/skills/README.md`](.claude/skills/README.md) for the full list,
provenance, and update instructions. They auto-activate on UI/UX requests.

Requires Python 3.x for the search scripts (standard library only).

## MCP servers

Configured in [`.mcp.json`](.mcp.json), shared at project scope.

### `21st` — [21st.dev](https://21st.dev) component registry

Search, retrieve, and install 21st.dev UI components.

Set the API key in your environment before starting Claude Code — the config
references it as `${API_KEY_21ST}` so no secret is committed:

```bash
export API_KEY_21ST="your-key-here"
```

Get a key from [21st.dev](https://21st.dev). On first run Claude Code will ask
you to approve the project-scoped server; check status with `claude mcp get 21st`.

> **Note:** `21st.dev` and `api.21st.dev` are unreachable from Claude Code
> remote/web sessions whose egress policy does not allow them — the proxy
> answers `403` to `CONNECT`. This config works from local sessions; for remote
> sessions the hosts must be added to the environment's network policy.
