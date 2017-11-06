var meetings = require('../controllers/meetings.controller');
module.exports = function(app) {
    app.route('/meetings')
        .post(meetings.add)
        .get(meetings.read);
    app.route('/meetings/:meetingID')
        .delete(meetings.delete);
    app.param('meetingID', meetings.getMeetingID);
};
