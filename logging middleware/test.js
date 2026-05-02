import { Log } from "./logger.js";

async function testLog() {
  const res = await Log("frontend", "info", "component", "Test log working");
  await Log("frontend", "debug", "component", "Log test completed successfully");
}

testLog();