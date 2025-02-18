const {Router} = require('express')
const controller = require('../controller/notesController');
const router = Router();

router.get('/', controller.getAllNotes);
router.get('/:id', controller.getSingleNote);
router.post('/new', controller.createNote);
router.put('/edit/:id', controller.updateNote);
router.delete('/:id', controller.deleteNote);

router.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({ err });
  });
  
module.exports = router;