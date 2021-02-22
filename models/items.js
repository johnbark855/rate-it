/*
    Sequelize data structure for mysql database instance
*/

module.exports = (sequelize, DataTypes) => {
  const Items = sequelize.define("Items", {
    item: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  return Items;
};
