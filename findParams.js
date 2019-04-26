exports.findOK = (req, res) => {
    
    let q = req.query.q;

    switch (q) {
        case "Puzzle":            
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

    res.send(msg);

    function handlePuzzle (q) {
        let a = q.split(':')[1].replace(/\s/g,'');  
        let msg = '';

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
    msg = ` A=<<<
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
}
        return msg;
    }
};