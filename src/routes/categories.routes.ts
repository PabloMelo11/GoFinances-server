import { Router, Request, Response } from 'express';

import CreateCategoryService from '../services/CreateCategoryService';

const categoryRouter = Router();

categoryRouter.post('/', async (request: Request, response: Response) => {
  try {
    const { title } = request.body;

    const createCategory = new CreateCategoryService();

    const category = await createCategory.execute({
      title,
    });

    return response.json(category);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default categoryRouter;
