const {DataTypes} = require("sequelize")

module.exports= (sequelize) =>{ 
    sequelize.define("Temp",{
        id:{                //   !ID
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        name:{              //   !NOMBRE
            type: DataTypes.STRING(50),
            allowNull: false
        }
     })
}