// 1

class Vehiculo {
    constructor(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    obtenerDetalles() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.anio}`;
    }
}


class Coche extends Vehiculo {
    constructor(marca, modelo, anio, numeroPuertas) {
        super(marca, modelo, anio); 
        this.numeroPuertas = numeroPuertas;
    }

    obtenerDetalles() {
        return `${super.obtenerDetalles()}, Número de puertas: ${this.numeroPuertas}`;
    }
}

class Moto extends Vehiculo {
    constructor(marca, modelo, anio, cilindrada) {
        super(marca, modelo, anio);
        this.cilindrada = cilindrada;
    }

    obtenerDetalles() {
        return `${super.obtenerDetalles()}, Cilindrada: ${this.cilindrada}cc`;
    }
}

const coche1 = new Coche("Toyota", "Corolla", 2025, 4);
const moto1 = new Moto("BMW", "2S", 2023, 600);


console.log(coche1.obtenerDetalles());
console.log(moto1.obtenerDetalles());

//2

