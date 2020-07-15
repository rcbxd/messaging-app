const sequelize = require("../util/db");
const { DataTypes, Sequelize } = require("sequelize");

const Friendship = sequelize.define("Friendship", {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  userOneId: {
    type: DataTypes.STRING,
    allowNull: false,
    default: "",
  },
  userTwoId: {
    type: DataTypes.STRING,
    allowNull: false,
    default: "",
  },
  didAccept: {
    type: DataTypes.BOOLEAN,
    default: false,
  },
  didBlock: {
    type: DataTypes.BOOLEAN,
    default: false,
  },
  didMute: {
    type: DataTypes.BOOLEAN,
    default: false,
  },
});

module.exports = Friendship;