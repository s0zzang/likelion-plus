import express from "express";
var router = express.Router();

import model from "../models/index.js";
import createHttpError from "http-errors";

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "익스프레스세요" });
});

// 📍 게시물 목록 조회
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

// 📍 게시물 등록 화면
// ✅ :val는 *로 해석됨 -> new인 경우 라우팅을 설정하기 위해서 [게시물 상세 조회]와 위치 변경
router.get("/:type/new", async function (req, res, next) {
  const type = req.params.type;
  res.render("community/new", { type });
});

// 📍 게시물 상세 조회
router.get("/:type/:_id", async function (req, res, next) {
  const _id = +req.params._id;
  const type = +req.params.type;
  const item = await model.post.detail(_id);
  res.render("community/detail", { item });
  if (item) next(createHttpError(404, "게시글 없삼"));
});

// 📍 게시물 등록
router.post("/:type", async function (req, res, next) {
  const type = req.params.type;
  req.body.type = type;
  await model.post.add(req.body);
  res.redirect(`/${type}`);
});

// 📍 게시물 수정 화면
router.get("/:type/:_id/edit", async function (req, res, next) {
  const type = req.params.type;
  const list = await model.post.list(type);
  res.render("community/list", { list });
});

// 📍 게시물 수정
router.post("/:type/:_id/edit", async function (req, res, next) {
  const type = req.params.type;
  const list = await model.post.list(type);
  res.render("community/list", { list });
});

// 📍 게시물 삭제
router.post("/:type/:_id", async function (req, res, next) {
  const type = req.params.type;
  const list = await model.post.list(type);
  res.render("community/list", { list });
});

// 📍 댓글 등록
router.post("/:type/:_id/replies", async function (req, res, next) {
  const { _id, type } = req.params;
  await model.post.addComment(Number(_id), req.body);
  res.redirect(`/${type}/${_id}`);
});

export default router;
