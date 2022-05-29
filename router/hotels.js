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
    const updatedHotel = await Hotels.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      { new: true } // yenilemesi icin
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});
//delete
router.delete("/:id", async (req, res) => {
  try {
    await Hotels.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been delete !!");
  } catch (error) {
    res.status(500).json(error);
  }
});
//get
router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotels.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json(error);
  }
});
//get all
router.get("/", async (req, res) => {
  try {
    const hotels = await Hotels.find();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
