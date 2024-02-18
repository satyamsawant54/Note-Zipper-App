import colors from "colors";
import express from "express";
import dotenv from "dotenv";
import notes from "./data/notes.js";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const app = express();

dotenv.config();
connectDB();

app.use(express.json()); // Request for json data

app.get("/", (req, res) => {
  res.send("API is running successfully...");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.use("/api/users", userRoutes);

// Middleware for handling the errors
app.use(notFound);
app.use(errorHandler);

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on PORT ${PORT}`.yellow));