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
import { UserProvider } from "../components/providers/UserProviders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <UserProvider>
              <AuthProvider>
                <StateProvider>
                  <Header />
                  {children}
                  <Footer />
                </StateProvider>
              </AuthProvider>
            </UserProvider>
            <CssBaseline />
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
