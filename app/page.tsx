import DashboardLayout from "./components/DashboardLayout";
import DashboardContent from "./components/DashboardContent";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardLayout>
        <DashboardContent />
      </DashboardLayout>
    </div>
  );
}
