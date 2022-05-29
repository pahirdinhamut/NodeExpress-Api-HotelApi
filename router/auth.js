import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("auth.js");
});
router.get("/register", (req, res) => {
  res.send("register Api");
});

export default router;
