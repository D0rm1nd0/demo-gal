import { Router } from 'express';
import CitiesRoutes from './cities/cities.routes'
import NeighborhoodRoutes from "./neighborhood/neighborhood.routes"

const router = Router();

router.use('/neighborhood', NeighborhoodRoutes);
router.use('/cities', CitiesRoutes)

export default router;