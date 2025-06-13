const {datatipes}=require('sequelize');
const sequelize = require('../database/db');

const Tarefa = sequelize.define('Tarefa',{
Titulo:{
        type: DataTypes.STRING,
        allowNull:false,
    },
descricao:{
    type: DataType.STRING, 
    allowNull: false,
 },
responsavel:{
    Type: DataTypes.STRING,
    allowNull:false,
 },
status:{


 type: DataTypes.STRING,
 defaultValue: "Pendente",
}
});

module.exports = Tarefa;