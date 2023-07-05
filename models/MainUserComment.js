const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MainUserComment extends Model {}

MainUserComment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    main_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'main_user',
        key: 'id',
      },
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'post',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'main_user_comment',
  }
);

module.exports = MainUserComment;
