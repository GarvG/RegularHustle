const express=require('express');
const app=express();
require('dotenv').config();

const {Configuration,OpenAIApi}=require('openai');

app.use(express.json());

console.log(process.env.OPEN_API_KEY);
console.log(process.env.PORT);
const configuration=new Configuration({
    apikey:process.env.OPEN_API_KEY,
})

const openai=new OpenAIApi(configuration);


app.get('/',(req,res)=>{
    res.status(200).send({
        message:'let start backend!'
    })
});

app.post('/ask',async(req,res)=>{
    
    try{
    const response=await openai.createCompletion({
    model: "text-davinci-003",
    prompt: req.body.prompt,
    temperature: 0,
    max_tokens: 3000,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
    })

return res.status(200).send({
    data:response.data.choices[0].text
})
    }
    catch(e)
    {
        console.log(e);
        res.status(500).send({message:e});
    }
})


app.listen(3000,(()=>{
    console.log('server running on PORT 3000');
}))