import { View } from "./game/view.js";
import { Model } from "./game/model.js";
import { Controller } from "./game/controller.js";
const app = new Controller(new Model(), new View());
app.init();
