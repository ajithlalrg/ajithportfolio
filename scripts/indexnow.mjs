// Tells IndexNow engines (Bing, which feeds ChatGPT search and Copilot, plus Yandex, Seznam, Naver)
// to recrawl every URL in the live sitemap. Run after a production deploy: npm run indexnow
// The key file is public/dcb807e44441979c32c165fdcd4fe332.txt; keep host in sync with lib/site.ts.
const host = "ajithlalr.vercel.app";
const key = "dcb807e44441979c32c165fdcd4fe332";

const sitemap = await fetch(`https://${host}/sitemap.xml`).then((r) => r.text());
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }),
});

console.log(`IndexNow: ${res.status} ${res.statusText} for ${urlList.length} URLs`);
if (!res.ok) process.exit(1);
