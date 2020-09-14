var express = require('express');
var router = express.Router();
const Chat = require('../models/Chat');
const { response } = require('../app')
const moment = require('moment');


/* GET users listing. */
router.get('/', function (req, res) {
  let response = [];

  Chat.find().sort({ createAt: 1 })
    .then((data) => {
      response = data.map(item => {
        return {
          id: item.id,
          name: item.name,
          message: item.message,
          date: moment(item.createAt).format("YYYY-MM-DD"),
          time: moment(item.createAt).format('h:mm a')
        }
      })
      res.status(200).json(response)
    }).catch((err) => {
      res.status(500).json(err)
    })
});

router.post('/', function (req, res, next) {
  const { id, name, message } = req.body;

  let response = {
    status: '',
    data: {}
  }
  Chat.create({
    id, name, message
  }).then((data) => {
    response.status = 'success'
    response.data.id = data.id
    response.data.name = data.name
    response.data.message = data.message
    res.status(201).json(data)
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err)
  })
});

router.delete('/:id', function (req, res, next) {
  const { id } = req.params;

  let response = {
    status: '',
    data: {}
  }

  Chat.findOneAndRemove({ id: Number(id) })
    .then((data) => {
      response.status = 'success'
      response.message = "data have been deleted"
      response.data.id = id
      response.data.name = data.name
      response.data.message = data.message
      res.status(201).json(data)
    }).catch((err) => {
      res.status(500).json(err)
    })
});

module.exports = router;
