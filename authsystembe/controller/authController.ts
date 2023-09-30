import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { STATUS } from "../error/errorFile";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const ViewAllAccount = async (req: Request, res: Response) => {
  try {
    const view = await prisma.authModel.findMany();
    return res.status(STATUS.OK).json({
      message: "This is the list of Users on the platform",
      data: view,
    });
  } catch (error: any) {
    return res.status(STATUS.BAD).json({
      message: "Error occured while viewing all account on the platform",
      data: error.message,
      error,
    });
  }
};

export const RegisterAccount = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const pass = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, pass);
    const account = await prisma.authModel.create({
      data: { email, password: hashed, name },
    });
    return res.status(STATUS.CREATED).json({
      message: `${name}'s account has been created successfully`,
      data: account,
    });
  } catch (error: any) {
    return res.status(STATUS.BAD).json({
      message: "Error occured while registering account",
      data: error.message,
      error,
    });
  }
};


export const DeleteAccount = async (req: Request, res: Response) => {
    try {
        const {accountID: id} = req.params
        const account = await prisma.authModel.delete({
            where: {id}
        })
        return res.status(STATUS.BAD).json({
            message : "Account deleted successfully",
            data: account
        })
    } catch (error: any) {
        return res.status(STATUS.BAD).json({
            message : "Error occured while deleting account",
            data: error.message,
            error
        })
    }
}