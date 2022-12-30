import express from 'express';
import routes from './src/apiRoute/apiRoute.js';
import mongoose from 'mongoose';
import bodyParser from  'body-parser';




const app = express();
const PORT = 4000 ;
//database connection
//mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/apiDB?directConnection=true');
mongoose.connection.on("connected",()=>console.log("Connected"));

// bodyparser setup
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

routes(app);
//playerRoute(app)

app.get("/",(req,res) => 
  res.send(`We are running node and express on ${PORT}`)
) ;

app.listen(PORT,() =>
 console.log(`Running server on ${PORT}`)
); 