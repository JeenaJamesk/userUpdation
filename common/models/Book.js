const {DataTypes}= require('sequelize');

const bookModel = {
   id: {type:DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
   bookName: {type: DataTypes.TEXT, allowNull: false },
   author: {type: DataTypes.TEXT, allowNull: false}
}

module.exports=  (sequelize) => sequelize.define('book', bookModel);