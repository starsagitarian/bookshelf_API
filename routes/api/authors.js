const authorsController = require('../../controllers').authors;
const router = require("express").Router();

router.get('/', authorsController.get);

router.get('/:id', authorsController.getById);

router.post('/', authorsController.create);

router.put('/:id', authorsController.update);

router.delete('/:id', authorsController.delete);

module.exports = router;