var Headlight = require('../models/headlight');

// List of all Headlights
exports.headlight_list = async function(req, res) {
    try{
        theHeadlights = await Headlight.find();
        res.send(theHeadlights);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Headlight.
exports.headlight_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Headlight detail: ' + req.params.id);
};
// Handle Headlight create on POST.
exports.headlight_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Headlight create POST');
};
// Handle Headlight delete from on DELETE.
exports.headlight_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Headlight delete DELETE ' + req.params.id);
};
// Handle Headlight update form on PUT.
exports.headlight_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Headlight update PUT' + req.params.id);
};