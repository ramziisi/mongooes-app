const express = require("express");
const router = express.Router();
const User = require('../modul/User');
router.post("/", (req, res) => {
    const information = req.body;
  
    User.create(information)
      .then((user) => res.status(201).send(user))
      .catch((err) => {
        console.log(err.message);
        res.status(500).send("Server Error");
      });
  });
  router.post("/one", (req, res) => {
    const information = req.body;
    const newUser = new User(information);
    newUser
      .save()
      .then((user) => res.status(201).json(user))
      .catch((err) => {
        console.log(err.message);
        res.status(500).send("Server Error");
      });
  });
  router.get("/",  (req, res) => {
    User.find()
        .then((users) => res.status(200).send(users))
       .catch((err) => {
         console.log(err.message);
          res.status(500).send("Server Error");
       });
  });
  router.get('/one',(req,res)=>{
      User.findOne({name:req.params.name})
      .then((user)=>{
          if (user){
          res.status(200).send(user);
      }else{
          res.status(200).send({msg:'err'})
      };
    })
      .catch((err)=>{
          console.log(err.msg);
          res.status(500).send('err server')
      });
  });
  router.get("/userid/:id", (req, res) => {
    User.findById(req.params.id, (err, user) => {
      if (err) {
        console.log(err.message);
        return res.status(500).send("Server Error");
      } else if (user) {
        res.status(200).send(user);
      } else {
        res.json({ msg: "User not found" });
      }
    });
  });
  router.put("/:id", (req, res) => {
    const information = req.body;
    User.findByIdAndUpdate(
      req.params.id,
      { $set: information },
      { new: true },
      (err, user) => {
        if (err) {
          console.log(err.message);
          return res.status(500).send("Server Error");
        }
        res.send(user);
      }
    );
  });
  router.put("/", (req, res) => {
    const information = req.body;
    User.findOneAndUpdate(
     {name :req.params.id},
      
      (err, user) => {
        if (err) {
          console.log(err.message);
          return res.status(500).send("Server Error");
        }
        res.send(user);
      }
    );
  });
  router.delete("/:id", (req, res) => {
    User.findByIdAndRemove(req.params.id)
      .then(() => res.send({ msg: "User Deleted!" }))
      .catch((err) => {
        console.log(err.message);
        res.status(500).send("Server Error");
      });
  });
  router.delete("/name/:name", (req, res) => {
    User.deleteMany({ name: req.params.fname })
      .then((users) =>
        res.send({ msg: "User Deleted!", count: users.deletedCount })
      )
      .catch((err) => {
        console.log(err.message);
        res.status(500).send("Server Error");
      });
  });
  
  module.exports=router;