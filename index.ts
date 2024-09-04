import app from "./app";
import config from "./config";
import { client } from "./utils/database";

// CONSTANTS
const PORT = config.PORT;

async function run() {
  try {
    // Connect to database
    await client.connect();
  } catch {
    console.log("Can't connect to database!");
  }

  // Start the express server :3
  app.listen(PORT, async () => {
    console.log(`Bot running at port: ${PORT}`);
  });
}

run();
