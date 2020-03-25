import CarController from "./Controllers/CarController.js"
import HomeController from "./Controllers/HomeController.js"
import JobsController from "./Controllers/JobsController.js"

class App {
  carController = new CarController()
  homeController = new HomeController()
  jobsController = new JobsController()
}

window["app"] = new App();
