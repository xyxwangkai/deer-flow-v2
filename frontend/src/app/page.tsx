import { redirect } from "next/navigation";

export default function LandingPage() {
  // 重定向到登录页面
  redirect("/login");
}