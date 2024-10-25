/** @type {import('tailwindcss').Config} */

const colors = [
  'rgb(151, 123, 242)',
  '#EB6263',
  '#4c568f',
  '#008cff',
  '#FEAA17',
  '#b509ac',
];

module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  safelist: [
    ...Array.from({ length: 49 }, (_, i) => [
      `text-[${0.5 + i * 0.0625}rem]`,
      `md:text-[${0.5 + i * 0.0625}rem]`,
    ]).flat(),
    ...colors.map((color) => `border-[${color}]`),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
