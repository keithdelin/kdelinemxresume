exports.findParams = (req, res) => {
    console.log(`params = ${ req.query.id }`);
    //res.send(`${req.query.id}, ${req.query.name}`);
    res.send(`OK`);
    next();
    res.send(`Keith`);
};