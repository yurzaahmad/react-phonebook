var express = require('express');
var router = express.Router();
const Chat = require('../models/Chat');
const moment = require('moment');


/* GET users listing. */
router.get('/', async (req, res, next) => {

  try {
    const result = await Chat.find().sort({ createdAt: 1 })
    let data = result.map(item => ({
      _id: item._id,
      id: item.id,
      name: item.name,
      message: item.message,
      date: moment(item.createdAt).format("YYYY-MM-DD"),
      time: moment(item.createdAt).format('h:mm a')
    }))
    res.json(data)
  } catch (error) {
    res.status(500).json(error)
  }
});

router.post('/', function (req, res) {
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
    response.data.date = data.date
    response.data.time = data.time
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
      response.data.date = data.date
      response.data.time = data.time
      res.status(201).json(data)
    }).catch((err) => {
      res.status(500).json(err)
    })
});

module.exports = router;
