import type {Metadata} from 'next';
import './globals.css';
import {Toaster} from '@/components/ui/toaster';
import {MouseSpotlight} from '@/components/ui/mouse-spotlight';
import {ScrollProgress} from '@/components/ui/scroll-progress';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'EpicResurge | Scam Fund Restitution & Digital Asset Recovery',
  description: 'Specialized asset recovery and scam fund restitution for victims of cryptocurrency fraud, fake investment platforms, and unauthorized transfers. Free confidential case assessment.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) - GTM-PLBVKBW9 */}
        <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-PLBVKBW9"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-[#F8F7F4] text-[#0B1528] selection:bg-[#C5A059]/20 selection:text-[#0B1528] relative overflow-x-hidden max-w-full">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PLBVKBW9"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ScrollProgress />
        <MouseSpotlight />
        {children}
        <Toaster />

        {/* Start of Tawk.to Script */}
        <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/6af34b9dd6d4bc3c464fccf7/1k735utbh';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
        {/* End of Tawk.to Script */}
      </body>
    </html>
  );
}
