exports.findOK = (req, res) => {
    
    let q = req.query.q;

    switch (q) {
        case "Puzzle":
            msg = ` ABCD
A=<<<
B>=><
C><=<
D>>>=`;
            break;
        case "Name":
            msg = `Keith De-Lin`
            break;
        case "Email Address":
            msg = `kdelin@gmail.com`
            break;
        case "Phone":
            msg = `347-243-6435`
            break;
        case "Position":
            msg = `Software Engineer`
            break;
        case "Years":
            msg = `8`
            break;
        case "Referrer":
            msg = `EMX Recruiter`
            break;
        case "Degree":
            msg = `BA`
            break;
        case "Resume":
            msg = `http://www.linkedin.com/keithdelin`
            break;
        case "Source":
            msg = `http://keithdelin.herokuapp.com/`
            break;
        case "Status":
            msg = `Yes`
            break;            
        default:
            msg = `OK`
            break;
    }

    res.send(msg);
};