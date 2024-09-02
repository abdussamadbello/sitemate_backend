const issueModel = require('../issueModel');
const { sequelize } = require('../../database/database');

describe('Issue Model', () => {
    beforeEach(async () => {
        await sequelize.sync({ force: true }); // Reset the database
    });

    test('should create a new issue', async () => {
        const issue = {
            title: 'Test Issue',
            description: 'This is a test issue',
        };
        const createdIssue = await issueModel.createIssue(issue);

        expect(createdIssue).toHaveProperty('id');
        expect(createdIssue.title).toBe('Test Issue');
        const allIssues = await issueModel.getAllIssues();
        expect(allIssues.map(issue => issue.toJSON())).toContainEqual(expect.objectContaining(issue));
    });

    test('should get all issues', async () => {
        const issue1 = await issueModel.createIssue({ title: 'Issue 1', description: 'Description 1', });
        const issue2 = await issueModel.createIssue({ title: 'Issue 2', description: 'Description 2', });

        const issues = await issueModel.getAllIssues();
        expect(issues.map(issue => issue.toJSON())).toEqual(expect.arrayContaining([issue1.toJSON(), issue2.toJSON()]));
    });

    test('should get issue by ID', async () => {
        const issue = await issueModel.createIssue({ title: 'Test Issue', description: 'Test Description',  });
        const foundIssue = await issueModel.getIssueById(issue.id);

        expect(foundIssue.toJSON()).toEqual(issue.toJSON());
    });

    test('should update an issue by ID', async () => {
        const issue = await issueModel.createIssue({ title: 'Old Title', description: 'Old Description',  });
        const updatedIssue = await issueModel.updateIssue(issue.id, { title: 'New Title' });

        expect(updatedIssue.title).toBe('New Title');
        const foundIssue = await issueModel.getIssueById(issue.id);
        expect(foundIssue.title).toBe('New Title');
    });

    test('should delete an issue by ID', async () => {
        const issue = await issueModel.createIssue({ title: 'Test Issue', description: 'Test Description',  });
        const deleted = await issueModel.deleteIssue(issue.id);

        expect(deleted).toBe(true);
        const allIssues = await issueModel.getAllIssues();
        expect(allIssues.map(issue => issue.toJSON())).not.toContainEqual(issue.toJSON());
    });
});