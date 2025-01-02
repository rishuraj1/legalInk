"use server";

import axios from "axios";

const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL! || "http://localhost:5000";

const getDictionary = async (query: string, limit: number, page: number) => {
  try {
    const data = await axios.get(`${baseAPIUrl}/api/v1/dictionary?page=${page}&limit=${limit}&search=${query}`);
    return data.data || {};
  } catch (error) {
    const err = error as Error;
    return err.message;
  }
};

export { getDictionary };
