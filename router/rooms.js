import express from "express";

const router = express.Router();

//create
router.post("/", (req, res) => {
  res.send("hotel create");
});

//update
//delete
//get
//get all

export default router;
