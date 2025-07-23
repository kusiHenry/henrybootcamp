const form = document.getElementById("note-form");
const notesList = document.getElementById("notes-list");

async function loadNotes() {
  const res = await fetch("/api/notes");
  const notes = await res.json();
  notesList.innerHTML = "";
  notes.forEach(note => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${note.title}</strong>
      <p>${note.body}</p>
      <button onclick="deleteNote('${note.id}')">Delete</button>
    `;
    notesList.appendChild(li);
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("note-title").value;
  const body = document.getElementById("note-body").value;
  await fetch("/api/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, body })
  });
  form.reset();
  loadNotes();
});

async function deleteNote(id) {
  await fetch(`/api/notes/${id}`, { method: "DELETE" });
  loadNotes();
}

loadNotes();
