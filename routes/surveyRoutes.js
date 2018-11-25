const requireLogin = require('../middlewires/requireLogin');
const requireCredits = require('../middlewires/requireCredits');
const Survey = require('../models/Surveys');
const Mailer =  require('../services/Mailer');
const surveyTemplate = require('../services/emailtemplates/surveyTemplate')


module.exports = app => {

    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {

        const { title, subject, body, recipients } = req.body;
        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => { email }),
            _user: req.user.id,
            dateSent: Date.now()
        });
        const mailer =  new Mailer(survey, surveyTemplate(survey));
    });
}