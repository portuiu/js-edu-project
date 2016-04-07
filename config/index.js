var config = {
    local: {
        mode: 'local',
        port: 80
    },
    azure: {
        mode: 'hosting',
        port: process.env.PORT || 1337
    },
    github: {
        token: 'f3a52b1a35f821e0e35e494e02e582912e95d8bc'
    }
}

module.exports = function(mode) {
    return config[mode || process.argv[2] || 'local'] || config.local;
}

module.exports.token = config.github.token;
