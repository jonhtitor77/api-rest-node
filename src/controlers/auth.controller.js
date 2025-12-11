import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createUser, findUserByEmail } from "../models/User.js";

export const register = async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({message: "Email  y contraseña son requeridos"});
    }

    const existingUser = await findUserByEmail(email);
    if(existingUser){
        return res.status(409).json({message: "El usuario ya existe"});
    }

    const passwordHash = await bcrypt.hash(password, 10);

    // console.log(email, password, passwordHash);

    const user = await createUser (email, passwordHash);

    if(!user){
        return res.sendStatus(503);
    }
    res.status(201).json({ message:"Acaba de registrase ya puede iniciar sesion con el mail:", email: user.email, message2: "y su contraseña" });

};

export const login = async (req, res, next) => {
     const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({message: "Email  y contraseña son requeridos"});
    }

    const user = await findUserByEmail(email);
    if(!user){
        return res.status(401).json({message: "Credenciales invalidas"});
    }
    const valid = await bcrypt.compare(password, user.password);
    if(!valid){
        return res.status(401).json({message: "Credenciales invalidas"});
    }
   
    const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h",
           
         }
    );
    res.json({ token });

};
