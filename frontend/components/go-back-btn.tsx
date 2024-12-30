"use client";

import { redirect } from "next/navigation";

const GoBackBtn = () => {
  const handleBack = () => {
    const referer = document.referrer || "/";
    redirect(referer);
  };
  return <button onClick={handleBack}>Go back</button>;
};

export default GoBackBtn;
