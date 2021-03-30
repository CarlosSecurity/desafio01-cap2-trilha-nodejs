import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = <{ user_id: string }>request.headers; // Como se fosse um CAST forçado.

    try {
      const all = this.listAllUsersUseCase.execute({ user_id });

      return response.status(201).json(all);
    } catch (err) {
      return response.status(400).json({ error: "err.message" });
    }
  }
}

export { ListAllUsersController };
