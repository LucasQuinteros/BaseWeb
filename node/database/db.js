import {Sequelize} from "sequelize"

const db = new Sequelize('movedb','root','12345678',{
    host: '10.0.0.50',
    dialect: 'mysql'
})

export default db 