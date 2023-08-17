const { nextui } = require('@nextui-org/react');
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
        colors: {
            blanco: '#ffffff',
            gris: '#f2f2f2',
            azul: '#7e5bef',
            primario: '#f39116',
            secundario: '#98c342',
            terciario: '#0a72b7',
        },
    },
    darkMode: 'class',
    plugins: [nextui()],
};
