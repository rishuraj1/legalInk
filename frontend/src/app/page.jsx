import { redirect } from "next/navigation";

const RedirectToHomePage = () => {
  return redirect("/home");
};

export default RedirectToHomePage;
