const lectureModel = require('../../model/lecture.model');

module.exports = {
    getAllLessons: () => lectureModel.find({})
};
