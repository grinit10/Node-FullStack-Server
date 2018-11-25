module.exports = (req, res, next) => {
    if(req.user.credits <= 0) {
        return res.send(403).send({err: 'Not enough credits!!'});
    }
    next();
}