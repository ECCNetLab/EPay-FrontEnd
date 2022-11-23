/** @type {import('stylelint').Configuration} */
const stylelintConfig = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recess-order',
    ],
    plugins: [
        'stylelint-order',
    ],
    ignoreFiles: [
        '**/node_modules/**',
        'src/styles/bundle.css',
    ],
    rules: {
        'string-quotes': 'single',
        'at-rule-no-unknown': [
            true,
            {
                "ignoreAtRules": [
                    "tailwind",
                    "apply",
                    "variants",
                    "responsive",
                    "screen"
                ]
            }
        ],
        "order/properties-alphabetical-order": true
    },
};

module.exports = stylelintConfig