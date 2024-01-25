'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pasien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  const ENUM_VAL = ["laki-laki", "perempuan"];
  Pasien.init({
    nama: DataTypes.STRING,
    jenis_kelamin: {
      type: DataTypes.ENUM,
      values: ENUM_VAL,
      allowNull: false,
      validate: {
        notNull: { msg: "jenis kelamin required" },
        isIn: {
          args: [ENUM_VAL],
          msg: "masukan jenis kelamin yang benar"
        },
      },
    },
    no_telepon: DataTypes.STRING,
    alamat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pasien',
  });
  return Pasien;
};