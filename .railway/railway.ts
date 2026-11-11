import { defineRailway, github, project, service } from "railway/iac";
export default defineRailway(() => project("lovable-deployment-guide", { resources: [
  service("lovable-server", { source: github("WillRaphaelson/lovable-railway-deployment"), root: "/apps/server", start: "npm start", healthcheck: "/", env: { HOST: "0.0.0.0", RELEASE_LABEL: "Ready for launch" } }),
  service("lovable-static", { source: github("WillRaphaelson/lovable-railway-deployment"), root: "/apps/static", healthcheck: "/", env: { VITE_RELEASE_LABEL: "Ready for launch" } })
]}));
