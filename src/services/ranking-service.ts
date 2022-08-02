import { Request, Response } from 'express';
import { Users } from '../config/database';

export const getRanking = async (request: Request, response: Response) => {
  
    const userRaking = await Users.find().limit(10).sort({score: 'desc'});
  
    response.send(userRaking);
  };
