import {Direccion} from './direccion';
import {Mail} from './mail';
import {Telefono} from './telefono';

export class Persona {
  _nombre: string;
  _apellidos: string;
  _edad: number;
  _dni: string;
  _cumpleanos: Date;
  _colorFavorito: string;
  _sexo: string;
  _direcciones: Direccion[];
  _mails: Mail[];
  _telefonos: Telefono[];
  _notas: string;

  constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleanos: Date, colorFavorito: string, sexo: string, direcciones: Direccion[], mails: Mail[], telefonos: Telefono[], notas: string) {
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._edad = edad;
    this._dni = dni;
    this._cumpleanos = cumpleanos;
    this._colorFavorito = colorFavorito;
    this._sexo = sexo;
    this._direcciones = direcciones;
    this._mails = mails;
    this._telefonos = telefonos;
    this._notas = notas;
  }

  public get nombre(): string {
      return this._nombre;
  }

  public get apellidos(): string {
      return this._apellidos;
  }

  public get edad(): number {
      return this._edad;
  }

  public get dni(): string {
      return this._dni;
  }

  public get cumpleanos(): Date {
      return this._cumpleanos;
  }

  public get colorFavorito(): string {
      return this._colorFavorito;
  }

  public get direcciones(): Direccion[] {
      return this._direcciones;
  }

  public get mails(): Mail[] {
      return this._mails;
  }

  public get telefonos(): Telefono[] {
      return this._telefonos;
  }

  public get notas(): string {
      return this._notas;
  }

  public get sexo(): string {
      return this._sexo;
  }

  public addDireccion(value: Direccion) {
      this._direcciones.push(value);
  } 

  public addMail(value: Mail) {
      this._mails.push(value);
  } 

  public addTelefono(value: Telefono) {
      this._telefonos.push(value);
  } 

}
