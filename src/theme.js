import {
  createContext,
  useState,
  useMemo,
} from "@mui/material/styles/createTransitions";
import { createTheme } from "@mui/material/Styles";
import { color } from "@mui/system";

//colors design badges

export default BadgesColors = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          900: "#05130f",
          800: "#09251f",
          700: "#0e382e",
          600: "#124a3e",
          500: "#175d4d",
          400: "#457d71",
          300: "#749e94",
          200: "#a2beb8",
          100: "#d1dfdb",
        },
        primary: {
          900: "#061d19",
          800: "#0b3a32",
          700: "#11564a",
          600: "#167363",
          500: "#1c907c",
          400: "#49a696",
          300: "#77bcb0",
          200: "#a4d3cb",
          100: "#d2e9e5",
        },
        greenAccent: {
          900: "#132928",
          800: "#275150",
          700: "#3a7a78",
          600: "#4ea2a0",
          500: "#61cbc8",
          400: "#81d5d3",
          300: "#a0e0de",
          200: "#c0eae9",
          100: "#dff5f4",
        },
        orangeAccent: {
          900: "#302024",
          800: "#5f4048",
          700: "#8f616d",
          600: "#be8191",
          500: "#eea1b5",
          400: "#f1b4c4",
          300: "#f5c7d3",
          200: "#f8d9e1",
          100: "#fcecf0",
        },
        blueAccent: {
          900: "#170e28",
          800: "#2e1b50",
          700: "#452979",
          600: "#5c36a1",
          500: "#7344c9",
          400: "#8f69d4",
          300: "#ab8fdf",
          200: "#c7b4e9",
          100: "#e3daf4",
        },
      }
    : {
        grey: {
          100: "#05130f",
          200: "#09251f",
          300: "#0e382e",
          400: "#124a3e",
          500: "#175d4d",
          600: "#457d71",
          700: "#749e94",
          800: "#a2beb8",
          900: "#d1dfdb",
        },
        primary: {
          100: "#061d19",
          200: "#0b3a32",
          300: "#11564a",
          400: "#167363",
          500: "#1c907c",
          600: "#49a696",
          700: "#77bcb0",
          800: "#a4d3cb",
          900: "#d2e9e5",
        },
        greenAccent: {
          100: "#132928",
          200: "#275150",
          300: "#3a7a78",
          400: "#4ea2a0",
          500: "#61cbc8",
          600: "#81d5d3",
          700: "#a0e0de",
          800: "#c0eae9",
          900: "#dff5f4",
        },
        orangeAccent: {
          100: "#302024",
          200: "#5f4048",
          300: "#8f616d",
          400: "#be8191",
          500: "#eea1b5",
          600: "#f1b4c4",
          700: "#f5c7d3",
          800: "#f8d9e1",
          900: "#fcecf0",
        },
        blueAccent: {
          100: "#170e28",
          200: "#2e1b50",
          300: "#452979",
          400: "#5c36a1",
          500: "#7344c9",
          600: "#8f69d4",
          700: "#ab8fdf",
          800: "#c7b4e9",
          900: "#e3daf4",
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
