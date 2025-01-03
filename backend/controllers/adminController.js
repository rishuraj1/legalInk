import { Dictionary } from "../models/dictionary.model.js";

const uploadDictionaryWords = async (req, res) => {
  try {
    console.log("uploadDictionaryWords");
    const entries = req.body;
    if (!Array.isArray(entries) || entries.some((e) => !e.word || !e.meaning)) {
      console.log("Invalid entries");
      return res.status(400).json({ error: "Invalid entries" });
    }
    console.log("entries", entries.length);
    await Dictionary.insertMany(entries);
    res.status(201).json({ message: "Words uploaded" });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: error.message });
  }
};

export { uploadDictionaryWords };
