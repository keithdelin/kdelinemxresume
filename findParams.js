exports.findParams = (req, res) => {
    console.log(`params = ${ req.query.id }`);
    res.send(`${req.query.id}, ${req.query.name}`);
};