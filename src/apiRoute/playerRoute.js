import {
    getPlayer,
    addPlayer
  } from '../apiController/playerCtrl.js'

const playerRoute = (app) => {
     app.route('/player')
        .get(getPlayer)

        .post(addPlayer);

    app.route('/player/:playerId')
       .get((req,res)=>{
        res.send("GET single player") ;
       })

       .put((req,res)=>{
        res.send("UPDATE ") ;
       })

       .delete((req,res)=>{
        res.send("DELETE") ;
       }) ;
}


export default playerRoute ;