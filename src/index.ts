import app from "./app";
import config from "./config";

// CONSTANTS
const PORT = config.PORT;

async function run() {
  // Start the express server :3
  app.listen(PORT, async () => {
    console.log(`Bot running at port: ${PORT}`);
  });
}

run();
