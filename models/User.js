const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model{
    checkPass(loginPW){
        return bcrypt.compareSync(loginPW, this.passord);
    }
};

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            }
        }
    },
    {
        hooks: {
    //hashes password before profile is created to ensure password security
            beforeCreate: async(newUserData) => {
             newUserData.password = await bcrypt.hash(newUserData.passord, 10);
             return newUserData;
            },
            beforeUpdate: async(updateUserData) => {
             updateUserData.password = await bcrypt.hash(updateUserData.passord, 10);
             return updateUserData;
            }
},
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
});

module.exports = User;