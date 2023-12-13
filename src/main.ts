import { createSSRApp } from "vue";
import App from "./App.vue";
import pinia from './sotres'
export function createApp() {
  const app = createSSRApp(App);
  console.log(app.version);
  app.use(pinia)
  return {
    app,
    pinia
  };
}
