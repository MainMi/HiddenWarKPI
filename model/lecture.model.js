const { Schema, model } = require('mongoose');

const LectureSchema = new Schema({
    lectureId: { type: String, require: true },
    name: { type: String, require: true }
}, { timestamps: true });

module.exports = model('Lecture', LectureSchema);
