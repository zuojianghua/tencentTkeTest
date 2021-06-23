/*
 * @Author: zuojianghua
 * @Date: 2021-06-23 20:00:16
 * @LastEditTime: 2021-06-23 20:01:21
 * @LastEditors: zuojianghua
 * @Description:
 * @FilePath: /tencentTkeTest/app.js
 */
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello App!");
});

module.exports = router;
