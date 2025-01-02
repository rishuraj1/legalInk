import { Dictionary } from "../models/dictionary.model.js";

const uploadDictionaryWords = async (req, res) => {
  try {
    const entries = req.body;
    if (!Array.isArray(entries) || entries.some((e) => !e.word || !e.meaning)) {
      return res.status(400).json({ error: "Invalid entries" });
    }

    await Dictionary.insertMany(entries);
    res.status(201).json({ message: "Words uploaded" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export { uploadDictionaryWords };