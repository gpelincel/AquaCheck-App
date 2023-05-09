export const meta = () => {
  return [{
    title: "Bem vindo!",
  }];
};

import { Outlet } from "@remix-run/react";
import WelcomeForm from "../components/WelcomeForm";
import Waves from "../components/waves/Waves";

export default function Index() {
  return (
    <main className="flex items-center justify-center w-full h-screen">
      <WelcomeForm></WelcomeForm>
      <Waves></Waves>
    </main>
  );
}
