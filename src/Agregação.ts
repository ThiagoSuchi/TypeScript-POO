/* A agregação é usada para representar relações entre classes onde o objeto contido (parte) 
pode existir de forma independente do objeto que o contém (todo). É útil para modelar cenários 
do mundo real que envolvem um relacionamento mais "fraco" ou não tão dependente entre os objetos. */

export class CarrinhoCompras {
    private readonly produtos: Produto[] = [];

    inserirProdutos(...produtos: Produto[]): void {
        for(const produto of produtos) {
            this.produtos.push(produto);
        }
    }

    quantidadeProodutos(): number {
        return this.produtos.length
    }

    valorTotal(): number {
        return parseFloat(this.produtos.reduce((soma, produto) => soma + produto.preco, 0).toFixed(2));
    }
}

export class Produto {
    constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('Camiseta Polo', 130.90);
const produto2 = new Produto('Sinto de Couro Masculino', 9.90);
const produto3 = new Produto('Tênis Esportivo - Nike', 690.53);
const produto4 = new Produto('Shorts Esportivo - Nike', 220.60);

const carrinhoDeCompras = new CarrinhoCompras();
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3, produto4)

console.log('Quantidade de produtos no carrinho: ' + carrinhoDeCompras.quantidadeProodutos());
console.log('Valor total dos produtos: R$' + carrinhoDeCompras.valorTotal());


