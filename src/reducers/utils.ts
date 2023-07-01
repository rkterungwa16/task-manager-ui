export function modifyTasks(project, editedProjectTask) {
  return project.tasks.map(task => {
    if (editedProjectTask.data.task._id === task._id) {
      return {
        ...editedProjectTask.data.task
      };
    }
    return task;
  });
}
