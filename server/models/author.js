'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
     
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, {});

  Author.associate = function(models) {
    Author.belongsToMany(models.Title, {
      through: models.AuthorTitle,
      as: 'titles',
      foreignKey: 'AuthorId'
    });
  };

  return Author;
};