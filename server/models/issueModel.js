const { v4: uuidv4 } = require('uuid');


const issues = [];

const getAllIssues = () => {
    return issues;
};

const getIssueById = (id) => {
    return issues.find(issue => issue.id === id);
};

const createIssue = (issue) => {
    issue.id = uuidv4();
    issues.push(issue);
    return issue;
};

const updateIssue = (id, updatedIssue) => {
    const index = issues.findIndex(issue => issue.id === id);
    if (index !== -1) {
        issues[index] = { ...issues[index], ...updatedIssue };
        return issues[index];
    }
    return null;
};

const deleteIssue = (id) => {
    const index = issues.findIndex(issue => issue.id === id);
    if (index !== -1) {
        return issues.splice(index, 1);
    }
    return null;
};

module.exports = {
    getAllIssues,
    getIssueById,
    createIssue,
    updateIssue,
    deleteIssue
};
