import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/launch-checklist")({component: Checklist});
function Checklist(){return <><p className="eyebrow">LAUNCH CHECKLIST</p><h1>A public URL is<br/>just the beginning.</h1><p className="intro">Open this page directly to check that your deployed app handles nested routes.</p><section className="list"><p>✓ Home page loads on the public domain</p><p>✓ Nested routes survive a refresh</p><p>✓ Server responses are generated at request time</p><p>□ Test sign-in and data access in your own app</p></section></>;}
