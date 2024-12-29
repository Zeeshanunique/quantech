import TaskList from "../components/tasks/TaskList"
import DashboardLayout from "../components/dashboard/DashboardLayout"
export default function TasksPage() {
  return (
    <DashboardLayout>
      <TaskList />
    </DashboardLayout>
  );
}