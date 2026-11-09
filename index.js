// Plugin entry. ROASaurus registers nothing at runtime: the MCP server and the skills
// are declared in openclaw.plugin.json, which OpenClaw loads from the manifest.
import { definePluginEntry } from "openclaw/plugin-sdk/plugin-entry";

export default definePluginEntry({
  id: "roasaurus",
  name: "ROASaurus",
  description: "Webshop profit, attribution and ad performance from ROASaurus, with ad changes proposed to an approval inbox.",
  register() {},
});
