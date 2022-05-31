import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  updataHotel
} from "../controllers/hotels.js";

const router = express.Router();

//create
router.post("/", createHotel);

//update
router.put("/:id", updataHotel);

//delete
router.delete("/:id", deleteHotel);

//get
router.get("/:id", getHotel);

//get all
router.get("/", getAllHotel);

export default router;
