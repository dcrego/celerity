# Celerity
A fast web app server.
## SSL certificates
You have to place your certificate `.pem` files here and your passphrase in plain text.

This folder should contain 4 files:
* cert.pem - Contains the public certificate (should be in .gitignore).
* key.pem - Contains the private key (must be in .gitignore).
* passphrase.txt - Contains plain text passphrase (should be in .gitignore).
* README.md - This file (should be under git versioning).

# Generating your own self-signed SSL certificate
Self-signed certificates aren't great but they could be good enough for development/testing purposes.

1. We suggest you try this line in this folder to generate the certificate:
```
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days <duration>
```
You will need to fill in the `<duration>` field as you see fit.
1. Then you will be prompted to input the PEM pass phrase. You should generate a strong passphrase then copy and paste it in your CLI and the passphrase.txt file.
1. Finally you have to fill in the form to generate your certificate.

Congratulations! Now you have your own certificate!