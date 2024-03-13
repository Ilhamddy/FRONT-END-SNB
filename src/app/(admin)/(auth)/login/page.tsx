import { Metadata } from "next";
import LoginPage from "./component/Login";
export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <main>
      <LoginPage />
    </main>
  );
}
