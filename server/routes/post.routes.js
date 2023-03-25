const express = require("express");
const router = express();

router.get("/", (req, res) => {
    res.json({ message: "get" });
});
router.post("/", (req, res) => {
    res.json({ message: "post" });
});
router.put("/:id", (req, res) => {
    res.json({ message: "put" });
});
router.delete("/:id", (req, res) => {
    res.json({ message: "deleted" });
});

module.exports = router;
