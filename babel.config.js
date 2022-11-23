/** @type {import('@babel/core').TransformOptions} */
const babelConfig = {
    presets: [
        "next/babel",
        [
            "@babel/preset-react",
            {
                "runtime": "automatic"
            }
        ],
        "@babel/preset-typescript",
        [
            "@babel/preset-env",
            {
                "targets": {
                    "ie": 11,
                    "safari": 9,
                    "node": true
                },
                "useBuiltIns": "usage",
                "corejs": 3
            }
        ],
        "react",
        [
            "env",
            {
                "targets": {
                    "browsers": [
                        "last 2 versions",
                        "safari >= 7"
                    ]
                },
                "modules": false
            }
        ]
    ],
    plugins: [
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-syntax-object-rest-spread",
        "react-hot-loader/babel",
        "transform-class-properties",
        [
            "transform-object-rest-spread",
            {
                "useBuiltIns": true
            }
        ],
        [
            "module-resolver",
            {
                "root": [
                    "."
                ],
                "alias": {
                    "@": "./"
                }
            }
        ]
    ],
    env: {
        "development": {
            "plugins": [
                "react-hot-loader/babel"
            ]
        },
        "production": {
            "plugins": [
                [
                    "babel-plugin-root-import",
                    {
                        "rootPathSuffix": "src"
                    }
                ]
            ]
        },
        "test": {
            "plugins": [
                [
                    "babel-plugin-root-import",
                    {
                        "rootPathSuffix": "src"
                    }
                ]
            ]
        }
    }
}

module.export = babelConfig
