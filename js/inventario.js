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

    eliminar(codigo) {
        if (this.primero) {
            if (this.primero.codigo === codigo) {
                if (this.primero.sig) {
                    this.primero.sig.ant = this.primero.ant;
                    this.primero = this.primero.sig;
                }
                else {
                    this.primero = null;
                    this.ultimo = null;
                }
            }
            else if (this.ultimo.codigo === codigo) {
                this.ultimo.ant.sig = this.ultimo.sig;
                this.ultimo = this.ultimo.ant
            }
            else {
                let temp = this.primero.sig;

                while (temp) {
                    if (temp.codigo === codigo) {
                        temp.ant.sig = temp.sig;
                        temp.sig.ant = temp.ant;
                        return true;
                    }
                    temp = temp.sig;
                }
                return false;
            }
            return true;
        }
        return false;
    }

    buscar(codigo) {
        if (this.primero) {
            console.log(this.primero.codigo);

            if (this.primero.codigo === codigo) {
                return this.primero;
            }
            else if (this.ultimo.codigo === codigo) {
                return this.ultimo;
            }
            else {
                let temp = this.primero.sig;

                while (temp) {
                    if (temp.codigo === codigo) {
                        return temp;
                    }
                    temp = temp.sig;
                }
                return null;
            }
        }
        return null;
    }
}
