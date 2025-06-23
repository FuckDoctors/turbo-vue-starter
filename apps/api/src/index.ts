import { log } from "@zhaobc/logger";
import { createServer } from "./server";

const port = process.env.PORT || 3000;
const server = createServer();

server.listen(port, () => {
  log(`api running on ${port}`);
});
