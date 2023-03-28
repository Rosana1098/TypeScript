import { Persona } from "./persona";
import { Direccion } from "./direccion";
import { Telefono } from "./telefono";
import { Mail } from "./mail";

function consolePersona(persona: Persona) {
    console.log("Nombre: " + persona.nombre);
    console.log("Apellidos: " + persona.apellidos);
    console.log("Edad: " + persona.edad);
    console.log("DNI: " + persona.dni);
    console.log("Cumpleaños: " + persona.cumpleanos);
    console.log("Color favorito: " + persona.colorFavorito);
    console.log("Sexo: " + persona.sexo);
    console.log("Direcciones: ");
    for (const i of persona.direcciones) {
         console.log(`- ${i.calle} ${i.numero}, ${i.piso}${i.letra}, ${i.codigoPostal} ${i.poblacion}, ${i.provincia}`);
    }
    console.log("Mails: ");
    for (const i of persona.mails) {
         console.log(`- ${i.tipo} ${i.direccion}`);
    }
    console.log("Teléfonos: ");
    for (const i of persona.telefonos) {
         console.log(`- ${i.tipo} ${i.numero}`);
    }
    console.log("Notas: " + persona.notas);
}

// Creamos algunas direcciones
const direccion1 = new Direccion("Calle A", "1", "28001", "Madrid", "Madrid");
const direccion2 = new Direccion("Calle B", "2", "46001", "Valencia", "Valencia");
const direccion3 = new Direccion("Calle C", "3", "08001", "Barcelona", "Barcelona");

// Creamos algunos teléfonos
const telefono1 = new Telefono("Móvil", "123456789");
const telefono2 = new Telefono("Trabajo", "987654321");
const telefono3 = new Telefono("Casa", "555666777");

// Creamos algunos correos electrónicos
const mail1 = new Mail("Personal", "persona1@mail.com");
const mail2 = new Mail("Trabajo", "persona1@trabajo.com");
const mail3 = new Mail("Personal", "persona2@mail.com");

// Creamos algunos registros de persona
const persona1 = new Persona("Juan", "Pérez", 25, "12345678A", new Date(1997, 0, 1), "Rojo", "Hombre", [direccion1,direccion2], [mail1], [telefono1], "Notas de Juan");
const persona2 = new Persona("María", "García", 30, "87654321B", new Date(1992, 5, 10), "Azul", "Mujer", [direccion2], [mail2, mail3], [telefono2, telefono3], "Notas de María");
const persona3 = new Persona("Pedro", "González", 40, "56789012C", new Date(1983, 11, 5), "Verde", "Hombre", [direccion3], [mail3], [telefono1, telefono3], "Notas de Pedro");

// Mostramos los registros de persona en el terminal
consolePersona(persona1);
consolePersona(persona2);
consolePersona(persona3);

function buscarPersonaPorDni(personas: Persona[], dniBuscado: string): Persona | null {
    for (const persona of personas) {
        if (persona._dni === dniBuscado) {
            return persona;
        }
    }
    return null;
}

const personas: Persona[] = [persona1, persona2, persona3];

const dniBuscado = "12345678A";
const personaEncontrada = buscarPersonaPorDni(personas, dniBuscado);

if (personaEncontrada) {
    const direccion4 = new Direccion("Calle D", "4", "50120", "Zaragoza", "Zaragoza");
    const telefono4 = new Telefono("Móvil", "999888777");
    const mail4 = new Mail("Mail Adicional", "persona12@mail.com");

    personaEncontrada.addDireccion(direccion4);
    personaEncontrada.addTelefono(telefono4);
    personaEncontrada.addMail(mail4);
    consolePersona(persona1);
}