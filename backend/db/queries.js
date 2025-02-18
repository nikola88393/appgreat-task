const pool = require("./pool");

const getAllNotes = async () => {
  const query = "SELECT * FROM notes";
  const { rows } = await pool.query(query);

  return rows;
};

const getNoteById = async (id) => {
  const query = "SELECT * FROM notes WHERE id=$1";
  const { rows } = await pool.query(query, [id]);

  return rows;
};

const createNote = async (name, description) => {
  const query = "INSERT INTO notes(name, description) VALUES ($1, $2)";
  await pool.query(query, [name, description]);
};

const updateNote = async (name, description, id) => {
  const query = "UPDATE notes SET name=$1, description=$2 WHERE id=$3";
  await pool.query(query, [name, description, id]);
};

const deleteNote = async (id) => {
  const query = "DELETE FROM notes WHERE id=$1";
  await pool.query(query, [id]);
};

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
};