import { Router } from 'express'
import { getNeighborhood, getNeighborhoods } from './neighborhood.controller';

const router = Router({ mergeParams: true });

router.route('').get(getNeighborhoods);
router.route('/:city_id').get(getNeighborhood);

export default router