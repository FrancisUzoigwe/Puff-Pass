import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { STATUS, errorFile } from "./error/errorFile";
import { errorHandler } from "./error/errorHandler";
import auth from "./router/authRouter"

export const mainApp = (app: Application) => {
  app.use(express.json());
  app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PATCH", "DELETE"],
    })
  );
  app.all(
    "*",
    (error: errorFile, req: Request, res: Response, next: NextFunction) => {
      next(
        new errorFile({
          errorName: `${req.originalUrl}`,
          errorMessage: `${req.originalUrl}`,
          errorStatus: STATUS.BAD,
          errorSuccess: false,
        })
      );
    }
  );
  app.get("/", (req: Request, res: Response) => {
    try {
        return res.status(STATUS.OK).json({
            message : "Puff & Pass"
        })
    } catch (error) {
        return res.status(STATUS.BAD).json({
            message : "E no go work !!"
        })
    }
  })
  app.use(errorHandler);
  app.use("/api/v2/auth", auth)
};
