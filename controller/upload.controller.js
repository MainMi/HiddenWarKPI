const { API_SCHEDULE } = require('../config/config');
const { getApi } = require('../helper');
const groupModel = require('../model/group.model');
const lectureModel = require('../model/lecture.model');
const lessonsModel = require('../model/lessons.model');

const { uploadService } = require('../service');
const scheduleDBService = require('../service/schedule/group.service');

module.exports = {
    uploadGroupData: async (req, res, next) => {
        try {
            const data = await uploadService._uploadAllGroup;
            const lastData = await groupModel.find({});
            if (!lastData.length) {
                groupModel.insertMany(data);
                res.json('Data Upload success');
                return;
            }
            groupModel.updateMany(data);
            res.json('Data Upload success');
            next();
        } catch (e) {
            next(e);
        }
    },
    _uploadLectureData: async (req, res, next) => {
        try {
            const data = await uploadService._uploadAllLecture;
            const lastData = await lectureModel.find({});
            if (!lastData.length) {
                lectureModel.insertMany(data);
                res.json('Data Upload success');
                return;
            }
            lectureModel.updateMany(data);
            res.json('Data Upload success');
            next();
        } catch (e) {
            next(e);
        }
    },
    _uploadAllCurrentSchedule: async (req, res, next) => {
        try {
            const groupsData = await scheduleDBService.getAllGroup();
            // groupsData.forEach(value => {
            // });
            // eslint-disable-next-line no-inner-declarations
            async function getLessons(data, index = 1398) {
                const currentScheduleData = await getApi.getUrl(`${API_SCHEDULE}lessons?groupId=${groupsData[index].groupId}`);
            const { groupCode, scheduleFirstWeek, scheduleSecondWeek } = currentScheduleData.data;
                lessonsModel.create({ scheduleFirstWeek, scheduleSecondWeek, groupId: groupCode });
                console.log(index);
                if (index === data.length - 1) { return; }
                setTimeout(() => getLessons(groupsData, index + 1), 500);
            }
            getLessons(groupsData);
            res.send('Upload lessons success');
            next();
        } catch (e) {
            next(e);
        }
    }
};
