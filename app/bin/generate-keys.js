require('dotenv').config();
const NodeRSA = require('node-rsa');
const fs = require('fs');

const key = new NodeRSA({b: 1024});
const publicKey = key.exportKey('pkcs8-public-pem');
const privateKey = key.exportKey('pkcs1-pem');
fs.writeFileSync(process.env.JWT_PUBLIC_PATH, publicKey);
fs.writeFileSync(process.env.JWT_PRIVATE_PATH, privateKey);
