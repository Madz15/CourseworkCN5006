const url = require('url');
let Cases = require('./CovidDataSchema')

function statistics (req, res) {
    const queryObject = url.parse(req.url,true).query;
    console.log(queryObject);

    const filter = {
        State: queryObject.State,
        County: queryObject.County
    }

    Cases.aggregate([
        { $match: filter},
        { $group: {_id: null, total: { $sum: "$Cases" }, deaths: {$sum: "$Deaths"} } },
        { $sort: { total: -1 } }
    ], function (err, allcase) {
        if (err) {
            console.log(err);
        } else {

            res.json(allcase);
        }
    }).limit(20);
}

module.exports = statistics