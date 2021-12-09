const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const config = functions.config();

admin.initializeApp();

// auth credentials are stored in firebase
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {user: config.user.email, pass: config.user.password},
});

const mailOptions = {
  from: "DColombo Web Site",
  to: "danocolombo@gmail.com",
  subject: "testing nodemailer",
  text: "successful",
};
exports.sendMail = functions.https.onRequest((request, response) => {
  //   functions.logger.info("Hello logs!", {structuredData: true});
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      const messageBack = {
        realError: error,
        // l: config.user.email,
        // p: config.user.password,
      };
      response.send(messageBack);
    } else {
      response.send("Message sent successfully");
    }
  });
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
