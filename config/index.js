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
        token: 'a76a7d69e589eef5ea9a84567622691420fc38a5'
    }
}

module.exports = function(mode) {
    return config[mode || process.argv[2] || 'local'] || config.local;
}
