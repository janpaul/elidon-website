import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";
// @ts-ignore
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(avatar|divider|image|link|snippet|popover|button|ripple|spinner).js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
      },
    },
  },
  plugins: [nextui(), addVariablesForColors],
};
export default config;
