"use strict";
/* A composição na Programação Orientada a Objetos (POO) é um dos princípios fundamentais que
define como objetos se relacionam uns com os outros. Em vez de utilizar herança para reutilizar
código, a composição foca em construir um objeto a partir de outros objetos, formando uma relação
do tipo "tem um"  */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motor = exports.Carro = void 0;
// Definição de composição:
// Um objeto é composto por outros objetos ou tipos.
class Carro {
    constructor() {
        this.motor = new Motor();
    }
    ligar() {
        return this.motor.ligar();
    }
    acelerar() {
        return this.motor.acelerar();
    }
    parar() {
        return this.motor.parar();
    }
    desligar() {
        return this.motor.desligar();
    }
}
exports.Carro = Carro;
class Motor {
    ligar() {
        console.log('Motor está ligado...');
    }
    acelerar() {
        console.log('Motor acelerando...');
    }
    parar() {
        console.log('Motor está parando...');
    }
    desligar() {
        console.log('Motor está desligado...');
    }
}
exports.Motor = Motor;
const carro = new Carro();
carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();
