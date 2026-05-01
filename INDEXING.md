# Search-engine indexing — `bananatophat.com`

The site already ships with everything search engines need: a sitemap, a
robots.txt, structured data (JSON-LD), Open Graph tags, the right meta robots
directives, and an IndexNow key file. To get into Google and Bing **quickly**,
do the following once DNS is live.

> Indexing speed depends on the engine. Bing usually shows the page within
> hours after submission. Google can take days to weeks for a brand-new domain
> regardless of what you do.

---

## 1. Google Search Console

1. Go to: <https://search.google.com/search-console>
2. Click **Add property** → **Domain** → enter `bananatophat.com`.
3. Google will give you a **TXT record** to add to your DNS — copy it, then add
   it on your A1Technology DNS panel (TXT, host: `@`, value: the long string
   Google provides). Save.
4. Back in Search Console, click **Verify** (DNS propagation takes a few
   minutes).
5. Once verified, in the sidebar go to **Sitemaps** and submit:
   ```
   https://bananatophat.com/sitemap.xml
   ```
6. Then go to the **URL Inspection** tool, paste `https://bananatophat.com/`,
   and click **Request Indexing**. (Optional — speeds up the first crawl.)

## 2. Bing Webmaster Tools

1. Go to: <https://www.bing.com/webmasters>
2. Sign in (Microsoft account). You can **import from Google Search Console**
   if you've already verified there — easiest path.
3. Otherwise: **Add a site** → `https://bananatophat.com`. Bing will give you
   either an XML file to upload or a meta tag to add. (We can add the meta tag
   to `index.html` if you tell me which one Bing gives you.)
4. Once verified, **Submit URLs and Sitemaps** → submit:
   ```
   https://bananatophat.com/sitemap.xml
   ```
5. Use **Submit URL** (single-URL panel) for the homepage.

### IndexNow (Bing + Yandex + others, instant)

The repo includes `public/b3a7f1c92e84d6d5a9c0e1f2b3d4a5b6.txt` — the verifier
file IndexNow needs. Once the site is live, you can ping IndexNow whenever you
publish:

```bash
curl -i "https://api.indexnow.org/indexnow?url=https://bananatophat.com/&key=b3a7f1c92e84d6d5a9c0e1f2b3d4a5b6"
```

(That key file is already deployed, so the ping will succeed.)

## 3. DuckDuckGo / others

DuckDuckGo aggregates from Bing — no separate submission needed. Once Bing
indexes you, DDG will follow within a couple of days.

## 4. Brave / startpage / Mojeek

These crawl independently. They'll discover the site organically once a couple
of links exist (LinkedIn page, Twitter bio, etc.). No action required.

---

## What's already wired up

- `public/sitemap.xml` — single URL, with image sitemap entry for the logo.
- `public/robots.txt` — `Allow: /`, sitemap link, explicit allows for major
  bots.
- `<meta name="robots" content="index,follow,…">` in `index.html`.
- `<link rel="canonical">` to the apex URL.
- JSON-LD `Organization` and `WebSite` schema in the head.
- Open Graph + Twitter Card meta tags using `favicon-512.png` as the share
  image.
- IndexNow verifier file at the root.
- `.well-known/security.txt` for security researchers.

## Verifying indexing

After a few days:
- `site:bananatophat.com` in Google → should return the homepage.
- `site:bananatophat.com` in Bing → should return the homepage.

If Google still shows "no results" after 2 weeks, check Search Console under
**Pages** for any indexing errors (most common: temporarily-blocked, no-index
markers — but we've configured none of those, so it shouldn't happen).
