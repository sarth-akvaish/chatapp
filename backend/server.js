import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import connToDB from './db/conn.js';

const app = express();
const port = 5000 || process.env.port;
dotenv.config();

app.use(express.json());
app.use(cookieParser());


app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

// app.get('/', (req, res) => {
//     res.send("Hey I am there")
// })


app.listen(port, () => {
    connToDB();
    console.log(`Server is running Get some chill !! PORT : ${port}`)
})