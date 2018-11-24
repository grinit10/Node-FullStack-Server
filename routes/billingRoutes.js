const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewires/requireLogin')

module.exports = app => {

    app.post('/api/stripe', requireLogin, async (req, res) => {

        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$1 for 1 credit',
            'source': req.body.id
        })
        req.user.credits += 5;
       res.send(await req.user.save());
    });
}