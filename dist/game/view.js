export class View {
    constructor() {
        this.app = this.getElement('#root');
        this.table = this.createElement('div', 'table');
    }
    drawView() {
        this.table.textContent = 'Table';
        this.app.append(this.table);
    }
    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className)
            element.classList.add(className);
        return element;
    }
    getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    }
}
