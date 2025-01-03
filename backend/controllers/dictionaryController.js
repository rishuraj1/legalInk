import { Dictionary } from "../models/dictionary.model.js";

const getDictionary = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || "";

    const startIndex = (page - 1) * limit;

    const searchFilter = search
      ? { word: { $regex: search, $options: "i" } }
      : {};

    const dictionary = await Dictionary.find(searchFilter)
      .limit(limit)
      .skip(startIndex);
    const totalItems = await Dictionary.countDocuments(searchFilter);

    if (!dictionary || dictionary.length === 0) {
      return res.status(404).json({ message: "No data found" });
    }

    res.status(200).json({
      data: dictionary,
      currentPage: page,
      totalPages: Math.ceil(totalItems / limit),
      totalItems,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getDictionary };
