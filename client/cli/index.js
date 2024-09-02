const { Command } = require('commander');
const issueApi = require('./api/issueApi');

const program = new Command();

program
  .name('issue-cli')
  .description('CLI to interact with the Express CRUD API')
  .version('1.0.0');

program
  .command('list')
  .description('List all issues')
  .action(async () => {
    try {
      const issues = await issueApi.getIssues();
      console.log('Issues:', issues);
    } catch (error) {
      console.error('Error fetching issues:', error.message);
    }
  });

program
  .command('get <id>')
  .description('Get issue by ID')
  .action(async (id) => {
    try {
      const issue = await issueApi.getIssueById(id);
      console.log('Issue:', issue);
    } catch (error) {
      console.error(`Error fetching issue with ID ${id}:`, error.message);
    }
  });

program
  .command('create')
  .description('Create a new issue')
  .requiredOption('-t, --title <title>', 'Title of the issue')
  .requiredOption('-d, --description <description>', 'Description of the issue')
  .action(async (options) => {
    try {
      const newIssue = await issueApi.createIssue(options.title, options.description);
      console.log('Created Issue:', newIssue);
    } catch (error) {
      console.error('Error creating issue:', error.message);
    }
  });

program
  .command('update <id>')
  .description('Update an existing issue')
  .requiredOption('-t, --title <title>', 'New title of the issue')
  .requiredOption('-d, --description <description>', 'New description of the issue')
  .action(async (id, options) => {
    try {
      const updatedIssue = await issueApi.updateIssue(id, options.title, options.description);
      console.log('Updated Issue:', updatedIssue);
    } catch (error) {
      console.error(`Error updating issue with ID ${id}:`, error.message);
    }
  });

program
  .command('delete <id>')
  .description('Delete an issue')
  .action(async (id) => {
    try {
      const result = await issueApi.deleteIssue(id);
      console.log('Deleted:', result);
    } catch (error) {
      console.error(`Error deleting issue with ID ${id}:`, error.message);
    }
  });

program.parse(process.argv);
