import express from 'express';

const app = express();

app.get("/test", (request, response)=>{
 return response.send("Olá, Valderez");
});

app.post("/test-POST",(request,response)=>{
    return response.send("Muito obrigado meu Deus");
});

app.listen(3000, ()=> console.log("server in running"));