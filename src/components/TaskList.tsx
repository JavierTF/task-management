// src/components/TaskList.tsx
import React from 'react';
import { List, Pagination, Box, CircularProgress } from '@mui/material';
import { Task, TaskToggleHandler, TaskDeleteHandler, PageChangeHandler } from '../types/types';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  loading: boolean;
  page: number;
  onToggle: TaskToggleHandler;
  onDelete: TaskDeleteHandler;
  onPageChange: PageChangeHandler;
}

const TaskList: React.FC<TaskListProps> = ({ 
  tasks, 
  loading, 
  onToggle, 
  onDelete, 
  page, 
  onPageChange 
}) => {
  if (loading) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <List>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </List>
      <Box display="flex" justifyContent="center" mt={2}>
        <Pagination
          count={10}
          page={page}
          onChange={(_, value) => onPageChange(value)}
        />
      </Box>
    </Box>
  );
};

export default TaskList;