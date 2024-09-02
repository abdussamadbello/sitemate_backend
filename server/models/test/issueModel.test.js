const issueModel = require('../issueModel');

describe('Issue Model', () => {
    beforeEach(() => {
        issueModel.getAllIssues().length = 0;
    });

    test('should create a new issue', () => {
        const issue = {
            title: 'Test Issue',
            description: 'This is a test issue'
        };
        const createdIssue = issueModel.createIssue(issue);

        expect(createdIssue).toHaveProperty('id');
        expect(createdIssue.title).toBe('Test Issue');
        expect(issueModel.getAllIssues()).toContainEqual(createdIssue);
    });

    test('should get all issues', () => {
        const issue1 = issueModel.createIssue({ title: 'Issue 1', description: 'Description 1' });
        const issue2 = issueModel.createIssue({ title: 'Issue 2', description: 'Description 2' });

        const issues = issueModel.getAllIssues();
        expect(issues).toEqual([issue1, issue2]);
    });

    test('should get issue by ID', () => {
        const issue = issueModel.createIssue({ title: 'Test Issue', description: 'Test Description' });
        const foundIssue = issueModel.getIssueById(issue.id);

        expect(foundIssue).toEqual(issue);
    });

    test('should update an issue by ID', () => {
        const issue = issueModel.createIssue({ title: 'Old Title', description: 'Old Description' });
        const updatedIssue = issueModel.updateIssue(issue.id, { title: 'New Title' });

        expect(updatedIssue.title).toBe('New Title');
        expect(issueModel.getIssueById(issue.id).title).toBe('New Title');
    });

    test('should delete an issue by ID', () => {
        const issue = issueModel.createIssue({ title: 'Test Issue', description: 'Test Description' });
        const deletedIssue = issueModel.deleteIssue(issue.id);

        expect(deletedIssue).toContainEqual(issue);
        expect(issueModel.getAllIssues()).not.toContainEqual(issue);
    });
});
