import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '959ebe839431546a69e09a87391aa2937e224763', queries });
export default client;
  