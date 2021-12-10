const functions = require("firebase-functions");
const config = functions.config();
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({origin: true});


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
  cors(request, response, () => {
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
});
