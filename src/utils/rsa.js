// rsa.js
import forge from "node-forge";

// Generate RSA Key Pair
export function generateKeyPair() {
  const keyPair = forge.pki.rsa.generateKeyPair({ bits: 2048, e: 0x10001 });
  return {
    publicKey: forge.pki.publicKeyToPem(keyPair.publicKey),
    privateKey: forge.pki.privateKeyToPem(keyPair.privateKey),
  };
}

// Encrypt Message
export function encryptMessage(publicKeyPem, message) {
  const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
  const encrypted = publicKey.encrypt(message, "RSA-OAEP");
  return forge.util.encode64(encrypted);
}

// Decrypt Message
export function decryptMessage(privateKeyPem, encryptedMessage) {
  const privateKey = forge.pki.privateKeyFromPem(privateKeyPem);
  const encryptedBytes = forge.util.decode64(encryptedMessage);
  const decrypted = privateKey.decrypt(encryptedBytes, "RSA-OAEP");
  return decrypted;
}
