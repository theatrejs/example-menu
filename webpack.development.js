const path = require('path');

function configuration() {

    return {

        'devServer': {

            'client': {

                'logging': 'warn'
            },
            'static': {

                'directory': path.resolve(__dirname, 'distribution')
            }
        },
        'devtool': 'inline-source-map',
        'entry': path.resolve(__dirname, 'index.js'),
        'experiments': {

            'topLevelAwait': true
        },
        'mode': 'development',
        'module': {

            'rules': [

                {
                    'test': /\.mp3$/,
                    'use': [

                        {
                            'loader': 'file-loader'
                        }
                    ]
                },
                {
                    'test': /\.png$/,
                    'type': 'asset/resource'
                }
            ]
        },
        'output': {

            'path': path.resolve(__dirname, 'distribution'),
            'filename': 'index.js',
            'assetModuleFilename': '[hash][ext]'
        },
        'resolve': {

            'alias': {

                'actors': path.resolve(__dirname, 'sources', 'actors'),
                'stages': path.resolve(__dirname, 'sources', 'stages')
            }
        }
    };
}

module.exports = configuration;
