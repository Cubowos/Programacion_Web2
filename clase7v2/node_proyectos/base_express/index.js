const express=require('express');
const app=express();
const port=process.env.PORT || 1800; //sino tiene nada pasa al 1800
app.get('/',(req,res)=>{
    res.send("Hola mundo!");});
    app.get('/uno',(req,res)=>{
        res.json({
            nombre:"Erik",
            id:"A1"
        });
    });


app.listen(port,()=>{
    console.log(`Servidor iniciando en el puerto ${port}`)
})