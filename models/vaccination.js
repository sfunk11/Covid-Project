module.exports = function(sequelize, DataTypes) {
  const Vaccination = sequelize.define("Vaccination", {
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
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
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    }
  });

  Vaccination.associate = function(models) {
    Vaccination.belongsTo(models.Stat, {
      foreignKey: "state",
      constraints: false
    });
  };

  return Vaccination;
};
