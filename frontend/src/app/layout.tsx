"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "../components/Footer";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import { theme } from "../theme";
import { Header } from "../components/Header";
import { StateProvider } from "../components/providers/StateProviders";
import { AuthProvider } from "../components";

const inter = Inter({ subsets: ["latin"] });
<link rel="shortcut icon" href="#"></link>;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <AuthProvider>
              <StateProvider>
                <Header />
                {children}
                <Footer />
              </StateProvider>
            </AuthProvider>
            <CssBaseline />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
