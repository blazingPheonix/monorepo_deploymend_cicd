import express from "express";
import {client} from '@repo/prisma/client'

const app = express();

app.get('/',(req,res)=>{
    res.send('hi there')
});

app.listen(3003,()=>console.log('listening on port 3000'));

app.post("/signup",async(req,res)=>{
    const username =   req.body.username;
    const password =   req.body.password;
    const user = await client.user.create({
            data:{
                username,
                password
            }
    })
    res.json({
        message: " sign up successful",
        id:user.id
    })
})