import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'

interface Ipayload {
    sub: string;
}

export async function ensureAuthenticateClient(
    request: Request, 
    response: Response, 
    next: NextFunction) {
        const authHeader = request.headers.authorization;

        if (!authHeader) {
            return response.status(401).json({
                message: "Token missing"
            })
        }
        //Bearer 98898897-5649874651
        //[0] - Bearer
        //[1] - 98898897-5649874651

        const [,token] = authHeader.split(" ")

        try {
            const { sub } = verify(
                token, 
                "4a521526b8752af0944da873f72307e4"
            ) as Ipayload;

            request.id_client = sub;

            return next();
            
        } catch (error) {
            return response.status(401).json({
                message: "Invalid Token"
            });
        }
}