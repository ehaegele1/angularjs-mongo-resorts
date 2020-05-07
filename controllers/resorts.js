const express = require('express');
const router = express.Router();
const Resorts = require('../models/resort.js');

//GET
router.get("/", (req, res) => {
  Resorts.find({}, (err, foundResorts) => {
    res.json(foundResorts);
  })
})

//POST
router.post("/", (req, res) => {
  Resorts.create(req.body, (err, createdResorts) => {
    res.json(createdResorts)
  });
});

//PUT

router.put("/:id", (req, res) => {
  Resorts.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedResorts) =>{
    res.json(updatedResorts);
  })
})

//DELETE

router.delete("/:id", (req, res) => {
  Resorts.findByIdAndRemove(req.params.id, (err, deletedResorts) => {
    res.json(deletedResorts);
  })
})

module.exports = router;
