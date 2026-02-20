import { items } from "../data/Items.ts";

const getItemsOpt = {
  schema: {
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: { type: "number" },
            name: { type: "string" },
            age: { type: "number" },
          },
        },
      },
    },
  },
};
function itemRoutes(fastify, opts, done) {
  fastify.get("/items", getItemsOpt, (req, reply) => {
    reply.send(items);
  });
  fastify.get("/items/:id", (req, reply) => {
    const { id } = req.params as { id: number };
    const item = items.find((item) => item.id === id);
    reply.send(item);
  });

  done();
}

export default itemRoutes;
