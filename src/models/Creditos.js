const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CreditoSquema = new Schema({
    cedula: { type: Number, required:[true,'cedula  obligatorio']},
    servicio: { type: String, required:[true,'servicio obligatorio']},
    cantidad:{ type : String,required:[true,'Cantidad obligatorio']},
    interes:{ type : Number, required:[true,'interes obligatorio']},
    cuotaInicial:{ type : Number},
    cuotaInicialEntregada:{type:Boolean, default:false},
    cuotaInicialRecibidaPor:{type:Number},
    tiempo: { type : Number, required:[true,'Direccion obligatorio']},
    frecuencia:{type:String, required:[true,'Direccion obligatorio']},
    interesMensual:{type:String, required:[true,'interes mensual no llego']},
    valTotalCred:{type:String, required:[true,'Direccion obligatorio']},
    valCuotaMens:{type:String, required:[true,'Direccion obligatorio']},
    fechaAgregado:{ type:String, required:[true,'fecha obligatorio']},
    estado:{type: String, default:'activo'},
    estadoInterno:{type: String, default:'cotizacion'}, 
    clienteInformado:{type: Boolean, default:false},
    pagares:{type: String},
    numeroCredito: {type: Number},
    Fp:{type: Date},
    fiador:{type: String},
    infoLab:{type: Object},
    referidos:{type: Array},
    creadoPor:{type:String,required:[true,'Creador obligatorio']},
    aprovadoRechazadoPor:{type:String},
    entregadoPor:{type:String},
    renovacion:{type:Boolean, default:false},
    aEditar:{type:Object, default:{idCredito:'', valor:0, paga:false}},
    enMora:{type:Boolean,default:false}
});

module.exports = mongoose.model('Credito', CreditoSquema);

