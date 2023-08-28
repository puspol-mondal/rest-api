import asyncHandler from "express-async-handler";

//get all data
export const getAllData = asyncHandler(async (req, res) => {
  res.json({
    message: "Success",
  });
});
