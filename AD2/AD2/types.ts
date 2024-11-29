import { OptionalId } from "mongodb";

export type VuelosModel =  OptionalId<{
    Origen: string,
    Destino:string,
    Fecha: string
}>;

export type Vuelos = {
    id: string,
    Origen: string,
    Destino:string,
    Fecha: string
}