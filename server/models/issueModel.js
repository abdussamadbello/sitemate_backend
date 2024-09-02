const { Issue } = require('../database/database');

const getAllIssues = async () => {
    return await Issue.findAll();
};

const getIssueById = async (id) => {
    return await Issue.findByPk(id);
};

const createIssue = async (issue) => {
    return await Issue.create(issue);
};

const updateIssue = async (id, updatedIssue) => {
    const issue = await Issue.findByPk(id);
    if (issue) {
        return await issue.update(updatedIssue);
    }
    return null;
};

const deleteIssue = async (id) => {
    const issue = await Issue.findByPk(id);
    if (issue) {
        await issue.destroy();
        return true;
    }
    return false;
};

module.exports = {
    getAllIssues,
    getIssueById,
    createIssue,
    updateIssue,
    deleteIssue
};