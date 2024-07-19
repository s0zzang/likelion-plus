import express from "express";
var router = express.Router();

import model from "../models/index.js";

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "익스프레스세요" });
});

router.get("/:type", async function (req, res, next) {
  const type = req.params.type;
  const list = await model.post.list(type);
  res.render("community/list", { list });

  // api
  // res.json({
  //   ok: 1,
  //   item: list,
  // });
});

export default router;
