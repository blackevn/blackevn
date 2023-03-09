/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
  ],
  theme: {
    extend: {},

  },

  daisyui: {
    themes: [
      {
            mytheme: {
                          


                  "primary": "#570DF8",
 

                  "secondary": "#F000B8",
             


                  "accent": "#37CDBE",
                          


                  "neutral": "#3D4451",
                          


                  "base-100": "#e5e7eb",
                          


                  "info": "#3ABFF8",
                          


                  "success": "#36D399",
                          


                  "warning": "#FBBD23",
                          


                  "error": "#F87272",
        },
      },
    ],
  },
  
  plugins: [require("daisyui")],
}