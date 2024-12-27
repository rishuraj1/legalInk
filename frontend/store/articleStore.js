import { create } from "zustand";
import { persist } from "zustand/middleware";

const useArticleStore = create(
    persist(
        (set) => ({
            title: "",
            subtitle: "",
            content: "",
            mainImage: null,
            setTitle: (title) => set({ title }),
            setSubtitle: (subtitle) => set({ subtitle }),
            setContent: (content) => set({ content }),
            setMainImage: (mainImage) => {
                if (mainImage) {
                    const reader = new FileReader();
                    reader.onload = () => {
                        set({ mainImage: reader.result }); // Save base64 string
                    };
                    reader.readAsDataURL(mainImage);
                } else {
                    set({ mainImage: null });
                }
            },
            resetArticle: () =>
                set({ title: "", subtitle: "", content: "", mainImage: null }),
        }),
        {
            name: "article-storage", // Key name in localStorage
            partialize: (state) =>
                // Only persist necessary fields (exclude methods)
                ({ title: state.title, subtitle: state.subtitle, content: state.content, mainImage: state.mainImage }),
        }
    )
);

export default useArticleStore;
