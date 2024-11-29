import { Vuelos, VuelosModel } from "./types.ts";

export const formModelToVuelo = (VuelosModel: VuelosModel): Vuelos => {
  return {
    id: VuelosModel._id!.toString(),  
    Origen: VuelosModel.Origen,
    Destino: VuelosModel.Destino,
    Fecha: VuelosModel.Fecha
  };
};