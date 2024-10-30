"use client";

import { X } from "lucide-react";
import Link from "next/link";

const SearchResetButton = () => {
  const resetForm = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) {
      form.reset();
    }
  };
  return (
    <button
      type="reset"
      onClick={resetForm}
      className="search-form-btn absolute right-8"
    >
      <Link href="/" className="">
        <X className="h-5 w-5 text-[#52525B] dark:text-[#A1A1AA] bg-none" />
      </Link>
    </button>
  );
};

export default SearchResetButton;
