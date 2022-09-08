import { isDev } from "src/api/eviroment";

export const host = isDev
  ? "http://localhost:8090"
  : "http://194.67.74.121:8090";
