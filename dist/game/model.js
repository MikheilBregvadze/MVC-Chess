export class Model {
    constructor() {
        this.boardInfo = [];
    }
    createGameArea() {
        for (let row = 0; row < 12; row++) {
            for (let column = 0; column < 12; column++) {
                this.boardInfo.push({
                    row: [{ id: row, name: column }]
                });
            }
        }
    }
}
