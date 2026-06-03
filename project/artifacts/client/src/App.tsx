import { Switch, Route, Redirect } from "wouter";
import { AuthProvider, useAuth } from "@/hooks/useAuth";
import MobileSidebar from "@/components/MobileSidebar";
import Landing from "@/pages/Landing";
import AuthPage from "@/pages/Auth";
import Dashboard from "@/pages/Dashboard";
import Profile from "@/pages/Profile";
import Analytics from "@/pages/Analytics";
import RoundHistory from "@/pages/RoundHistory";
import CreateSplit from "@/pages/CreateSplit";
import SubmitSession from "@/pages/SubmitSession";
import GymQuiz from "@/pages/GymQuiz";
import GolfQuiz from "@/pages/GolfQuiz";
import RoundTracker from "@/pages/RoundTracker";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-black/40 text-lg">Loading...</div>
      </div>
    );
  }
  if (!user) return <Redirect to="/auth" />;
  return <>{children}</>;
}

function AppShell() {
  return (
    <div className="min-h-screen bg-cream font-sans">
      <MobileSidebar />
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/auth" component={AuthPage} />

        <Route path="/dashboard">
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        </Route>

        <Route path="/profile">
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        </Route>

        <Route path="/analytics">
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        </Route>

        <Route path="/golf">
          <ProtectedRoute>
            <RoundHistory />
          </ProtectedRoute>
        </Route>

        <Route path="/golf/submit">
          <ProtectedRoute>
            <RoundTracker />
          </ProtectedRoute>
        </Route>

        <Route path="/workouts">
          <ProtectedRoute>
            <CreateSplit />
          </ProtectedRoute>
        </Route>

        <Route path="/workouts/submit">
          <ProtectedRoute>
            <SubmitSession />
          </ProtectedRoute>
        </Route>

        <Route path="/setup/gym">
          <ProtectedRoute>
            <GymQuiz onComplete={() => window.location.href = "/dashboard"} />
          </ProtectedRoute>
        </Route>

        <Route path="/setup/golf">
          <ProtectedRoute>
            <GolfQuiz onComplete={() => window.location.href = "/dashboard"} />
          </ProtectedRoute>
        </Route>

        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppShell />
    </AuthProvider>
  );
}
