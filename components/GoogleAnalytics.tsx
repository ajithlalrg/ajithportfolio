import Script from "next/script";
import ConsentBanner from "./ConsentBanner";
import AnalyticsPageViews from "./AnalyticsPageViews";
import { consentKey, consentRegions } from "@/lib/consent";

// GA4 loads only when NEXT_PUBLIC_GA_ID is set (Vercel → Production), so local dev and previews stay untracked.
// lazyOnload keeps gtag.js off the critical path so it doesn't cost PageSpeed points.
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function GoogleAnalytics() {
  if (!gaId || !/^G-[A-Z0-9]+$/.test(gaId)) return null;

  // Consent Mode v2: denied by default in consentRegions, granted elsewhere; ad signals always off.
  // A stored banner choice is re-applied before config so returning visitors keep their answer.
  // Custom events (enhanced measurement already covers page_view, scroll, outbound click, file_download):
  //   contact_click {method: "email" | "phone" | "linkedin"}, faq_open {question}
  // Registered in GA4 as custom dimensions "Contact method" (method) and "FAQ question" (question).
  // History-based page views are off in GA so #section jumps don't count; AnalyticsPageViews sends route changes.
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="lazyOnload" />
      <Script id="ga4-init" strategy="lazyOnload">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
var noAds={ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'};
gtag('consent','default',Object.assign({analytics_storage:'denied',region:${JSON.stringify(consentRegions)}},noAds));
gtag('consent','default',Object.assign({analytics_storage:'granted'},noAds));
try{var c=localStorage.getItem('${consentKey}');if(c==='granted'||c==='denied')gtag('consent','update',{analytics_storage:c});}catch(e){}
gtag('js',new Date());gtag('config','${gaId}');
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href]');if(!a)return;var h=a.getAttribute('href');
if(h.indexOf('mailto:')===0)gtag('event','contact_click',{method:'email'});else if(h.indexOf('tel:')===0)gtag('event','contact_click',{method:'phone'});else if(h.indexOf('linkedin.com/')>-1)gtag('event','contact_click',{method:'linkedin'});});
document.addEventListener('toggle',function(e){var d=e.target;if(d.tagName==='DETAILS'&&d.open){var q=d.querySelector('summary h3');gtag('event','faq_open',{question:q?q.textContent.trim().slice(0,100):''});}},true);`}
      </Script>
      <ConsentBanner />
      <AnalyticsPageViews />
    </>
  );
}
