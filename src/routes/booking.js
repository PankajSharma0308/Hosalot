const router = require('express').Router();

const bookingController = require('../controllers/bookingController');

router.get('/book/:id', bookingController.list);
router.get('/bookprivate/:id', bookingController.bookprivate);
module.exports = router;
