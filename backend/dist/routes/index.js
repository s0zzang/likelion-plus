import express from "express";
var router = express.Router();
/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "익스프레스세요" });
});
export default router;
