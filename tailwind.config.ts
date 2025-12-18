import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Quan trọng: Chỉ định cho Tailwind quét class trong thư mục src
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        // Thêm font Nunito vào theme để Tailwind nhận diện
        sans: ["var(--font-nunito)", "sans-serif"], 
      },
    },
  },
  plugins: [],
};
export default config;