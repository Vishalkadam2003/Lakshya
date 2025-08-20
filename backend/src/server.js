import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';

import signupRoute from './routes/signup.js';
import adminRoutes from './routes/AdminUserCreation.js';
import leadNdaRoute from "./routes/leadnda.js"; 


dotenv.config({ path: path.resolve('./backend/.env') });

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/auth/signup', signupRoute);
app.use("/api/nda", leadNdaRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
