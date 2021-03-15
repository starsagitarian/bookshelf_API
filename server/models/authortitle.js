'use strict';
module.exports = (sequelize, DataTypes) => {
  const AuthorTitle = sequelize.define('AuthorTitle', {
    authorId: DataTypes.INTEGER,
    titleId: DataTypes.INTEGER
  }, {});
 
  return AuthorTitle;
};