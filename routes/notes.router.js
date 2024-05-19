const express = require("express");
const router = express.Router();
const NotesController = require("../controllers/notes.controller");

router.get('/notes', NotesController.getAllNotes);
router.get('/note/:id', NotesController.getNoteById);
router.post('/createNote', NotesController.postNote);
router.delete('/deleteNote/:id', NotesController.deleteNote);
router.put('/updateNote/:id', NotesController.updateNote);

module.exports = router;