// add the user info
export const UploadFile = async (req, res) => {
  try {
    const { originalname, mimetype, size } = req.file;

    console.log(req.file);

    // Handle missing filename
    if (!originalname) {
      return res.status(400).json({ error: "filename is required" });
    }

    // Send the response
    res.status(200).json({
      filename: originalname,
      type: mimetype,
      size,
    });
  } catch (error) {
    console.error("Error adding user:", error);
    return res
      .status(500)
      .json({ message: "Internal server error.", details: error.message });
  }
};
