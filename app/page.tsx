import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardContent from "./components/dashboard/DashboardContent";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <DashboardContent />
      </div>
    </DashboardLayout>
  );
}