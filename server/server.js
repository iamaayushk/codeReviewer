require('dotenv').config();
const app= require('./src/app');
const cors= require('cors');



app.listen(3000,()=>{
    console.log("Server is running on port 3000");
    
})