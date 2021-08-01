const 
  crypto = require('crypto'),
  algorithm = 'aes-256-ctr',  
  secretKey = process.env.encryptKey,  
  iv = crypto.randomBytes(16);



module.exports =  {
  // Validation for Registration
  encrypt(text) {
  // const encrypt = (encrypt) => {
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    }
  },

  decrypt(hash) {
  // const decrypt = (hash) => {
    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));
    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);
    return decrpyted.toString();
  }
}

// module.exports = {
//     encrypt,
//     decrypt
// };
