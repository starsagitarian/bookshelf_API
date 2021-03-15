const formatsController = require('../../controllers').formats;
const router = require("express").Router();


router.get('/', formatsController.get);

router.get('/:id', formatsController.getById);

router.post('/', formatsController.create);

router.put('/:id', formatsController.update);

router.delete('/:id', formatsController.delete);

module.exports = router;