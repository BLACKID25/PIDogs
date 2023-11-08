const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Dog", {
    id:{                   //! ID
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    image: {               //! IMAGEN              
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    name: {               //! NOMBRE
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[A-Za-z\s]*$/,
      },
      unique: true,
    },
    height:{              //! ALTURA
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        is: /^[A-Za-z\s]*$/,
      },
    },
    weight:{            //! PESO
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        is: /^[A-Za-z\s]*$/,
      },
    },
    life_span: {        //! AÑOS DE VIDA
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^\d+\s*-\s*\d+\s*years$/,
      },
    },
  });
};
