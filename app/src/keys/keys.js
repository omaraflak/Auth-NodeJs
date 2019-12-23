const fs = require('fs');

module.exports = {
    publicKey: fs.readFileSync(process.env.JWT_PUBLIC_PATH, 'utf8'),
    privateKey: fs.readFileSync(process.env.JWT_PRIVATE_PATH, 'utf8')
};
