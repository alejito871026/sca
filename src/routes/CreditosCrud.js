const express = require('express');
const router = express.Router();
const crypto = require('crypto-js')
const cryp = require ('crypto')
const jwt = require('jsonwebtoken')

const Creditos = require('../models/Creditos');

const contras = "JDhd950402-*/#$%04286482762111dhAD#d06845620178%$102687JdHd020495dDAhd*#&%"
let token = {}
let id = ''

router.post('/cuentaCreditos', async (req,res) => {
    const vars = validacionUsuario(req.body)
    //se supone que se debe guardarlos datos decodifcados en la base de datos
    console.log(vars)
    if (vars.id === 'error'){
        return res.status(400).json({
            title: 'no teienes acceso ',
            error:'error',
        })
    }else{
        token={}
        id = ''
        return res.json(vars);
    }
})
router.post('/goToken', async (req,res) => {
    id = cryp.randomBytes(40).toString('hex');
    if(id){
        const payload = {
            id
        }
        token = jwt.sign(payload,contras,{
            expiresIn: 60 * 60 * 24 / 2
        }) 
        token = token
        return res.status(200).json({ 
            data:token
        }) 
    }else{
        return res.status(400).json({ 
            message : 'error al crear el toen'
        })
    }
       
})


function validacionUsuario(datos){
    if(datos.Xvalid === undefined){
        return {id:'error'}
    }else{
        if(token != datos.Xinnov){
            return {id:'error'}
        }else{
            let uno = ''
            let dos = ''
            let d = 0
            let dd = 0
            for (let a =0; a<=datos.Xvalid.length-1; a++){  
                if(datos.Xvalid[a]==','){
                    dd = a
                }
            } 
            d = ((datos.Xvalid.length-1) - dd) + 1
            for (let b =0; b<=dd-1; b++){  
                uno = uno + datos.Xvalid[b]
            }
            for (let e =(dd+1); e<=datos.Xvalid.length-1; e++){  
                dos = dos + datos.Xvalid[e]
            }
            contra = datos.Xinnov
            let id = crypto.AES.decrypt(uno, contra).toString(crypto.enc.Utf8)
            id = crypto.AES.decrypt(id, contra).toString(crypto.enc.Utf8)
            let pass = crypto.AES.decrypt(dos, contra).toString(crypto.enc.Utf8)
            pass = crypto.AES.decrypt(pass, contra).toString(crypto.enc.Utf8)
            let reales = {
                id,
                pass
            }
            return reales
        }    
    }
}
    


module.exports = router;