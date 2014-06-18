var mongoose = require('mongoose');

var placementSchema = mongoose.Schema({
    name: String,
    date: Date,
    client: String,
    onBilling: String,
    type: String,
    notes: String
});

var Placement = mongoose.model('Placement', placementSchema);

function createDefaultPlacements() {
    Placement.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            Placement.create({name: "Jozy Altidore", date: new Date('06/01/2014') , client: "USA", onBilling: "No", type: "Perm", notes: "Sunderland"});
        }
    });
}

exports.createDefaultPlacements = createDefaultPlacements;