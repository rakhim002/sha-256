function sha256 (string) {
	// create a new instance of the crypto object
    const crypto = require('crypto');
    // create a new hash object using the sha256 algorithm
    const hash = crypto.createHash('sha256');
    // update the hash with the message
    hash.update(string);
    // return the hexadecimal representation of the hash
    return hash.digest('hex');
}