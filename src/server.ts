import App from "./App";
 //import app from "./App";
const application: App = new App();
application.getApp().listen(application.getPort(), () =>{

    console.log(`server running in port! ${application.getPort()}`);
});