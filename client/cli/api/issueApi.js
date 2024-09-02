const axios = require('axios');

const API_BASE_URL = 'http://localhost:3000/api/issues';

const getIssues = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

const getIssueById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};

const createIssue = async (title, description) => {
  const response = await axios.post(API_BASE_URL, { title, description });
  return response.data;
};

const updateIssue = async (id, title, description) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, { title, description });
  return response.data;
};

const deleteIssue = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/${id}`);
  return response.data;
};

module.exports = {
  getIssues,
  getIssueById,
  createIssue,
  updateIssue,
  deleteIssue,
};
