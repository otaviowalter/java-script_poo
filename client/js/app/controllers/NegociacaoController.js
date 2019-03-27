class NegociacaoController {

	constructor() {
		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
	}

	adiciona(event){
		event.preventDefault();

		let date = new Date(
		...this._inputData.value
			.split('-')
			.map((item, indice) => item - indice % 2)
		);	
		let negociacao = new Negociacao(
			date,
			this._inputQuantidade.value,
			this._inputValor.value
		);

		this._limpaCampos();
	}

	_limpaCampos(){
		this._inputData.value = '';
		this._inputQuantidade.value = 1;
		this._inputValor.value = '0.0';

		this._inputData.focus();
	}

}