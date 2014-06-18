var Placement = require('mongoose').model('Placement');

exports.getPlacements = function(req, res) {
    Placement.find({}).exec(function(err, collection) {
        res.send(collection);
    });
};