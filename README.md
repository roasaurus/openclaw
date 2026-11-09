# ROASaurus for OpenClaw

Connects OpenClaw to the ROASaurus MCP server (`https://app.roasaurus.com/mcp`, OAuth 2.1 with dynamic client
registration) and adds three skills: ads-audit, wasted-spend and tracking-health.

After installing, sign in once:

    openclaw mcp login roasaurus

You need a ROASaurus account with a connected store, as an owner or admin of its workspace. You pick the store on the
consent page; read-only tools are always on, and write access (proposals to the Actions inbox, applying changes) only
when you tick it.

Without the plugin you can add the server yourself:

    openclaw mcp set roasaurus '{"url":"https://app.roasaurus.com/mcp","transport":"streamable-http","auth":"oauth"}'
    openclaw mcp login roasaurus

Docs: https://roasaurus.com/integrations/mcp/openclaw · Privacy: https://roasaurus.com/privacy · Support: hello@roasaurus.com
