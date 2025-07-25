import express from 'express';
const router = express.Router();

import { apiGet, apiPost, apiPut, apiPatch, apiDelete } from '../controllers/apiControllers.js';

router.get('/', apiGet);
router.post('/', apiPost);
router.put('/', apiPut);
router.patch('/', apiPatch);
router.delete('/', apiDelete)


export default router;