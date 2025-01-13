import React, { useState, FormEvent } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { TaskAddHandler } from '../types/types';

interface AddTaskFormProps {
  onAddTask: TaskAddHandler;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Task title is required');
      return;
    }
    onAddTask({ title, completed: false });
    setTitle('');
    setError('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
      <TextField
        fullWidth
        label="New Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        error={!!error}
        helperText={error}
        sx={{ mr: 2 }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Add Task
      </Button>
    </Box>
  );
};

export default AddTaskForm;