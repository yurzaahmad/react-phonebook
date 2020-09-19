var express = require('express');
var router = express.Router();
var firebase = require("firebase");

//Fetch instances
router.get('/', function (req, res) {
  const userReference = firebase.database().ref("/user/");
  //Attach an asynchronous callback to read the data
  userReference.on("value", function (snapshot) {
    console.log(snapshot.val());
    res.json(snapshot.val());
    userReference.off("value");
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
    res.send("The read failed: " + errorObject.code);
  });
});

//Create new instance
router.post('/', function (req, res) {
  const id = req.body.id;
  const name = req.body.name;
  const phone = req.body.phone;

  const referencePath = '/user/' + id + '/';
  const userReference = firebase.database().ref(referencePath);
  userReference.set({ Name: name, Phone: phone }, function (error) {
    if (error) {
      res.send("Data could not be saved." + error);
    } else {
      res.send("Data saved successfully.");
    }
  });
});

//Update existing instance
router.put('/:id', function (req, res) {
  var id = req.params.id;
  var name = req.body.name;
  var phone = req.body.phone;

  var referencePath = '/user/' + id + '/';
  var userReference = firebase.database().ref(referencePath);
  userReference.update({ Name: name, Phone: phone }, function (error) {
    if (error) {
      res.send("Data could not be updated." + error);
    } else {
      res.send("Data updated successfully.");
    }
  });
});

//Delete an instance
router.delete('/:id', function (req, res) {
  var id = req.params.id;
  var referencePath = '/user/' + id + '/';
  var userReference = firebase.database().ref(referencePath);
  userReference.remove((error) => {
    if (error) {
      res.send("Data could not be deleted." + error);
    } else {
      res.send("Data deleted successfully.");
    }
  })
});

module.exports = router;