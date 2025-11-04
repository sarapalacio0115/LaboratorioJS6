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
        return `${super.obtenerDetalles()}, Cilindrada: ${this.cilindrada}`;
    }
}

const coche1 = new Coche("Toyota", "Corolla", 2025, 4);
const moto1 = new Moto("BMW", "2S", 2023, 600);


console.log(coche1.obtenerDetalles());
console.log(moto1.obtenerDetalles());

// 2


class Empleado {
    constructor(nombre, edad, salarioBase) {
        this.nombre = nombre;
        this.edad = edad;
        this.salarioBase = salarioBase;
    }

    calcularSalario() {
        return this.salarioBase;
    }
}


class Gerente extends Empleado {
    constructor(nombre, edad, salarioBase, bonificacion) {
        super(nombre, edad, salarioBase);
        this.bonificacion = bonificacion;
    }


    calcularSalario() {
        return this.salarioBase + this.bonificacion;
    }
}


class Desarrollador extends Empleado {
    constructor(nombre, edad, salarioBase, lenguaje) {
        super(nombre, edad, salarioBase);
        this.lenguaje = lenguaje;
    }


    calcularSalario() {
        return this.salarioBase;
    }
}


const empleado1 = new Empleado("Luisa", 30, 2000);
const gerente1 = new Gerente("Sara", 25, 5000, 1000);
const desarrollador1 = new Desarrollador("Arya", 19, 2500, "JavaScript");


console.log(`Empleado: ${empleado1.nombre}, Salario: ${empleado1.calcularSalario()}$`);
console.log(`Gerente: ${gerente1.nombre}, Salario: ${gerente1.calcularSalario()}$`);
console.log(`Desarrollador: ${desarrollador1.nombre}, Lenguaje: ${desarrollador1.lenguaje}, Salario: ${desarrollador1.calcularSalario()}$`);

// 3


class Producto {
    constructor(nombre, precio, marca) {
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
    }

    descripcion() {
        return `Producto: ${this.nombre}, Marca: ${this.marca}, Precio: $${this.precio}`;
    }
}
class Telefono extends Producto {
    constructor(nombre, precio, marca, almacenamiento, ram) {
        super(nombre, precio, marca);
        this.almacenamiento = almacenamiento;
        this.ram = ram;
    }

    descripcion() {
        return `${super.descripcion()}, Almacenamiento: ${this.almacenamiento}GB, RAM: ${this.ram}GB`;
    }
}


class Laptop extends Producto {
    constructor(nombre, precio, marca, procesador, pulgadas) {
        super(nombre, precio, marca);
        this.procesador = procesador;
        this.pulgadas = pulgadas;
    }

    descripcion() {
        return `${super.descripcion()}, Procesador: ${this.procesador}, Pantalla: ${this.pulgadas}"`;
    }
}


const telefono1 = new Telefono("Iphone 15 S24", 1200, "Iphone", 200, 10);
const laptop1 = new Laptop("Galaxy J7", 2500, "Samsumg", 300, 16);


console.log(telefono1.descripcion());
console.log(laptop1.descripcion());


/// 4


/// 5
