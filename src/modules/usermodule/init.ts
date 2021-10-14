import App from "../../App";
import Routes from "./routes";
class UserModule {
    constructor(routePath: string, app: App) {
       console.log("Load user Modules"); 
       const routes: Routes = new Routes (routePath, app);   }
}

export default UserModule;