module.exports = function(sequelize, DataTypes) {
  const Vaccination = sequelize.define("Vaccination", {
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    totalDelivered: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totalAdministered: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deliveredPer100k: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    administeredPer100k: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    atLeastOneDose: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    atLeastOneDosePer100k: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    atLeastTwoDoses: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    atLeastTwoDosesPer100k: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return Vaccination;
};
