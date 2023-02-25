import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

//colors design badges

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#dfdfdf",
          200: "#c0c0c0",
          300: "#a0a0a0",
          400: "#818181",
          500: "#616161",
          600: "#4e4e4e",
          700: "#3a3a3a",
          800: "#272727",
          900: "#131313",
        },
        redAccent: {
          100: "#ffe2d9",
          200: "#ffc6b4",
          300: "#ffa98e",
          400: "#ff8d69",
          500: "#ff7043",
          600: "#cc5a36",
          700: "#994328",
          800: "#662d1b",
          900: "#33160d",
        },
        greenAccent: {
          100: "#e1fcef",
          200: "#c3f9df",
          300: "#a5f6ce",
          400: "#87f3be",
          500: "#69f0ae",
          600: "#54c08b",
          700: "#3f9068",
          800: "#2a6046",
          900: "#153023",
        },
        skyAccent: {
          100: "#d1ffff",
          200: "#a3ffff",
          300: "#74ffff",
          400: "#46ffff",
          500: "#18ffff",
          600: "#13cccc",
          700: "#0e9999",
          800: "#0a6666",
          900: "#053333",
        },
        blueAccent: {
          100: "#cce7e5",
          200: "#99d0ca",
          300: "#66b8b0",
          400: "#33a195",
          500: "#00897b",
          600: "#006e62",
          700: "#00524a",
          800: "#003731",
          900: "#001b19",
        },
      }
    : {
        grey: {
          100: "#131313",
          200: "#272727",
          300: "#3a3a3a",
          400: "#4e4e4e",
          500: "#616161",
          600: "#818181",
          700: "#a0a0a0",
          800: "#c0c0c0",
          900: "#dfdfdf",
        },
        redAccent: {
          100: "#33160d",
          200: "#662d1b",
          300: "#994328",
          400: "#cc5a36",
          500: "#ff7043",
          600: "#ff8d69",
          700: "#ffa98e",
          800: "#ffc6b4",
          900: "#ffe2d9",
        },
        greenAccent: {
          100: "#e1fcef",
          200: "#c3f9df",
          300: "#a5f6ce",
          400: "#87f3be",
          500: "#69f0ae",
          600: "#54c08b",
          700: "#3f9068",
          800: "#2a6046",
          900: "#153023",
        },
        skyAccent: {
          100: "#053333",
          200: "#0a6666",
          300: "#0e9999",
          400: "#13cccc",
          500: "#18ffff",
          600: "#46ffff",
          700: "#74ffff",
          800: "#a3ffff",
          900: "#d1ffff",
        },
        blueAccent: {
          100: "#001b19",
          200: "#003731",
          300: "#00524a",
          400: "#006e62",
          500: "#00897b",
          600: "#33a195",
          700: "#66b8b0",
          800: "#99d0ca",
          900: "#cce7e5",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
