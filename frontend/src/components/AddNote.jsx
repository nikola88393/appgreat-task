import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validateInput from "../../utils/verifyInput.js";


const AddNote = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAddNew = async (e, name, description) => {
    e.preventDefault();

    const msg = validateInput(name, description);

    if(msg){
      setError(msg);
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/new", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description }),
      });

      console.log(response);
      const data = await response.json();
      console.log(data);
      
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <div className="page-container">
      <h1>Create new note</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form
        onSubmit={(e) =>
          handleAddNew(e, e.target.name.value, e.target.desc.value)
        }
      >
        <label htmlFor="name">Name:</label>
        <input required type="text" id="name" />
        <label htmlFor="desc">Description:</label>
        <input required type="text" id="desc" />
        <button className="btn" type="submit">Create</button>
      </form>
    </div>
  );
};

export default AddNote;