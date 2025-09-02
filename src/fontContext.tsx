'use client';
import { Inter,Noto_Serif,
    Source_Code_Pro
 } from "next/font/google";

import { createContext, PropsWithChildren, useState } from "react";

const fontContext = createContext({});
const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
  });

  const noto = Noto_Serif({
    variable: "--font-noto-serif",
    subsets: ["latin"],
  });

  const CodePro = Source_Code_Pro({
    variable: "--font-source-code-pro",
    subsets: ["latin"],
  });
export const FontContextProvider = ({children}:PropsWithChildren) => {
    

    const [font, setFont] = useState(CodePro.className);
    return (
        <fontContext.Provider
            value={{ 
            font, 
            setFont,
        }}
    >
        <main className={font}>{children}</main>
        </fontContext.Provider>
  );

};