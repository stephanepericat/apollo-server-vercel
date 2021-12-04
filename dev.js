import app from "./api/index.js";
import consola from "consola";

app.listen(3000, () => consola.info("Server started"))
