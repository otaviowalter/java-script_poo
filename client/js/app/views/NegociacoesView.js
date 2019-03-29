class NegociacoesView extends View{

    template(model){
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                   ${model.negociacoes.map(it =>`
                        <tr>
                            <td>${DateHelper.dataParaTexto(it.data)}</td>
                            <td>${it.quantidade}</td>
                            <td>${it.valor}</td>
                            <td>${it.volume}</td>
                        </tr>
                   `).join('')}
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="3"></td>
                        <td>${model.negociacoes.reduce((total, n) => total += n.volume, 0.0)}</td>
                    </tr>
                </tfoot>
            </table>
        `;    
    }
}

