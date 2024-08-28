import express from 'express';
import passport from 'passport';
import cookieSession from 'cookie-session';
import cors from 'cors';
import authRoutes from './route/auth.js'; 
import  './passport.js'; 

const app = express();

app.use(cookieSession({
    name: "session",
    keys: ["abc"],
    maxAge: 24 * 60 * 60 * 1000
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}));


app.use('/auth', authRoutes);

app.listen(5000, () => {
    console.log("Server is running successfully on port 5000!");
});
