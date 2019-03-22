class NegociacaoController {

	constructor() {
		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
	}

	adiciona(event){
		event.preventDefault();
		debugger;
		let negociacao = this.instanciaNegociacao(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
		this.limpaCampos();
	}

	instanciaNegociacao(data,quant,valor){
		let date = new Date(
			...data
			.split('-')
			.map((item, indice) => item - indice % 2)
		);	
		return new Negociacao(
			date,
			quant,
			valor
		);
	}

	limpaCampos(){
		this._inputData.value = '';
		this._inputQuantidade.value = 1;
		this._inputValor.value = '0,0';
	}

}