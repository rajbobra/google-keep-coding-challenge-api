const sql = require('../config/database');
const { sequelize, Note } = require('../model/note')
const http = require('http');

class NotesController {
    static async getAllNotes(request, response) {
        try {
            const notes = await Note.findAll({order: [['updatedAt', 'DESC']]});
            response.json(notes);
        } catch(error) {
            console.error(error);
            response.status(500).json({ message: 'Server Error getting notes from DB' });
        }
    };

    static async postNote(request, response) {
        try {
            const { id, title, content } = request.body;
            const note = await Note.create({id, title, content});
            // response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
            // response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            response.json(note);
        } catch(error) {
            console.error(error);
            response.status(500).json({ message: 'Server Error adding note' });
        }
    }
}

module.exports = NotesController;