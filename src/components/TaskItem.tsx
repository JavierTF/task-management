// src/components/TaskItem.tsx
import React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Checkbox,
} from '@mui/material';
import { Task, TaskToggleHandler, TaskDeleteHandler } from '../types/types';
import DeleteIcon from '@mui/icons-material/Delete';

interface TaskItemProps {
  task: Task;
  onToggle: TaskToggleHandler;
  onDelete: TaskDeleteHandler;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <ListItem>
      <Checkbox
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        color="primary"
      />
      <ListItemText
        primary={task.title}
        sx={{
          textDecoration: task.completed ? 'line-through' : 'none',
        }}
      />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => onDelete(task.id)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TaskItem;