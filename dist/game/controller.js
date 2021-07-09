export class Controller {
    constructor(model, view) {
        this.setValueOfChecker = (result) => {
            result.selected = true;
            this.model.setSelectedCheckerPosition(result);
        };
        this.model = model;
        this.view = view;
    }
    init() {
        this.model.init();
        this.view.drawChessBackground();
        this.view.drawCheckers(this.model.boardInfo);
        this.view.bindToggleChecker(this.setValueOfChecker);
    }
}
