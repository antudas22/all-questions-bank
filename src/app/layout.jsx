import React from 'react';
import Navbar from '@/components/Navbar'
import Dropdownbar from '@/components/Dropdownbar'
import Footer from '@/components/Footer'
import { Roboto } from "next/font/google";
import classNames from "@/utils/classNames";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import Providers from '../providers';

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    subsets: ["latin"],
    variable: "--font-roboto",
  });
  
  export const metadata = {
    title: "All Questions Bank",
    description: "Get all questions and answers here.",
  };

const RootLayout = ({children}) => {
    return (
        <html lang="en">
            <body className={classNames(
          roboto.variable,
          "container mx-auto px-1 font-roboto lg:px-32"
        )}>
                <Providers>
                <div className="flex min-h-screen flex-col justify-between">
                    <div>
                        <Navbar />
                        <Dropdownbar />
                        <main>{children}</main>
                    </div>
                    <Footer />
                </div>
                </Providers>
                    <Toaster />
            </body>
        </html>
    );
};

export default RootLayout;