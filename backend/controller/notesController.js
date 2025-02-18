const queries = require('../db/queries');

module.exports = {
  getAllNotes: async (req, res, next) => {
    try {
      const notes = await queries.getAllNotes();

      res.json(notes);
    } catch (err) {
      next(err);
    }
  },

  getSingleNote: async (req, res, next) => {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ err: "ID is required!" });

      return;
    }

    try {
      const note = await queries.getNoteById(id);

      res.json(note);
    } catch (err) {
      next(err);
    }
  },

  createNote: async (req, res, next) => {
    console.log(req);

    const { name, description } = req.body;

    if (!name || !description) {
      res.status(400).json({ err: "Name and description are required!" });

      return;
    }

    try {
      await queries.createNote(name, description);

      res.json({ msg: "Note created!" });
    } catch (err) {
      next(err);
    }
  },

  updateNote: async (req, res, next) => {
    const { id } = req.params;
    const { name, description } = req.body;

    if (!name || !description || !id) {
      res.status(400).json({ err: "Name, id and description are required!" });
      console.log(name, description, id);
      return;
    }

    try {
      await queries.updateNote(name, description, id);

      res.json({ msg: "Note updated" });
    } catch (err) {
      next(err);
    }
  },

  deleteNote: async (req, res, next) => {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ err: "Id is required!" });

      return;
    }

    try {
      await queries.deleteNote(id);

      res.json({ msg: "Message deleted" });
    } catch (err) {
      next(err);
    }
  },
};
