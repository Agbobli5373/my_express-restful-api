import mongoose from "mongoose";

const schema = new mongoose.Schema ;

export const playerSchema = new schema( {
        firstName:{
            type: String ,
            require :"Enter Player First Name"
        },
        lastName:{
            type: String ,
            require :"Enter Player Send Name"
        },
        clubName:{
            type: String ,
            require :"Enter Player club name"
        },
        jesayNumber:{
            type: Number ,
            require :"Enter Player Number"
        },
        position:{
            type : String,
            
        },
        dateRegistered:{
            type: Date ,
            default : Date.now
        }   
}
    
)