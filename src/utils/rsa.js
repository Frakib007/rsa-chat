import forge from "node-forge";

// Generate RSA keys
export const generateKeys = () => {
  const keypair = forge.pki.rsa.generateKeyPair({ bits: 2048 });
  const publicKey = forge.pki.publicKeyToPem(keypair.publicKey);
  const privateKey = forge.pki.privateKeyToPem(keypair.privateKey);
  return { publicKey, privateKey };
};

// Encrypt a message using a public key
export const encryptMessage = (message, publicKeyPem) => {
  const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
  const encrypted = publicKey.encrypt(message, "RSA-OAEP");
  return forge.util.encode64(encrypted); // Encode the encrypted message as Base64
};

// Decrypt a message using a private key
export const decryptMessage = (encryptedMessage, privateKeyPem) => {
  const privateKey = forge.pki.privateKeyFromPem(privateKeyPem);
  const encryptedBytes = forge.util.decode64(encryptedMessage); // Decode from Base64
  const decrypted = privateKey.decrypt(encryptedBytes, "RSA-OAEP");
  return decrypted;
};
