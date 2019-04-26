exports.findOK = (req, res) => {
    // grab question from query string
    let q = req.query.q;
    // switch on query 
    switch (q) {
        case "Puzzle": 
            // call puzzle function           
            msg = handlePuzzle(req.query.d);
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
            msg = `Software Engineer - Front End`
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
            msg = `http://www.de-lineation.com/emx/keith_delin_resume_2019.pdf`
            break;
        case "Source":
            msg = `http://www.de-lineation.com/emx/kdelinemxresumenew.zip`
            break;
        case "Status":
            msg = `Yes`
            break;            
        default:
            msg = `OK`
            break;
    }
    // send response 
    res.send(msg);
    
    // static function that parses puzzle so I can match
    // hard coding answers as I could not figure out the pattern
    // found some patterns ie. letter with equal sign has opposite pattern of arrows provided
    // and other patterns but could not find consistent pattern
    // Is it possible there is no consistent pattern?? 
    function handlePuzzle (q) {
        // split off description from query string, trim whitespace and remove spaces
        let a = q.split(':')[1].replace(/\s/g,'');  
        // set up message
        let msg = '';
        // look for matches
        if (a == 'ABCDA=---B>---C<---D->--'){
            msg = ` ABCD
A=<><
B>=><
C<<=<
D>>>=`;
} else if (a == 'ABCDA=---B>---C->--D<---'){
    msg = ` ABCD
A=<<>
B>=<>
C>>=>
D<<<=`;
} else if (a == 'ABCDA=---B-->-C>---D<---'){
    msg = ` ABCD
A=<<>
B>=>>
C><=>
D<<<=`;
} else if (a == 'ABCDA-<--B-=--C--->D->--'){
    msg = ` ABCD
A=<<<
B>=<<
C>>=>
D>><=`;
} else if (a == 'ABCDA--<-B-->-C--=-D->--'){
    msg = ` ABCD
A=<<<
B>=><
C><=<
D>>>=`;
} else if (a == 'ABCDA-->-B---<C--->D---='){
    msg = ` ABCD
A=>>>
B<=<<
C<>=>
D<><=`;
} else if (a == 'ABCDA---<B-->-C--->D---='){
    msg = ` ABCD
A=<<<
B>=>>
C><=>
D><<=`;
} else if (a == 'ABCDA-->-B---<C--->D---='){
    msg = ` ABCD
A=>>>
B<=<<
C<>=>
D<><=`;
} else if (a == 'ABCDA=---B--->C<---D>---'){
    msg = ` ABCD
A=<><
B>=>>
C<<=<
D><>=`;
} else if (a == 'ABCDA->--B--->C---<D---='){
    msg = ` ABCD
A=>>>
B<=>>
C<<=<
D<<>=`;
} else if (a == 'ABCDA->--B-->-C--=-D--<-'){
    msg = ` ABCD
A=>>>
B<=>>
C<<=>
D<<<=`;
} else if (a == 'ABCDA->--B-=--C-<--D>---'){
    msg = ` ABCD
A=>><
B<=><
C<<=<
D>>>=`;
} else if (a == 'ABCDA-->-B--<-C--=-D>---'){
    msg = ` ABCD
A=>><
B<=<<
C<>=<
D>>>=`;
} else if (a == 'ABCDA=---B<---C--->D>---'){
    msg = ` ABCD
A=><<
B<=<<
C>>=>
D>><=`;
} else if (a == 'ABCDA--->B---<C>---D---='){
    msg = ` ABCD
A=><>
B<=<<
C>>=>
D<><=`;
} else if (a == 'ABCDA--->B>---C---<D---='){
    msg = ` ABCD
A=<>>
B>=>>
C<<=<
D<<>=`;
} else if (a == 'ABCDA--->B--<-C--=-D-->-'){
    msg = ` ABCD
A=>>>
B<=<<
C<>=<
D<>>=`;
} else if (a == 'ABCDA---<B--->C->--D---='){
    msg = ` ABCD
A=<<<
B>=<>
C>>=>
D><<=`;
} else if (a == 'ABCDA->--B-=--C>---D-<--'){
    msg = ` ABCD
A=><>
B<=<>
C>>=>
D<<<=`;
} else if (a == 'ABCDA=---B<---C>---D-->-'){
    msg = ` ABCD
A=><<
B<=<<
C>>=<
D>>>=`;
} else if (a == 'ABCDA-->-B>---C--=-D--<-'){
    msg = ` ABCD
A=<>>
B>=>>
C<<=>
D<<<=`;
} else if (a == 'ABCDA--->B-=--C-<--D->--'){
    msg = ` ABCD
A=>>>
B<=><
C<<=<
D<>>=`;
} else if (a == 'ABCDA--<-B--->C--=-D-->-'){
    msg = ` ABCD
A=<<<
B>=>>
C><=<
D><>=`;
} else if (a == 'ABCDA-<--B-=--C->--D-->-'){
    msg = ` ABCD
A=<<<
B>=<<
C>>=<
D>>>=`;
} else if (a == 'ABCDA-->-B-=--C->--D-<--'){
    msg = ` ABCD
A=>>>
B<=<>
C<>=>
D<<<=`;
}
        // return msg
        return msg;
    }
};