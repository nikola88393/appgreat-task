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
    <div>
      <h1>Home</h1>
      <Link to={'/new'}>Add new</Link>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {notes.length > 0 ? (
        notes.map((note) => (
          <div key={note.id}>
            <p>{note.name || "None"}</p>
            <p>{note.description || "None"}</p>
            <button onClick={() => handleDelete(note.id)}>Delete</button>
            <Link to={`/edit/${note.id}`}>Edit</Link>
            <p>------------</p>
          </div>
        ))
      ) : (
        <>There are no notes</>
      )}
    </div>
  );
};

export default Home;