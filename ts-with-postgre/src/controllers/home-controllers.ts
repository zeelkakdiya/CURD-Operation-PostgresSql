import {Request, Response} from 'express';
import * as service from '../services/home-service'

const getHome = async (req: Request, res: Response) => {
    return res.status(201).json({status:true,message:"List of Country",data:service.goHome()})
};

export default {getHome}