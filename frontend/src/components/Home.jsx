import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");
  const [refetchTrigger, setRefetchTringger] = useState(0);

  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await fetch("http://localhost:3000");
        if (!response.ok) {
          setError(response.status);
        }

        const notes = await response.json();
        setNotes(notes);
        console.log(notes);
      } catch (err) {
        console.log(err);
        setError("Failed to get notes");
      }
    };

    getNotes();
  }, [refetchTrigger]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/${JSON.stringify(id)}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      setRefetchTringger((prev) => prev + 1);
    } catch (err) {
      console.log(err);
      setError("Failed to delete note");
    }
  };

  return (
    <div className="page-container">
      <h1>Home</h1>
      <Link className="link" to={'/new'}>Add new</Link>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {notes.length > 0 ? (
        notes.map((note) => (
          <div className="note-card" key={note.id}>
            <p>Name: {note.name || "None"}</p>
            <p>Description: {note.description || "None"}</p>
            <div className="note-btn-container">
            <button className="btn danger" onClick={() => handleDelete(note.id)}>Delete</button>
            <Link className="link" to={`/edit/${note.id}`}>Edit</Link>
            </div>
          </div>
        ))
      ) : (
        <>There are no notes</>
      )}
    </div>
  );
};

export default Home;