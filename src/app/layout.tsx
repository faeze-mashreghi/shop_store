import React from "react";
import './globals.css'
import {Provider} from "react-redux";
import {store} from "../store";
import {Providers} from "./Providers";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <Providers>
        <html lang="en">
        <body>
            {children}

        </body>
        </html>
        </Providers>    )
}