import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardContent from "./components/dashboard/DashboardContent";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardLayout>
        <DashboardContent />
      </DashboardLayout>
    </div>
  );
}