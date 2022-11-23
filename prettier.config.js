/** @type {import('prettier').Config} */
const prettierConfig = {
    plugins: [
        require('prettier-plugin-tailwindcss')
    ],
    printWidth: 120,
    tabWidth: 2,
    singleQuote: true,
    trailingComma: "all",
    semi: false,
    parser: "typescript",
    bracketSpacing: true,
    useTabs: false,
    jsxSingleQuote: true
}

module.exports = prettierConfig