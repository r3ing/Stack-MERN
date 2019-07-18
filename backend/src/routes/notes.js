const {
    Router
} = require('express');
const router = Router();
const notesCtrl  = require('../controllers/notes.controller');

router.route('/')
    .get(notesCtrl.getNotes)
    .post(notesCtrl.createNote);

router.route('/:id')
    .get(notesCtrl.getNote)
    .put(notesCtrl.updateNote)
    .delete(notesCtrl.deleteNote);

module.exports = router;