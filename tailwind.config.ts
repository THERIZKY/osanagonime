import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
const config: Config = {
    content: [
        "./node_modules/flowbite-react/**/*.js",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-home":
                    "linear-gradient(180deg, rgba(38,38,38,1) 0%, rgba(99,99,99,1) 100%)",
            },
        },
    },
    darkMode: "class",
    plugins: [nextui(), require("daisyui")],
};
export default config;
