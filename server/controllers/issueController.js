const { v4: uuidv4 } = require('uuid');
const issueModel = require('../models/issueModel');

const getIssues = (req, res) => {
    const issues = issueModel.getAllIssues();
    res.json(issues);
};

const getIssue = (req, res) => {
    const issue = issueModel.getIssueById(req.params.id);
    if (issue) {
        res.json(issue);
    } else {
        res.status(404).json({ message: 'Issue not found' });
    }
};

const createIssue = (req, res) => {
    const newIssue = {
        title: req.body.title,
        description: req.body.description
    };
    const createdIssue = issueModel.createIssue(newIssue);
    res.status(201).json(createdIssue);
};

const updateIssue = (req, res) => {
    const updatedIssue = issueModel.updateIssue(req.params.id, req.body);
    if (updatedIssue) {
        res.json(updatedIssue);
    } else {
        res.status(404).json({ message: 'Issue not found' });
    }
};

const deleteIssue = (req, res) => {
    const deletedIssue = issueModel.deleteIssue(req.params.id);
    if (deletedIssue) {
        print(deletedIssue);
        res.json(deletedIssue);
    } else {
        res.status(404).json({ message: 'Issue not found' });
    }
};

module.exports = {
    getIssues,
    getIssue,
    createIssue,
    updateIssue,
    deleteIssue
};
