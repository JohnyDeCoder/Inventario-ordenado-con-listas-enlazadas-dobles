class Inventario {
    constructor() {
        this.primero = null;
        this.ultimo = null;
    }

    agregar(producto) {
        if (this.primero) {
            let temp = this.primero;

            while (temp) {
                if ((producto.codigo > temp.codigo) === false) {
                    if (this.primero === temp) {
                        producto.sig = this.primero;
                        producto.ant = this.primero.ant;
                        this.primero.ant = producto;
                        this.primero = producto;
                    }
                    else {
                        producto.sig = temp;
                        producto.ant = temp.ant;
                        temp.ant.sig = producto;
                        temp.ant = producto;
                    }
                    return;
                }
                temp = temp.sig;
            }
            this.ultimo.sig = producto;
            producto.ant = this.ultimo;
            this.ultimo = producto;
        }
        else {
            this.primero = producto;
            this.ultimo = producto;
        }
    }
}
