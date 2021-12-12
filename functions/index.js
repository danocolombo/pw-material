const functions = require("firebase-functions");
// const config = functions.config();
const admin = require("firebase-admin");
// const nodemailer = require("nodemailer");
const cors = require("cors")({origin: true});

admin.initializeApp();


exports.sendAnMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    res.send("Message sent successfully.");
  });
});
