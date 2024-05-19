const { where } = require('sequelize');
const sql = require('../config/database');
const { sequelize, Note } = require('../model/note')
const http = require('http');
const { OK } = require('sqlite3');

class NotesController {
    static async getAllNotes(request, response) {
        try {
            const notes = await Note.findAll({order: [['updatedAt', 'DESC']]});
            response.status(200).json(notes);
        } catch(error) {
            console.error(error);
            response.status(500).json({ message: 'Server Error getting notes from DB' });
        }
    };

    static async postNote(request, response) {
        try {
            const { id, title, content } = request.body;
            await Note.create({id, title, content});
            response.status(200).json({ message: `Note with id ${id} successfully added.` });
        } catch(error) {
            console.error(error);
            response.status(500).json({ message: 'Server Error adding note' });
        }
    }

    static async deleteNote(request, response) {
        try {
            const idToBeDeleted = request.params.id;
            await Note.destroy({where: {id: idToBeDeleted}});
            response.status(200).json({ message: `Note with id ${idToBeDeleted} successfully deleted.` });
        } catch(error) {
            console.error(error);
            response.status(500).json({ message: 'Server Error adding note' });
        }
    }

    static async updateNote(request, response) {
        try {
            const idToBeUpdated = request.params.id;
            const { title, content} = request.body;
            const note = await Note.update({title: title, content: content}, {where: {id: idToBeUpdated}});
            response.status(200).json({ message: `Note with id ${idToBeUpdated} successfully updated.` });
        } catch(error) {
            console.error(error);
            response.status(500).json({ message: 'Server Error adding note' });
        }
    }
}

module.exports = NotesController;