const groupModel = require("../model/group.model");
const lectureModel = require("../model/lecture.model");

const { scheduleService, uploadService } = require('../service');

module.exports = {
    _uploadGroupData: async (req, res) => {
        const data = await uploadService.getAllGroup();
        const lastData = await groupModel.find({});
        if (!lastData.length) {
            groupModel.insertMany(data);
        }
        groupModel.updateMany(data);
        res.json('Data Upload success');
    },
    _uploadLectureData: async (req, res) => {
        const data = await uploadService.getAllLecture();
        const lastData = await lectureModel.find({});
        if (!lastData.length) {
            lectureModel.insertMany(data);
        }
        lectureModel.updateMany(data);
        res.json('Data Upload success');
    }
};
