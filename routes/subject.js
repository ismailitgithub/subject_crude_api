const express = require("express")
const router = express.Router();

const {
  list,
  createOrUpdate,
  read,
  remove,
} = require("../controllers/subjectController");

router.get("/subject",list); // display all subjects
router.post("/subject", createOrUpdate); // create if user == true -> update -> else -> display a single
router.get("/subject/:_id", read);  //display a sindle user _id
router.delete("/subject/:_id", remove); // delete a single user _id

module.exports = router;
