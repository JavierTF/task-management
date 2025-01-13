import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Layout from './components/Layout';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import { useTasks } from './hooks/useTasks';

const App: React.FC = () => {
  const {
    tasks,
    loading,
    error,
    page,
    addTask,
    toggleTask,
    deleteTask,
    handlePageChange,
  } = useTasks();

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Layout>
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Task Management
          </Typography>
          <AddTaskForm onAddTask={addTask} />
          <TaskList
            tasks={tasks}
            loading={loading}
            onToggle={toggleTask}
            onDelete={deleteTask}
            page={page}
            onPageChange={handlePageChange}
          />
        </Box>
      </Container>
    </Layout>
  );
};

export default App;