"use client";

import { Search } from "lucide-react";
import Form from "next/form";
import { useSearchParams } from "next/navigation";
import SearchResetButton from "./search-reset-btn";

const SearchInput = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  return (
    <Form
      action="/"
      scroll={false}
      className="search-form flex gap-1 max-w-xl relative"
    >
      <input
        type="search"
        name="query"
        id="query"
        placeholder="Search"
        defaultValue={query}
        className="max-w-[200px] bg-[#F4F4F5] dark:bg-[#242535] dark:placeholder:text-[#A1A1AA] shadow-sm rounded-lg px-2 py-1 placeholder:text-[#3B3C4A] text-[#3B3C4A] dark:text-[#A1A1AA] focus:outline-none focus:ring-1 focus:ring-accent focus:ring-opacity-50"
      />
      <div className="flex gap-1 items-center">
        {query && <SearchResetButton />}
        <button type="submit" className="search-form-btn absolute right-2">
          <Search className="h-5 w-5 text-[#52525B] dark:text-[#A1A1AA]" />
        </button>
      </div>
    </Form>
  );
};

export default SearchInput;
