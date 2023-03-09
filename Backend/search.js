const url = require('url');
let Cases = require('./CovidDataSchema')

function search (req, res) {
    const queryObject = url.parse(req.url,true).query;
    console.log(queryObject);

    const filter = {};
    
    if (queryObject.date) {
        filter.Date = queryObject.date
    }

    if (+queryObject.number) {
        filter.Cases = {$gt: queryObject.number}
    }

    if (queryObject.state) {
        filter.State = queryObject.state
    }

    if (queryObject.county) {
        filter.County = queryObject.county
    }

    Cases.find(filter, function (err, allcase) {
        if (err) {
            console.log(err);
        } else {

            res.json(allcase);
        }
    }).limit(20);
}

module.exports = search