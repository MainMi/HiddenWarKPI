const groupModel = require('../../model/group.model');

module.exports = {
    getAllGroup: () => groupModel.find({}),
    getGroupById: (groupId) => groupModel.findById(groupId),
    getGroupByName: (groupName) => groupModel.find({ name: groupName }).lean()
};
