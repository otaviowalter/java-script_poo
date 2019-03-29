class NegociacaoController {

	constructor() {
		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
		this._listaNegociacoes = new ListaNegociacoes();

		this._negociacaoView = new NegociacoesView($('#tabelaNegociacoes'));
		this._negociacaoView.update(this._listaNegociacoes);

		this._mensagem = new Mensagem();
		this._mensagemView = new MensagemView($('#mensagemAviso'));
		this._mensagemView.update(this._mensagem);
	}

	adiciona(event) {

		event.preventDefault();
		this._listaNegociacoes.adiciona(this._criaNegociacao());
		this._negociacaoView.update(this._listaNegociacoes);
		this._mensagem.texto = "Negociação cadastrada com sucesso!";
		this._mensagemView.update(this._mensagem);
		this._limpaCampos();
	}

	_criaNegociacao() {

		return new Negociacao(
			DateHelper.textoParaData(this._inputData.value),
			this._inputQuantidade.value,
			this._inputValor.value
		);
	}

	_limpaCampos() {
		this._inputData.value = '';
		this._inputQuantidade.value = 1;
		this._inputValor.value = '0.0';

		this._inputData.focus();
	}

}