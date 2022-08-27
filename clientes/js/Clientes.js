class Cliente{
    static contadorClientes = 0;
    constructor(nombre, apellido, numeroCorreo, password, fecha, genero){
        this._nombre = nombre;
        this._apellido = apellido;
        this._numeroCorreo = numeroCorreo;
        this._password = password;
        this._fecha = fecha;
        this._genero = genero;
        this._idCliente += Cliente.contadorClientes;
    }
    get idCliente(){
        return this._idCliente;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    get numeroCorreo(){
        return this._numeroCorreo;
    }
    set numeroCorreo(numeroCorreo){
        this._numeroCorreo = numeroCorreo;
    }
    get password(){
        return this._password;
    }
    set password(password){
        this._password = password;
    }
    get fecha(){
        return this._fecha;
    }
    set fecha(fecha){
        this._fecha = fecha;
    }
    get genero(){
        return this._genero;
    }
    set genero(genero){
        this._genero = genero;
    }
}