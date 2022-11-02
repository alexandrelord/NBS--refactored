import express from 'express';
import { getProjects, createProject } from '../controllers/projectsCtrl';
import multer from 'multer';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.get('/', getProjects);
router.post('/create', upload.single('image'), createProject);

export default router;
