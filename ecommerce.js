let somaFuction = require('./app');
let pedidos = require('./pedidos');
const valorIphone = 5000;
let quantidade = 2

let novoPedido = new  pedidos(["Iphone 12 pro Max","DeskTop Dell"],222,valorIphone * quantidade,"18/11/2022","Cartao de credito",34,"22/12/2022",4555555,"Jose Carlos","#F56666");
console.log(novoPedido);
