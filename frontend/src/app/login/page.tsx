import { LoginForm } from "@/components/auth/login-form";
import { Toaster } from "sonner";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">DeerFlow</h1>
          <p className="text-slate-300">AI 工作流平台</p>
        </div>
        <LoginForm />
      </div>
      {/* 添加Toaster组件以显示通知 */}
      <Toaster position="top-center" />
    </div>
  );
}