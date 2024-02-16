import path from 'path';
import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import connToDB from './db/conn.js';
import { app, server } from './socket/socket.js'

const port = process.env.port || 5000;
dotenv.config();

const __dirname = path.resolve();
const parentDir = path.dirname(__dirname);

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.use(express.static(path.join(parentDir, "/frontend/dist")))

app.get('*', (req, res) => {
    res.sendFile(path.join(parentDir, "frontend", "dist", "index.html"));
})


server.listen(port, () => {
    connToDB();
    console.log(parentDir);
    console.log(`Server is running Get some chill !! PORT : ${port}`)
})