function Pedidos(
    produtos,
     numeroPedido,
     valorTotal,
     dataPedido,
     metodoPagamanto,
     frete,
     previsaoEntrega,
     nrNotaFiscal,
     cliente,
     cupomDesconto) {
        this.produtos = produtos;
        this.numeroPedido = numeroPedido;
        this.valorTotal = valorTotal;
        this.dataPedido = dataPedido;
        this.metodoPagamanto = metodoPagamanto;
        this.frete = frete;
        this.previsaoEntrega = previsaoEntrega;
        this.nrNotaFiscal = nrNotaFiscal;
        this.cliente = cliente;
        this.cupomDesconto = cupomDesconto;
     }

     module.exports = Pedidos;