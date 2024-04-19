import express from "express";
import products from "./data/products.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
connectDB(process.env.MONGODB_URI);

app.use(cors());
app.get("/", (req, res) => {
  res.send("Api is running");
});
app.use("/api/products", productRoutes);
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
