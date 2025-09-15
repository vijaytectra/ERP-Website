import type { Metadata } from "next";
import { Manrope } from "next/font/google";
// import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EduSuite - All-in-One ERP for Schools, Colleges & Preschools",
    template: "%s | EduSuite"
  },
  description: "Transform your educational institution with our comprehensive ERP system. Streamline admissions, fees, academics, compliance, analytics, and parent communication in one powerful platform.",
  // ... rest of your metadata
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />

        {/* ✅ Tawk.to Script using Next.js Script component */}
        {/* <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/68c55a70864b8d192a374116/1j51eiinl';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        /> */}
      </body>
    </html>
  );
}
