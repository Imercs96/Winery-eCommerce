const S = require('sequelize')
const db = require("../db/db")
class Compra extends S.Model { }

Compra.init({
    dueñoTarjeta: {
        type: S.STRING,
        allowNull: null
    },
    direccionEntrega: {
        type: S.STRING,
        allowNull: false
    },

    numeroTarjeta: {
        type: S.BIGINT,
        allowNull: false


    },
    total: {

        type: S.INTEGER


    },






}, { sequelize: db, modelName: 'compra' })



module.exports = Compra;