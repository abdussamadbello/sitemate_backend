const { Sequelize, DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

const Issue = sequelize.define('Issue', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: false
});

sequelize.sync();

module.exports = {
    sequelize,
    Issue
};