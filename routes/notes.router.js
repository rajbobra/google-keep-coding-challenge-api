const express = require("express");
const router = express.Router();
const NotesController = require("../controllers/notes.controller");

router.get('/notes', NotesController.getAllNotes);
router.post('/createNote', NotesController.postNote)
router.delete('/deleteNote/:id', NotesController.deleteNote)

module.exports = router;