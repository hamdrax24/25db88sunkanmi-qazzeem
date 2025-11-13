var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var headlight_controller = require('../controllers/headlight');

/// API ROUTE ///

// GET resources base.
router.get('/', api_controller.api);

/// HEADLIGHT ROUTES ///

// POST request for creating a Costume.
router.post('/headlight1', headlight_controller.headlight_create_post);

// DELETE request to delete Costume.
router.delete('/headlight/:id', headlight_controller.headlight_delete);

// PUT request to update Costume.
router.put('/headlight/:id', headlight_controller.headlight_update_put);

// GET request for one Costume.
router.get('/headlight/:id', headlight_controller.headlight_detail);

// GET request for list of all Costume items.
router.get('/headlight', headlight_controller.headlight_list);

module.exports = router;