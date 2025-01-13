import axios, { AxiosResponse } from 'axios';
import { Task, TaskFormData } from '../types/types';

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';
const ITEMS_PER_PAGE = 10;

interface TaskService {
  getTasks(page?: number): Promise<Task[]>;
  addTask(task: TaskFormData): Promise<Task>;
  toggleTask(id: number, completed: boolean): Promise<Task>;
  deleteTask(id: number): Promise<number>;
}

export const taskService: TaskService = {
  async getTasks(page = 1): Promise<Task[]> {
    const start = (page - 1) * ITEMS_PER_PAGE;
    const response: AxiosResponse<Task[]> = await axios.get(
      `${BASE_URL}?_start=${start}&_limit=${ITEMS_PER_PAGE}`
    );
    return response.data;
  },

  async addTask(task: TaskFormData): Promise<Task> {
    const response: AxiosResponse<Task> = await axios.post(BASE_URL, task);
    return response.data;
  },

  async toggleTask(id: number, completed: boolean): Promise<Task> {
    const response: AxiosResponse<Task> = await axios.patch(`${BASE_URL}/${id}`, { completed });
    return response.data;
  },

  async deleteTask(id: number): Promise<number> {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
  },
};