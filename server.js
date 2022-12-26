import express from "express";
const app = express();

const PORT = process.env.PORT || 8000;


// global eroor handler

app.use((error, req, res, next)=>{
    try {
        const errorCode = 
    } catch (error) {
        
    }
})

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:${PORT}`);
});
