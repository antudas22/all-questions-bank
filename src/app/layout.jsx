import React from 'react';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Roboto } from "next/font/google";
import classNames from "@/utils/classNames";
import "./globals.css";

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
          "container mx-auto px-2 font-roboto lg:px-32"
        )}>
                <div className="flex min-h-screen flex-col justify-between">
                    <div>
                        <Navbar />
                        <main>{children}</main>
                    </div>
                    <Footer />
                </div>
            </body>
        </html>
    );
};

export default RootLayout;