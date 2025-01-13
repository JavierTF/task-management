// src/services/taskService.js
import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';
const ITEMS_PER_PAGE = 10;

export const taskService = {
  async getTasks(page = 1) {
    const start = (page - 1) * ITEMS_PER_PAGE;
    const response = await axios.get(`${BASE_URL}?_start=${start}&_limit=${ITEMS_PER_PAGE}`);
    return response.data;
  },

  async addTask(task) {
    const response = await axios.post(BASE_URL, task);
    return response.data;
  },

  async toggleTask(id, completed) {
    const response = await axios.patch(`${BASE_URL}/${id}`, { completed });
    return response.data;
  },

  async deleteTask(id) {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
  },
};
