const { Schema, model } = require('mongoose');

const GroupSchema = new Schema({
    groupId: { type: String, require: true },
    name: { type: String, require: true },
    faculty: { type: String, require: true }
}, { timestamps: true });

module.exports = model('Group', GroupSchema);
