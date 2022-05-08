'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class moreImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    this.belongsTo(models.blog)
    }
  };
  moreImage.init(
    {
      ImageUrl: DataTypes.STRING,
      blogId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "moreImage",
    }
  );
  return moreImage;
};