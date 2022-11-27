const groupModel = require('../../model/group.model');
const lectureModel = require('../../model/lecture.model');

module.exports = {
    getAllLessons: async () => {
        const lectures = await lectureModel.find({});
        return lectures;
    },
    getAllGroup: async () => {
        const group = await groupModel.find({});
        return group;
    }
};
