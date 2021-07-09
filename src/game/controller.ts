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
        this.model.init();
        this.view.drawChessBackground();
        this.view.drawCheckers(this.model.boardInfo);
        this.view.bindToggleChecker(this.setValueOfChecker);
    }

    setValueOfChecker = (result: CheckerInfo): void => {
        result.selected = true;
        this.model.setSelectedCheckerPosition(result);
    }
}

interface CheckerInfo {
    selected?: boolean,
    row: number;
    column: number;
    isKing: boolean;
}