export type Theme = Record<string, string>;

export enum ColorThemes {
  Light = "light",
  Dark = "dark",
}

type Themes = Record<ColorThemes, Theme>;

const themes: Themes = {
  light: {
    background: "#fff",
    color: "#000",
    scrollbar: "#a0a0a1",
    navigation: "#eaeaea",
    border: "#e5e5e5",
    hamburger: "#f0f0f0",
  },
  dark: {
    background: "#252525",
    color: "#fff",
    scrollbar: "#a0a0a1",
    navigation: "#212121",
    border: "#3b3b3b",
    hamburger: "#2a2a2a",
  },
};

export default themes;
