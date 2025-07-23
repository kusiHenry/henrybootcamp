const express = require("express");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = process.env.PORT || 3001;
const dataFilePath = path.join(__dirname, "data.json");

app.use(express.static("public"));
app.use(express.json());

// Helper Functions
const readData = () => fs.existsSync(dataFilePath) ? JSON.parse(fs.readFileSync(dataFilePath)) : [];
const writeData = (data) => fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

// API Routes
app.get("/api/notes", (req, res) => res.json(readData()));

app.post("/api/notes", (req, res) => {
  const notes = readData();
  const newNote = { id: uuidv4(), ...req.body };
  notes.push(newNote);
  writeData(notes);
  res.status(201).json(newNote);
});

app.put("/api/notes/:id", (req, res) => {
  const notes = readData();
  const index = notes.findIndex(note => note.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: "Note not found" });
  notes[index] = { ...notes[index], ...req.body };
  writeData(notes);
  res.json(notes[index]);
});

app.delete("/api/notes/:id", (req, res) => {
  const notes = readData();
  const updatedNotes = notes.filter(note => note.id !== req.params.id);
  if (updatedNotes.length === notes.length) return res.status(404).json({ message: "Note not found" });
  writeData(updatedNotes);
  res.json({ message: "Note deleted" });
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
