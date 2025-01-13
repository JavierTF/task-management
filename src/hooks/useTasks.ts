import { useState, useEffect, useCallback } from 'react';
import { taskService } from '../services/taskServices';
import { Task, TaskFormData } from '../types/types';

const STORAGE_KEY = 'tasks';

interface UseTasksReturn {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  page: number;
  addTask: (task: TaskFormData) => Promise<void>;
  toggleTask: (id: number) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
  handlePageChange: (page: number) => void;
}

export const useTasks = (): UseTasksReturn => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const loadTasks = useCallback(async () => {
    try {
      setLoading(true);
      const data = await taskService.getTasks(page);
      setTasks(data);
      setError(null);
    } catch (err) {
      setError('Error loading tasks. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const addTask = async (newTask: TaskFormData): Promise<void> => {
    try {
      const added = await taskService.addTask(newTask);
      setTasks(currentTasks => [added, ...currentTasks]);
    } catch (err) {
      setError('Error adding task. Please try again.');
    }
  };

  const toggleTask = async (id: number): Promise<void> => {
    try {
      const task = tasks.find(t => t.id === id);
      if (!task) {
        throw new Error('Task not found');
      }
      const updated = await taskService.toggleTask(id, !task.completed);
      setTasks(currentTasks => 
        currentTasks.map(t => t.id === id ? updated : t)
      );
    } catch (err) {
      setError('Error updating task. Please try again.');
    }
  };

  const deleteTask = async (id: number): Promise<void> => {
    try {
      await taskService.deleteTask(id);
      setTasks(currentTasks => currentTasks.filter(t => t.id !== id));
    } catch (err) {
      setError('Error deleting task. Please try again.');
    }
  };

  const handlePageChange = (newPage: number): void => {
    setPage(newPage);
  };

  return {
    tasks,
    loading,
    error,
    page,
    addTask,
    toggleTask,
    deleteTask,
    handlePageChange,
  };
};