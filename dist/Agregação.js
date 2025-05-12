"use strict";
/* A agregação é usada para representar relações entre classes onde o objeto contido (parte)
pode existir de forma independente do objeto que o contém (todo). É útil para modelar cenários
do mundo real que envolvem um relacionamento mais "fraco" ou não tão dependente entre os objetos. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = exports.CarrinhoCompras = void 0;
class CarrinhoCompras {
    constructor() {
        this.produtos = [];
    }
    inserirProdutos(...produtos) {
        for (const produto of produtos) {
            this.produtos.push(produto);
        }
    }
    quantidadeProodutos() {
        return this.produtos.length;
    }
    valorTotal() {
        return parseFloat(this.produtos.reduce((soma, produto) => soma + produto.preco, 0).toFixed(2));
    }
}
exports.CarrinhoCompras = CarrinhoCompras;
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
exports.Produto = Produto;
const produto1 = new Produto('Camiseta Polo', 130.90);
const produto2 = new Produto('Sinto de Couro Masculino', 9.90);
const produto3 = new Produto('Tênis Esportivo - Nike', 690.53);
const produto4 = new Produto('Shorts Esportivo - Nike', 220.60);
// Na agregação você injeta uma classe de fora pra dentro
const carrinhoDeCompras = new CarrinhoCompras();
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3, produto4);
console.log('Quantidade de produtos no carrinho: ' + carrinhoDeCompras.quantidadeProodutos());
console.log('Valor total dos produtos: R$' + carrinhoDeCompras.valorTotal());
