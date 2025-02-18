import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditNote = () => {
  const [noteData, setNoteData] = useState({});
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getSingleNote = async () => {
      try {
        const response = await fetch(`http://localhost:3000/${id}`);
        const note = await response.json();
        console.log(note);

        setNoteData(note[0]);
      } catch (err) {
        console.log(err);
        setError(err.message);
      }
    };

    getSingleNote();
  }, [id]);

  const handleEdit = async (e, name, description) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/edit/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description }),
      });

      const data = await response.json();
      console.log(data);

      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Create new note</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form
        onSubmit={(e) =>
          handleEdit(e, e.target.name.value, e.target.desc.value)
        }
      >
        <label htmlFor="name">Name:</label>
        <input defaultValue={noteData.name} type="text" id="name" />
        <label htmlFor="desc">Description:</label>
        <input defaultValue={noteData.description} type="text" id="desc" />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditNote;