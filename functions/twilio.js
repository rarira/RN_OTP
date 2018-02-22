const twilio = require('twilio');

const accountSid = 'ACaff127ec4d86deb159348b151961b088';
const authToken = 'd0ce47ea694d86087ea74d5abc60ef89';

module.exports = new twilio.Twilio(accountSid, authToken);
