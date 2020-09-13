var express = require('express');
var router = express.Router();
const Chat = require('../models/Chat');
const { response } = require('moment')
const momwnt = require('moment');


/* GET users listing. */
router.get('/', function (req, res) {
  let res = [];

  Chat.find().sort({ createAt: 1 })
    .then((data) => {
      res = data.map(item => {
        return {
          id: item.id,
          name: item.name,
          message: item.message,
          date: moment(item.createAt).format("YYYY-MM-DD"),
          time: moment(item.createAt).format('h:mm a')
        }
      })
      res.status(200).json(res)
    }).catch((err) => {
      res.status(500).json(err)
    })
});

router.post('/', function (req, res, next) {
  const { id, name, message } = req.body;
  Chat.create({ id, name, message }).then((data) => {
    res.status(201).json(data)
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err)
  })
});

router.delete('/:id', function (req, res, next) {
  const { id } = req.params;
  Chat.findOneAndRemove({ id: Number(id) }).then((data) => {
    res.status(201).json(data)
  }).catch((err) => {
    res.status(500).json(err)
  })
});

module.exports = router;
