import express from 'express';
import userRouter from './user.js';
import adminRouter from './admin.js';
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/user',userRouter);
app.use('/admin',adminRouter);

app.listen(PORT,()=>{console.log(`listening to ${PORT}`)});


