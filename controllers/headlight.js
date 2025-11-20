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

// Handle Search for a specific Headlight.
exports.headlight_detail = async function(req, res) {
    console.log("detail" + req.params.id)

    try {
        result = await Headlight.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Headlight create on POST.
exports.headlight_create_post = async function(req, res) {
    console.log(req.body)

    let document = new Headlight();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.manufacturer = req.body.manufacturer;
    document.max_lumen = req.body.max_lumen;
    document.production_year = req.body.production_year;

    try {
        let result = await document.save();
        res.send(result);
    } catch(err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Headlight delete from on DELETE.
exports.headlight_delete = async function(req, res) {
    console.log("delete " + req.params.id)

    try {
        result = await Headlight.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle Headlight update form on PUT.
exports.headlight_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)

    try {
        let toUpdate = await Headlight.findById(req.params.id)
        // Do updates of properties
        if(req.body.manufacturer) toUpdate.manufacturer = req.body.manufacturer;
        if(req.body.max_lumen) toUpdate.max_lumen = req.body.max_lumen;
        if(req.body.production_year) toUpdate.production_year = req.body.production_year;
        
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};