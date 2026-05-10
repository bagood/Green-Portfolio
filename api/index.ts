import { setupApp } from "../server/app";

// Initialize the Express app asynchronously
const appPromise = setupApp().then(({ app }) => app);

export default async function handler(req: any, res: any) {
  const app = await appPromise;
  // Express app instance can be called directly as a request handler
  return app(req, res);
}
