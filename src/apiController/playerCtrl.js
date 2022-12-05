import mongoose from "mongoose";
import { playerSchema } from "./apiModel/playerModel.js";

const Player = mongoose.Model('player', playerSchema) ;

export const addPlayer = (req,res) => {
    let newplayer = new Player(req.body);
    Player.save((err,player)=>{
        if(err){
            res.send(err);
        }
        res.json(player);
    }) ;

}

export const getPlayer = (req,res) => {
     Player.find({},(err ,player) => {
        if(err){
            res.send(err)
        }
        res.json(player) ;
     })
}