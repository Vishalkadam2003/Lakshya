import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';

import signupRoute from './routes/signup.js';
import loginRouter from './routes/login.js';
import adminUserRoutes from "./routes/AdminUserCreation.js";
import AdminUserCreation from './routes/AdminUserCreation.js';

import leadNdaRoute from "./routes/leadnda.js"; 

dotenv.config({ path: path.resolve('./.env') });

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", adminUserRoutes);
app.use('/api/auth/signup', signupRoute);
app.use('/login', loginRouter);
app.use("/api/nda", leadNdaRoute);
app.use("/temp", express.static("temp")); // Serve PDFs
app.use('/api/admin', AdminUserCreation);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
