var Placement = require('mongoose').model('Placement');

exports.getPlacements = function(req, res) {
    Placement.find({}).exec(function(err, collection) {
        res.send(collection);
    });
};

exports.getPlacement = function(req, res) {
    console.log(req);
    Placement.find({"_id" : req.params.placementId}).exec(function(err, placement) {
        res.send(placement);
    });



};

//exports.addPlacement = function(req, res) {
//    Placement.insert(req.body).exec(function(err, result) {
//        res.send(err);
//    });
//};