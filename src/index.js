import express from "express";
import { PORT } from "./config/serverConfig.js";
import apiRouter from "./routes/apiRoutes.js";
import connectDB from "./config/dbConfig.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
