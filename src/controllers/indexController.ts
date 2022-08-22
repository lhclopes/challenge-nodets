import { Request } from 'express';
import { Response } from 'express';

export class IndexController {
  public getIndex = (req: Request, res: Response) => {
    res.json({ message: 'KuantoKusta Challenge Node/Typescript' });
  };
}

export default new IndexController();
