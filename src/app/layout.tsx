import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {Analytics} from "@vercel/analytics/react";
import "./globals.css";
import "../styles/style.css";
import "../styles/blue.css";
import "../styles/theme.css";
import Sidebar from "@/components/sidebar/sidebar";
import Providers from "./providers";
import ThemeSwitch from "@/components/panel/ThemeSwitch";
import Script from "next/script";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Ahad Ali",
    description:
        "A backend Developer",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BLQDQ0ZDSW"></Script>
            <Script id={'google-analytics'} strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-BLQDQ0ZDSW');
                `}
            </Script>
        </head>
        <body className={inter.className}>
        <Providers>
            <div className="temp-layout">
                <ThemeSwitch/>
                <Sidebar/>
                {children}
            </div>
        </Providers>
        <Analytics/>
        </body>
        </html>
    );
}
