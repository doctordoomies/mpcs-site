# MPCS
Static Minecraft PvP Championship Series website for https://mpcs.gg.

## Development
Use Node 22 or newer. Run `npm ci`, then `npm run dev`.
Run `npm run build` to export the site to `out/`.

## Content
Edit `lib/data.ts` for the published page content and `lib/site.ts` for homepage settings.
Sponsorship email is configured in `lib/site.ts`.
The website uses email links for inquiries.

## Publishing
In Settings → Pages, choose GitHub Actions. Pushes to main build and deploy.
Set the custom domain to mpcs.gg in Pages settings and configure DNS at Namecheap.
