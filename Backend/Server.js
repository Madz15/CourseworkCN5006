var express = require("express")
let Cases = require('./CovidDataSchema')
let MongodbConnect = require('./MongodbConnect')
const OsInformation = require('./osInformation')
const Search = require('./search');
const Search1 = require('./search1');

const cors = require('cors');
var app = express()
var bodyparser = require("body-parser")
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }))
app.use(cors());
console.log("CASES", Cases)
app.get('/', function (req, res) {
})
app.get('/about', function (req, res) {
    res.send("mongodb express React and mongoose app,React runs in another application")
    Cases.countDocuments().exec()
        .then(count => {
            console.log("Total documents Count before addition :", count)

        }).catch(err => {
            console.error(err)
        })

})
app.get('/allcases', function (req, res) {
    Cases.find(function (err, allcase) {
        
        if (err) {
            console.log(err);
        } else {

            res.json(allcase);
        }
        
    })
});
app.get('/getcase/:id', function (req, res) {
    let id = req.params.id;
    Cases.findById(id, function (err, cases) {
        res.json(cases);
    });
});
app.post('/addcases', function (req, res) {
    console.log("Ref", req.body)
    let newcase = new Cases(req.body);
    console.log("newcase->", newcase)
    newcase.save()
        .then(todo => {
            res.status(200).json({ 'Cases': 'Case added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new case failed');
        });
})
app.post('/updatecase/:id', function (req, res) {
    let id = req.params.id;
    let updatedcase = new Cases(req.body);
    console.log("update id", id, "newcase->", updatedcase)

    Cases.findByIdAndUpdate(id,
        {
            Date: updatedcase.Date,
            County: updatedcase.County,
            State: updatedcase.State,
            Cases: updatedcase.Cases,
            Deaths: updatedcase.Deaths
        }
        ,
        function (err, docs) {
            if (err) {
                console.log(err)
            }
            else {
                res.status(200).json({ 'Cases': 'Case updated successfully' });
            }
        }
    )

});
app.post('/deleteCase/:id', function (req, res) {
    let id = req.params.id;

    console.log("deleting")
    Cases.findByIdAndDelete(id, function (err, docs) {
        if (err) {
            console.log(err)
        }
        else {
            res.status(200).send('Case Deleted');
        }
    }


    )

});

app.get('/os', OsInformation)
app.get('/search', Search);
app.get('/search1', Search1)

app.listen(5000, function () {
    console.log("Server is running on the port 5000")
})