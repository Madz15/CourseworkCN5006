const os = require('os');

function osInformation (req, res) {
    res.send({
        userInfo: os.userInfo(),
        cpus: os.cpus(),
        platform: os.platform(),
        Architecture: os.arch(),
        Hostname: os.hostname(),
        OsType: os.type(),
        UpTime: os.uptime(),
        totalmem: os.totalmem(),
        nodejs_version: process.version,
        
    })
}

module.exports = osInformation