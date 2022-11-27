const { Schema, model } = require('mongoose');

const LessonSchema = new Schema({
    groupId: { type: String, require: true },
    scheduleFirstWeek: { type: Object, require: true },
    scheduleSecondWeek: { type: Object, require: true },
}, { timestamps: true });

module.exports = model('Lesson', LessonSchema);
