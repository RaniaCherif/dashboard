import {
  createContext,
  useState,
  useMemo,
} from "@mui/material/styles/createTransitions";
import { createTheme } from "@mui/material/Styles";

//colors design badges

export default BadgesColors = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          900: "#0d0d0d",
          800: "#1a1a1a",
          700: "#282828",
          600: "#353535",
          500: "#424242",
          400: "#686868",
          300: "#8e8e8e",
          200: "#b3b3b3",
          100: "#d9d9d9",
        },
        primary: {
          900: "#071e31",
          800: "#0d3c61",
          700: "#145a92",
          600: "#1a78c2",
          500: "#2196f3",
          400: "#4dabf5",
          300: "#7ac0f8",
          200: "#a6d5fa",
          100: "#d3eafd",
        },
        greenAccent: {
          900: "#150c25",
          800: "#291749",
          700: "#3e236e",
          600: "#522e92",
          500: "#673ab7",
          400: "#8561c5",
          300: "#a489d4",
          200: "#c2b0e2",
          100: "#e1d8f1",
        },
        blueAccent: {
          900: "#001815",
          800: "#00302b",
          700: "#004940",
          600: "#006156",
          500: "#00796b",
          400: "#339489",
          300: "#66afa6",
          200: "#99c9c4",
          100: "#cce4e1",
        },
        redAccent: {
          900: "#301600",
          800: "#602b00",
          700: "#8f4100",
          600: "#bf5600",
          500: "#ef6c00",
          400: "#f28933",
          300: "#f5a766",
          200: "#f9c499",
          100: "#fce2cc",
        },
      }
    : {
        grey: {
          100: "#d9d9d9",
          200: "#b3b3b3",
          300: "#8e8e8e",
          400: "#686868",
          500: "#424242",
          600: "#353535",
          700: "#282828",
          800: "#1a1a1a",
          900: "#0d0d0d",
        },
        primary: {
          100: "#d3eafd",
          200: "#a6d5fa",
          300: "#7ac0f8",
          400: "#f2f0f0",
          500: "#2196f3",
          600: "#1a78c2",
          700: "#145a92",
          800: "#0d3c61",
          900: "#071e31",
        },
        greenAccent: {
          100: "#e1d8f1",
          200: "#c2b0e2",
          300: "#a489d4",
          400: "#8561c5",
          500: "#673ab7",
          600: "#522e92",
          700: "#3e236e",
          800: "#291749",
          900: "#150c25",
        },
        blueAccent: {
          100: "#cce4e1",
          200: "#99c9c4",
          300: "#66afa6",
          400: "#339489",
          500: "#00796b",
          600: "#006156",
          700: "#004940",
          800: "#00302b",
          900: "#001815",
        },
        redAccent: {
          100: "#fce2cc",
          200: "#f9c499",
          300: "#f5a766",
          400: "#f28933",
          500: "#ef6c00",
          600: "#bf5600",
          700: "#8f4100",
          800: "#602b00",
          900: "#301600",
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
