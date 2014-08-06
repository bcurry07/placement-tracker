var Placement = require('mongoose').model('Placement');

//GET all
exports.getPlacements = function(req, res) {

    Placement.find({}).exec(function(err, collection) {

        res.send(collection);
    });
};

//GET by id
exports.getPlacement = function(req, res) {

    Placement.find({"_id" : req.params.placementId}).exec(function(err, placement) {
        res.json(placement);
    });
};

//UPDATE by id
exports.updatePlacement = function(req, res) {
    var placement = {
        "name": req.body.name,
        "date": req.body.date,
        "client": req.body.client,
        "type": req.body.type,
        "onBilling": req.body.onBilling,
        "notes": req.body.notes
    };



    Placement.update({ _id: req.params.placementId }, { $set: placement }, function(error, result) {
        if(error) console.log(error);

});

};

//ADD new
exports.addPlacement = function(req, res) {

    var newPlacement = new Placement(req.body);

    var placementHour = newPlacement.date.getHours();
    console.log(placementHour);
    newPlacement.date = newPlacement.date.setHours(placementHour + 5);
    console.log(newPlacement.date);

    newPlacement.save(function(err) {

    });
};

//delete Placement
exports.deletePlacement = function(req, res) {

    Placement.remove({ _id: req.params.placementId }, function(error, result) {
    });

};

//*************************************************************************

exports.getBillingClients = function(req, res) {

    Placement.distinct('client', function(err, collection) {

        res.send(collection);

    });
};