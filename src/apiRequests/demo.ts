/* eslint-disable @typescript-eslint/no-explicit-any */
import httpClient from "../lib/http";

const demoApiRequest = {
  demo: (body: any) => httpClient.post('/nexus/gamelist', body),
};
export default demoApiRequest;
