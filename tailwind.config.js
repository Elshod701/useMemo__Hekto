/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1240px",
        },
      },
      fontFamily: {
        secondary: "Josefin Sans",
      },
      colors: {
        pink: "#FB2E86",
        OffNavyBlue: "#3F509E",
        NavyBlue: "#151875",
        Purple: "#FB2E86",
        Red: "#FB2E86",
        SkyBlue: "#FB2E86",
        Blue: "#2F1AC4",
        PantonePurple: "#E0D3F5",
        violet: "#7E33E0",
        ugsadug: "#9F63B5",
        white: "#F1F1F1",
        kok: "#0D0E43",
        CoolFrost: "#E7E6EF",
        FoundationWhite: "#F2F0FF",
        SoftBlueLavender: "#8A8FB9",
        SpaceColonization: "#1A0B5B",
        lightgray: "#F6F7FB",
        BrilliantWhite: "#EEEFFB",
      },
      screens: {
        sm: "576px",
        md: "992px",
        lg: "1200px",
      },
      boxShadow: {
        card: "0px 0px 25px 0px rgba(0, 0, 0, 0.10)  ",
      },
    },
  },
  plugins: [],
};
