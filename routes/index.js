const express = require('express');
const router = express.Router();
const dao = require('../services/dao')

/* GET all results page. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await dao.getAllResults());
} catch (err) {
    console.error(`Error while getting results `, err.message);
    next(err);
}
});

module.exports = router;