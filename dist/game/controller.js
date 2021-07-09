export class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    init() {
        console.log(this.model, this.view);
    }
}
