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
        gray: {
          900: "#141414",
          800: "#292929",
          700: "#3d3d3d",
          600: "#525252",
          500: "#666666",
          400: "#858585",
          300: "#a3a3a3",
          200: "#c2c2c2",
          100: "#e0e0e0",
        },
        primary: {
          900: "#040509",
          800: "#080b12",
          700: "#0c101b",
          600: "#101624",
          500: "#141b2d",
          400: "#434957",
          300: "#727681",
          200: "#a1a4ab",
          100: "#d0d1d5",
        },
        greenAccent: {
          900: "#0f2922",
          800: "#1e5245",
          700: "#2e7c67",
          600: "#3da58a",
          500: "#4cceac",
          400: "#70d8bd",
          300: "#94e2cd",
          200: "#b7ebde",
          100: "#dbf5ee",
        },
        redAccent: {
          900: "#2c100f",
          800: "#58201e",
          700: "#832f2c",
          600: "#af3f3b",
          500: "#db4f4a",
          400: "#e2726e",
          300: "#e99592",
          200: "#f1b9b7",
          100: "#f8dcdb",
        },
        blueAccent: {
          900: "#151632",
          800: "#2a2d64",
          700: "#3e4396",
          600: "#535ac8",
          500: "#6870fa",
          400: "#868dfb",
          300: "#a4a9fc",
          200: "#c3c6fd",
          100: "#e1e2fe",
        },
      }
    : {
        gray: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#101624",
          500: "#141b2d",
          600: "#434957",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        greenAccent: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
      }),
});