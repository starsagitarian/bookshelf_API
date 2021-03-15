'use strict';
module.exports = (sequelize, DataTypes) => {
  const Title = sequelize.define('Title', {
    isbn: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV1,
      unique: 'compositeIndex' 
    },
    bookName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateOfPub: { 
      type: DataTypes.DATE,
      allowNull: false
    }

  }, {});

  Title.associate = (models) => {
    Title.belongsToMany(models.Author, {
      through: models.AuthorTitle,
      as: 'authors',
      foreignKey: 'titleId'
    });
    Title.belongsTo(models.Format, {
      as: 'formats',
      foreignKey: 'formatId'
    })
  };



  return Title;
};