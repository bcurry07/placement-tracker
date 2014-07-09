var Placement = require('mongoose').model('Placement');

exports.getPlacements = function(req, res) {
    Placement.find({}).exec(function(err, collection) {
        res.send(collection);
    });
};

//exports.addPlacement = function(req, res) {
//    Placement.insert(req.body).exec(function(err, result) {
//        res.send(err);
//    });
//};