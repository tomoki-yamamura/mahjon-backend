import express, { NextFunction } from "express";
import { injectable } from "inversify";

@injectable()
export class HealthController {
  async getHealth(
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ) {
    try {
      const data = "OK"
      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}
