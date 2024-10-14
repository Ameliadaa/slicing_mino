import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: { 
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary-theme': "#364F6B", 
        'secondary-theme': "#3FC1C9",
        'tersier-theme': "#FC5185",
        'primary-1':"#FFFFFF" , 
        'secondary-2': "#F8F8F8",
        'tersier-3': "#FAFAFA" ,
        'primary-t': "#181616" ,
        'secondary-t': "#333333",
        'tersier-t': "#898989"

      },
      fontFamily: {  
        Montserrat: ["Montserrat", "sans-serif"], 
      },
      fontSize: {
        'kepala-1': ['36px', { lineHeight: '1.05', fontWeight: '700' }], 
        'kepala-2': ['28px', { lineHeight: '1.05', fontWeight: '400' }], 
        'kepala-3': ['24px', { lineHeight: '1.05', fontWeight: '700' }], 
        'kepala-4': ['20px', { lineHeight: '1.05', fontWeight: '700' }], 
        'kepala-5': ['18px', { lineHeight: '1.05', fontWeight: '400' }], 
        'kepala-6': ['14px', { lineHeight: '1.05', fontWeight: '400',  letterSpacing: '0.05em' }],
        'body-base': ['16px', { lineHeight: '1.05', fontWeight: '400' }],
        'body-small': ['12px', { lineHeight: '1.05', fontWeight: '400' }],
        'body-span': ['10px', { lineHeight: '1.05', fontWeight: '700' }],
           

      },
      screens: {
        'responsive-sm': {'min': '365px', 'max': '768px'}, 
      },
    },
  },
  plugins: [],
};

export default config;
