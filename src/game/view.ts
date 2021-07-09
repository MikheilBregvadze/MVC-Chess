export class View {
    app: HTMLElement;
    table:  HTMLElement;
    constructor() {
        this.app = this.getElement('#root');
        this.table = this.createElement('div', 'table');
    }

    drawView() {
        this.table.textContent = 'Table';
        this.app.append(this.table);
    }

    createElement(tag: string, className: string) {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
    
        return element;
    }

    getElement(selector: string) {
        const element = document.querySelector(selector)! as HTMLLIElement;
        return element;
    }
}