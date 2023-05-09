export const meta = () => {
  return [{
    title: "Bem vindo!",
  }];
};

import { Outlet } from "@remix-run/react";
import WelcomeForm from "./../components/welcomeForm.jsx";
import Waves from "./../components/waves/waves.jsx";

export default function Index() {
  return (
    <main className="flex items-center justify-center w-full h-screen">
      <WelcomeForm></WelcomeForm>
      <Waves></Waves>
    </main>
  );
}
