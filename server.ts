import Fastify from "fastify";
import itemRoutes from "./routes/Items.ts";

const PORT = 3000;
const fastify = Fastify({
  logger: true,
});

fastify.register(itemRoutes);
fastify.listen({ port: PORT }, (error, address) => {
  if (error) {
    fastify.log.error(error);
    process.exit(1);
  }
});
