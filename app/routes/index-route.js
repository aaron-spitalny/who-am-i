var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

function Response(status, error, errorMessage) {
    this.status = status;
    this.error = error;
    this.errorMessage = errorMessage;
}

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: false
}));

router.get('/', function(req, res) {
    res.render('index-tmpl', {
        pageID: 'index',
        title: 'Aaron-Spitalny'
    });
});


router.post('/message', function(req, res) {
    var configFile = req.app.get('appConfig')
    var transporter = nodemailer.createTransport('smtps://'+configFile.email+':'+configFile.password+'@smtp.gmail.com');
    var response = new Response();
    try {
        if (verifyInput(req.body, response) == false) {
            res.send(JSON.stringify({
                "status": response.status,
                "error": response.error,
                "errorMessage": response.errorMessage
            }));
        } else {
            var mailOptions = {
                from: 'aaronspitalny.com', // sender address
                to: 'aaron.spitalny@stonybrook.edu', // list of receivers
                subject: 'aaronspitalny.com', // Subject line
                html: '<div>name: '+req.body.name+'<div>' + '<div>email: '+req.body.email+'<div>' + '<div>message: '+req.body.message+'<div>'
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    res.send(JSON.stringify({
                        "status": "ERROR",
                        "error": "sending email",
                        "errorMessage": "error occurred attempting to send verification email"
                    }));
                } else {
                    res.send(JSON.stringify({
                        "status": "OK"
                    }));
                }
            });
        }
    } catch (err) {
        console.log(err)
        res.sendStatus(400);
    }
});

function verifyInput(body, response) {
    var flag = true;
    if (flag == true) {
        if (body.name.length < 1) {
            flag = false;
            response.status = "ERROR";
            response.error = "name";
            response.errorMessage = "please enter a name";
        }
    }
    if (flag == true) {
        if (!validateEmail(body.email)) {
            flag = false;
            response.status = "ERROR";
            response.error = "email";
            response.errorMessage = "please enter a valid email";
        }
    }
    if (flag == true) {
        if (body.message.length < 1) {
            flag = false;
            response.status = "ERROR";
            response.error = "message";
            response.errorMessage = "please enter a message";
        }
    }
    return flag;
}


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


module.exports = router;
