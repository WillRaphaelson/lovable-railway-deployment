import { createRootRoute, HeadContent, Outlet, Scripts, Link } from "@tanstack/react-router";
import "../style.css";
export const Route = createRootRoute({ head: () => ({ meta: [{charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{title:"Launchpad | Railway deployment example"}] }), component: Root });
function Root() { return <html lang="en"><head><HeadContent /></head><body><nav><strong>◈ launchpad</strong><div><Link to="/">Overview</Link><Link to="/launch-checklist">Launch checklist</Link></div><span className="badge">RAILWAY · SERVER</span></nav><main><Outlet /></main><footer>Deployment example · TanStack Start + Lovable build configuration</footer><Scripts /></body></html>; }
