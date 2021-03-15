'use strict';
module.exports = (sequelize, DataTypes) => {
  const Format = sequelize.define('Format', {
     
    formatCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    formatDescription: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, {});

  // Format.associate = function(models) {
  //   Format.belongsToMany(models.Title, {
  //     as: 'titles',
  //     foreignKey: 'formatId'
  //   });
  // };

  return Format;
};