import EmployeeList from "../components/employees/EmployeeList"
import DashboardLayout from "../components/dashboard/DashboardLayout"

export default function EmployeesPage() {
  return (
    <DashboardLayout>
      <EmployeeList />
    </DashboardLayout>
  );
}