/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
// Configure the email transport using the default SMTP transport and a GMail account.
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(
    `smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

exports.sendVolunteerInfo = functions.database.ref('/Palav/volunteerdata/{email}').onCreate(event => {
          const snapshot = event.data;
          const val = snapshot.val();

          console.log('value is:'+JSON.stringify(val));

          const mailOptions = {
            from: '"Palav." <noreply@palav.com>',
            to: 'dipen.acs@gmail.com'
          };

          mailOptions.subject = 'Palav Volunteer Informatio!';
          mailOptions.text = 'Thanks you for contacting to our Palav VOLUNTEER.' + JSON.stringify(val);
          return mailTransport.sendMail(mailOptions).then(() => {
            console.log('New subscription confirmation email sent to:', JSON.stringify(val));
          }).catch(error => {
            console.error('There was an error while sending the email:', error);
          });

});

exports.sendHospitalInfo = functions.database.ref('/Palav/hospitaldata/{email}').onCreate(event => {
          const snapshot = event.data;
          const val = snapshot.val();

          console.log('value is:'+JSON.stringify(val));

          const mailOptions = {
            from: '"Palav." <noreply@palav.com>',
            to: 'dipen.acs@gmail.com'
          };

          mailOptions.subject = 'Palav Hospital Data!';
          mailOptions.text = 'Thanks you for contacting to our Palav HOSPITAL.' + JSON.stringify(val);
          return mailTransport.sendMail(mailOptions).then(() => {
            console.log('New subscription confirmation email sent to:', JSON.stringify(val));
          }).catch(error => {
            console.error('There was an error while sending the email:', error);
          });

});

exports.sendSponserInfo = functions.database.ref('/Palav/sponserdata/{email}').onCreate(event => {
      const snapshot = event.data;
      const val = snapshot.val();

      console.log('value is:'+JSON.stringify(val));

      const mailOptions = {
        from: '"Palav." <noreply@palav.com>',
        to: 'dipen.acs@gmail.com'
      };

      mailOptions.subject = 'Palav Sponser Information!';
      mailOptions.text = 'Thanks you for contacting to our Palav Sponser.' + JSON.stringify(val);
      return mailTransport.sendMail(mailOptions).then(() => {
        console.log('New subscription confirmation email sent to:', JSON.stringify(val));
      }).catch(error => {
        console.error('There was an error while sending the email:', error);
      });

});

exports.sendContactEmail = functions.database.ref('/Palav/contactus/{email}').onCreate(event => {
  const snapshot = event.data;
  const val = snapshot.val();

  console.log('value is:'+JSON.stringify(val));

  const mailOptions = {
    from: '"Palav." <noreply@palav.com>',
    to: 'dipen.acs@gmail.com'
  };

  mailOptions.subject = 'Palav Contact US!';
  mailOptions.text = 'Thanks you for contacting to our Palav newsletter.';
  return mailTransport.sendMail(mailOptions).then(() => {
    console.log('New subscription confirmation email sent to:', JSON.stringify(val));
  }).catch(error => {
    console.error('There was an error while sending the email:', error);
  });

});
// Sends an email confirmation when a user changes his mailing list subscription.
exports.sendEmailConfirmation = functions.database.ref('/Palav/saveinfo/{userid}').onCreate(event => {
  const snapshot = event.data;
  const val = snapshot.val();
console.log('value is:'+JSON.stringify(val));
  /*if (!snapshot.changed('subscribedToMailingList')) {
    return;
  }*/

  const mailOptions = {
    from: '"Palav." <noreply@palav.com>',
    to: val.userid
  };

  // The user just subscribed to our newsletter.
  //if (val.subscribedToMailingList) {
    mailOptions.subject = 'Palav Save Resources!';
    mailOptions.text = 'Thanks you for subscribing to our Palav newsletter.';
    return mailTransport.sendMail(mailOptions).then(() => {
      console.log('New subscription confirmation email sent to:', val.userid);
    }).catch(error => {
      console.error('There was an error while sending the email:', error);
    });
  //}

  // The user unsubscribed to the newsletter.
  /*mailOptions.subject = 'Sad to see you go :`(';
  mailOptions.text = 'I hereby confirm that I will stop sending you the newsletter.';
  return mailTransport.sendMail(mailOptions).then(() => {
    console.log('New unsubscription confirmation email sent to:', val.email);
  }).catch(error => {
    console.error('There was an error while sending the email:', error);
  });*/


});
