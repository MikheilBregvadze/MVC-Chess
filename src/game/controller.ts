import { Model } from "./model";
import { View } from "./view";

export class Controller {
    model: Model;
    view: View;

    constructor(model: Model, view: View) {
        this.model = model;
        this.view = view;
    }

    init() {
        console.log(this.model, this.view);
    }
}