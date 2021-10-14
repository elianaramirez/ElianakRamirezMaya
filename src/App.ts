
import express, {Express} from "express";
import dotenv from "dotenv";
import mongoose, {mongo, Mongoose} from "mongoose";
//libreria que no se programa se coloca arriba 

//libreria que se programo va aqui
import UserModule from "./modules/usermodule/init";

if(process.env.NODE_ENV == "development"){
    dotenv.config();  
}
class App {

private app: Express;
private port: number;
private clientMongo: Mongoose;
private apiversion: string;

constructor() {
  this.apiversion= process.env.API_VERSION || "api";
  this.app = express();
  this.port=Number(process.env.PORT) || 8000;
  console.log(this.port);

  this.clientMongo = mongoose;
  this.configure();
  this.configureDatabase();
  this.startModules();
}
private configure() {
   this.app.use(express.json());
   this.app.use(express.urlencoded());
}
private configureDatabase() {

const dataBaseName= process.env.DB_NAME;
const dataBaseHost=process.env.DB_HOST;
const dataBasePort= process.env.DB_PORT;
const dataBaseUser=process.env.DB_USER;
const dataBasePassword = process.env.DB_PASSWORD;
//mongodb://root:example@mongo:27017/
const connectionString= `mongodb://${dataBaseUser}:${dataBasePassword}@${dataBaseHost}:${dataBasePort}`
this.clientMongo.connect(connectionString);
this.clientMongo.connection.on("open",() => {
    console.log("sucess  connect is database");
});
this.clientMongo.connection.on("error", (err) => {
    console.error("can not connecto to the database");
    console.error(err);

 });
}
private startModules() {

    console.log("Load Modules");
   new UserModule(`/${this.apiversion}/user`, this);
   
 }
 public getApp(): Express {
     return this.app;
 }
 public getClientMongoose(): Mongoose{
     return this.clientMongo;
 }
 public getPort(): number{
   return this.port;
    }
}
export default App;