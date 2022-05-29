import express from "express";
import Hotels from "../models/Hotels.js";

const router = express.Router();

//create
router.post("/", async (req, res) => {
  const newHotels = new Hotels(req.body);

  try {
    const saveHhotels = await newHotels.save();
    res.status(200).json(saveHhotels);
  } catch (error) {
    res.status(500).json(error);
  }
});

//update
router.put("/:id", async (req, res) => {
  try {
    const updatedHotel = await Hotels.findByIdAndUpdate(req.params.id, {
      $set: req.body
    });
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});
//delete
//get
//get all

export default router;
