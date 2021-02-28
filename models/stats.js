module.exports = function(sequelize, DataTypes) {
  const Stat = sequelize.define("Stat", {
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    totalCases: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totalDeaths: {
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

  Stat.associate = function(models) {
    Stat.hasOne(models.Vaccination, {
      foreignKey: "state",
      constraints: false
    });
  };

  return Stat;
};
