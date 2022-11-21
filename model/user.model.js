const { Schema, model } = require('mongoose');
const { userRoleEnum } = require('../constant');

const UserSchema = new Schema({
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    password: { type: String, required: true },
    age: { type: Number, default: 18 },
    role: { type: String, enum: Object.values(userRoleEnum), default: userRoleEnum.USER }
}, { timestamps: true });

module.exports = model('User', UserSchema);
