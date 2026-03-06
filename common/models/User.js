const { DataTypes } = require('sequelize');

const userModal = {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userName: { type: DataTypes.TEXT, allowNull: false, unique: true },
    email: { type: DataTypes.TEXT, allowNull: false, unique: true },
    password: { type: DataTypes.TEXT, allowNull: false },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, defaultValue: 'USER' },
    age: { type: DataTypes.INTEGER }
}

module.exports = (sequelize) => sequelize.define('user', userModal);