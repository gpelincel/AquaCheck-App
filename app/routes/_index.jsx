export const meta = () => {
  return [{ title: "New Remix App" }];
};

import WelcomeForm from "../components/WelcomeForm.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Index() {
  return (
    <WelcomeForm></WelcomeForm>
  );
}
