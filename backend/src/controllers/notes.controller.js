const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.send(notes);
}

notesCtrl.createNote = async (req, res) => {
    const newNote = new Note({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    });

    await newNote.save();
    res.send({
        message: 'Note saved'
    });
}

notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.send(note);
}

notesCtrl.updateNote = async (req, res) => {
    await Note.findOneAndUpdate(req.params.id, req.body);
    res.send({
        message: 'Note updated'
    });
}

notesCtrl.deleteNote = async (req, res) => {
    await Note.findOneAndDelete(req.params.id);
    res.send({
        message: 'Note deleted'
    });
}

module.exports = notesCtrl;