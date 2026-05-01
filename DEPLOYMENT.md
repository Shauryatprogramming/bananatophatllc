# Deployment & DNS — `bananatophat.com`

The site is deployed on **GitHub Pages** from the `gh-pages` branch of
`Shauryatprogramming/bananatophatllc`.

GitHub already knows the custom domain — the **only** missing piece is DNS.
Until DNS points at GitHub, `bananatophat.com` will not load.

---

## ⚠️ DNS — required action

`bananatophat.com` currently resolves to `67.225.146.161` (LiquidWeb / your old
host). It needs to point at GitHub Pages.

Log in to **A1Technology DNS** (the nameservers you set: `ns1.a1technology.us`
and `ns2.a1technology.us`) and update the records for `bananatophat.com`:

### Apex (`bananatophat.com`) — replace existing A record with these four

| Type | Host | Value             |
|------|------|-------------------|
| A    | @    | 185.199.108.153   |
| A    | @    | 185.199.109.153   |
| A    | @    | 185.199.110.153   |
| A    | @    | 185.199.111.153   |

### `www` subdomain

| Type  | Host | Value                              |
|-------|------|------------------------------------|
| CNAME | www  | shauryatprogramming.github.io.     |

### Email (keep working)

If you are receiving mail at `contact@bananatophat.com` through your existing
provider, **keep your MX and TXT records as-is**. Only the A and the `www`
CNAME records need to change.

---

## After DNS update

1. Wait 10–60 minutes for DNS propagation. Verify with:
   ```bash
   dig +short bananatophat.com
   ```
   You should see the four `185.199.108–111.153` IPs.

2. Open `https://bananatophat.com`. You should see the live site.

3. **Enable HTTPS enforcement** on GitHub Pages:
   - Go to: <https://github.com/Shauryatprogramming/bananatophatllc/settings/pages>
   - Under "Custom domain", check **"Enforce HTTPS"** (the checkbox becomes
     available once GitHub finishes provisioning the SSL cert — usually within
     a few minutes of DNS being correct).

   Or via API (after DNS propagates):
   ```bash
   curl -X PUT \
     -H "Authorization: Bearer $GITHUB_TOKEN" \
     -H "Accept: application/vnd.github+json" \
     https://api.github.com/repos/Shauryatprogramming/bananatophatllc/pages \
     -d '{"https_enforced":true}'
   ```

---

## Repo settings

- The repo is **public** (required for free-tier GitHub Pages). If you want it
  private, you'll need to either upgrade your GitHub plan to one that supports
  private Pages, or move hosting to Cloudflare Pages / Vercel (both free for
  private repos with custom domains).
- Pages is set to deploy from the `gh-pages` branch / root.

## Re-deploying changes

After making code changes on `main`:

```bash
GITHUB_TOKEN=<your token with repo scope> npm run deploy
```

That builds the site and force-pushes the new `dist/` to `gh-pages`.
GitHub Pages picks up the change within ~30 seconds.

## Troubleshooting

**"Site not found" / browser safety warning:** DNS still pointing at LiquidWeb.
Update the A records as above.

**HTTPS not available:** Wait 5–10 minutes after DNS is correct for GitHub to
provision the cert, then enable enforcement (above).

**Old content showing:** Hard-refresh (Cmd+Shift+R). GitHub Pages caches via
Fastly; CDN takes ~30s to propagate after a deploy.
