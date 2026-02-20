// ESM
import Fastify from "fastify";
import dbConnector from "./db/example.ts";
import firstRoute from "./routes/example.ts";

/**
 * @type {import('fastify').FastifyInstance} Instance of Fastify
 */
const fastify = Fastify({
  logger: true,
});
// fastify.register(dbConnector);
fastify.register(firstRoute);

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});
