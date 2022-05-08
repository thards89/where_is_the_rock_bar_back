'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     this.hasMany(models.moreImage)
     this.belongsTo(models.user)
    }
  };
  blog.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    mainImageUrl: DataTypes.STRING,
    name_of_place: DataTypes.STRING,
    location: DataTypes.STRING,
    visitedOn: DataTypes.DATE,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'blog',
  });
  return blog;
};