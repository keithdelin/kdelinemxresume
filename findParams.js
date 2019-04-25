exports.findOK = (req, res) => {
    //console.log(`params = ${ req.query.id }`);
    //res.send(`OK`);

    if (req.query.q === "Puzzle") {
        res.send(`ABCD
A=>>>
B<=><
C<<=<
D<>>=`);
    } else {
        res.send(`OK`);
    }
};

exports.findPhone = (req, res) => {
    res.send(` ABCD
    A=>>>
    B<=><
    C<<=<
    D<>>=`);
};