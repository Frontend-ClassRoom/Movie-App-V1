import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import sequelize from './index';

interface UserAttributes {
    id: number;
    password: string;
    name: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public password!: string;
    public name: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        password: {
            type: DataTypes.STRING(128),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(128),
            allowNull: false,
        }
    },
    {
        modelName: "User",
        tableName: "users",
        sequelize,
    }    
);

export default User;