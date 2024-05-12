const Sequelize = require('sequelize');
const uuid = require('uuid')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../database/notes.sqlite'
});


const Note = sequelize.define('notes-trial', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


sequelize.sync()

module.exports = {
    sequelize,
    Note
};

