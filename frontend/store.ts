import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TermsConditionsAgreement {
  hasAgreed: boolean;
  setHasAgreed: (value: boolean) => void;
}

const useAppStore = create<
  TermsConditionsAgreement,
  [["zustand/persist", unknown]]
>(
  persist(
    (set) => ({
      hasAgreed: false,
      setHasAgreed: (value) => set({ hasAgreed: value }),
    }),
    {
      name: "legalink-app-storage",
    },
  ),
);

export default useAppStore;
