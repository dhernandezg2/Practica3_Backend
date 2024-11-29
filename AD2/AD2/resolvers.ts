import { Collection, ObjectId } from "mongodb";
import { Vuelos, VuelosModel } from "./types.ts";
import { formModelToVuelo } from "./utils.ts";

export const resolvers = {

    Query: {
        getFlight: async (
            _:unknown,
            {id}: {id: string},
            context: {
                VuelosCollection: Collection<VuelosModel>;
            },
        ): Promise<Vuelos | null> => {
            const VuelosModel = await context.VuelosCollection.findOne({
                _id: new ObjectId(id),
            });
            if (!VuelosModel) {
                return null;
              }
              return formModelToVuelo(VuelosModel);
            },
          },

    Mutation: {

        addFlight: async (
            _: unknown,
            args: { Origen: string; Destino: string; Fecha: string},
            context: {
              VuelosCollection: Collection<VuelosModel>;
            },
          ): Promise<Vuelos> => {
            const { Origen, Destino, Fecha } = args;
            const { insertedId } = await context.VuelosCollection.insertOne({
              Origen,
              Destino,
              Fecha
            });
            const VueloModel = {
              _id: insertedId,
              Origen,
              Destino,
              Fecha
            };
            return formModelToVuelo(VueloModel!);
          },



    }

}