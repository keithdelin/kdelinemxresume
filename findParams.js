exports.findParams = (req, res) => {
    console.log(`params = ${ req.query.id }`);
    //res.send(`${req.query.id}, ${req.query.name}`);
    var i = 1,
        max = 10;
    
    //send multiple responses to the client
    for (; i <= max; i++) {
        if (i == 1){
            res.write('OK');
        } else {
            res.write('Keith');
        }        
    }
    
    
    //res.send(`OK, Keith`);
};