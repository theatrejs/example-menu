const path = require('path');

function configuration() {

    return {

        'entry': path.resolve(__dirname, 'sources', 'index.js'),
        'experiments': {

            'topLevelAwait': true
        },
        'module': {

            'rules': [

                {
                    'test': /\.mp3|\.wav$/,
                    'use': [

                        {
                            'loader': 'file-loader'
                        }
                    ]
                },
                {
                    'test': /\.jpeg|\.jpg|\.png$/,
                    'type': 'asset/resource'
                }
            ]
        },
        'output': {

            'path': path.resolve(__dirname, 'distribution', 'bundle'),
            'filename': 'bundle.js',
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
