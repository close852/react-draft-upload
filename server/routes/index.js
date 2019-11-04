import express from 'express';
import app from './app'

const router = express.Router();

router.use('/app', app);/*requireRole("USER"), */

export default router;