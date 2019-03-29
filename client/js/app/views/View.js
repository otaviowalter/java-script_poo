class View {
    constructor(elemento) {
        this._elemento = elemento;
    }

    template(model) {
        throw new Error("As classes filhas devem possuir o método template()!");
    }

    update(model) {
        debugger;
        this._elemento.innerHTML = this.template(model);
    }
}