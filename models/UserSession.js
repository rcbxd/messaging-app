const sequelize = require("../util/db");
const { DataTypes, Sequelize } = require("sequelize");

const UserSession = sequelize.define("UserSession", {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
    default: "",
  },
  timestamp: {
    type: DataTypes.DATE,
    default: Date.now(),
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    default: false,
  },
});

module.exports = UserSession;
