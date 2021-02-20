const fs = require('fs')
fs.writeFileSync(
    './.env',
    `VUE_APP_COCKPIT_BASEURL=${process.env.VUE_APP_COCKPIT_BASEURL}\n` +
    `VUE_APP_COCKPIT_TOKEN=${process.env.VUE_APP_COCKPIT_TOKEN}\n`
)