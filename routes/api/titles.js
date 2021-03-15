const titlesController = require('../../controllers').titles;
const router = require("express").Router();

router.get('/', titlesController.get);

router.get('/:id', titlesController.getById);

router.post('/', titlesController.create);

router.put('/:id', titlesController.update);

router.delete('/:id', titlesController.delete);

module.exports = router;