import { Request, Response } from 'express';
import { Users } from '../config/database';

export const createUser = async (request: Request, response: Response) => {
  const user = new Users(request.body);

  const userAlreadyExists = await Users.findOne({email: user.email})

    if(userAlreadyExists) {
      return response.status(409).json("Usuário já existente")
    }

  const createdUser = await user.save()

  response.json(createdUser);
}


export const getUserById = async (req: Request, res: Response) => {
  //pegar o id do usuário no request params (query params - URL)
  // const userID =  req.params.id;
  
  const { id } = req.params;


  //achar no banco de dados o usuário com esse ID
  try {
      const user = await Users.findById(id);

      if (!user) {
        return res.status(404).json("Usuario não existe")
      }

      res.json(user)
  } catch(err) {
    return res.status(404).json("Usuario não existe")
  }
}

export const deleteById = async (request: Request, response: Response) => {
    const { id } = request.params;

    try {
        await Users.findByIdAndDelete({_id: id})
        return response.status(200).json('Usuário deletado')
    } catch(err) {
        return response.status(404).json(err)
    }
}

