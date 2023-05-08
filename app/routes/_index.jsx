export const meta = () => {
  return [{ title: "Bem vindo!",
}];
};

import WelcomeForm from "../components/WelcomeForm.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Index() {
  return (
    <WelcomeForm></WelcomeForm>
  );
}
