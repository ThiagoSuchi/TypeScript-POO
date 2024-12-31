/* A composição na Programação Orientada a Objetos (POO) é um dos princípios fundamentais que 
define como objetos se relacionam uns com os outros. Em vez de utilizar herança para reutilizar 
código, a composição foca em construir um objeto a partir de outros objetos, formando uma relação 
do tipo "tem um"  */

// Definição de composição:
// Um objeto é composto por outros objetos ou tipos.
export class Carro {
    private readonly motor = new Motor();

    ligar(): void {
        return this.motor.ligar();
    }

    acelerar(): void {
        return this.motor.acelerar();
    }

    parar(): void {
        return this.motor.parar();
    }

    desligar(): void {
        return this.motor.desligar();
    }
}

export class Motor {
    ligar(): void {
        console.log('Motor está ligado...');
    }

    acelerar(): void {
        console.log('Motor acelerando...');
    }

    parar(): void {
        console.log('Motor está parando...');
    }

    desligar(): void {
        console.log('Motor está desligado...');
    }
}

const carro = new Carro();

carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();