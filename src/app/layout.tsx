// src/app/layout.tsx
'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from 'react-redux';
import { store } from './store/store';
import './globals.css';
import  Header  from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Header logoPath={""} />
          <main  className = "bg-white  ">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
