import axios from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import bcryptjs from "bcryptjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const hashPassword = async (password: string) => {
  const saltRound = 10;
  return await bcryptjs.hash(password, saltRound);
};

export const comparePassword = async (password: string, hash: string) => {
  return await bcryptjs.compare(password, hash);
};

export const fontFamilies = [
  { label: "Arial", value: "Arial, sans-serif" },
  { label: "Courier New", value: '"Courier New", monospace' },
  { label: "Georgia", value: "Georgia, serif" },
  { label: "Times New Roman", value: '"Times New Roman", serif' },
  { label: "Verdana", value: "Verdana, sans-serif" },
  { label: "Comic Sans MS", value: '"Comic Sans MS", cursive' },
  { label: "Calibri", value: "Calibri, sans-serif" }, // Added Calibri
];
