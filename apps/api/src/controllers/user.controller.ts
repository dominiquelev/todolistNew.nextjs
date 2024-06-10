import { getUsersService } from '@/services/user/get-users.service';
import { Request, Response } from 'express';

export class UserController {
  async getUsersController(req: Request, res: Response) {
    try {

      const result = await getUsersService();
      return res.status(201).send(result);
    } catch (error) {
      throw (error)
    }

  }

  // async getSampleDataById(req: Request, res: Response) {
  //   const { id } = req.params;

  //   const sample = await prisma.sample.findUnique({
  //     where: { id: Number(id) },
  //   });

  //   if (!sample) {
  //     return res.send(404);
  //   }

  //   return res.status(200).send(sample);
  // }

  // async createSampleData(req: Request, res: Response) {
  //   const { name, code } = req.body;

  //   const newSampleData = await prisma.sample.create({
  //     data: { name, code },
  //   });

  //   return res.status(201).send(newSampleData);
  // }
}
