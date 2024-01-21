export default function useTheme(themeOption: "dark" | "light") {
  const theme = {
    light: {
      white: "#fff",
      black: "#000",
      primary: "#FFD74F",
      gray: "#ccc",
    },
    dark: {
      white: "#151515",
      black: "#fff",
      primary: "#FFD74F",
      gray: "#ccc"
    },
  }

  return theme[themeOption]
}