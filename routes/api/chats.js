const express = require("express");
const router = express.Router();
const Chat = require("../../models/Chat");
const ObjectId = require('mongodb').ObjectId;

router.get("/getChat/:userId/:jobId", (req, res) => {
  Chat.findOne({ userId: req.params.userId, jobId: req.params.jobId })
    .then( chat => {

      if (!chat) {
        const newChat = new Chat({
          userId: ObjectId(req.params.userId),
          jobId: ObjectId(req.params.jobId)
        })

        newChat.save().then( newchat => {
          return res.json({ chat: { [newchat.jobId]: newchat.messages } })
        })
      } else {
        return res.json({ chat: { [chat.jobId]: chat.messages } })
      }
    })
})

router.patch("/patchChat/:userId", (req, res) => {
  Chat.findOne({ userId: req.body.userId, jobId: req.body.jobId })
    .then( chat => {
      let messages = chat.messages

      Chat.findOneAndUpdate(
        { userId: req.body.userId,
          jobId: req.body.jobId
        },
        { $set: {
          messages: messages.concat([{ "User": req.body.message }])
        }},
        { returnOriginal: false}
      ).then( updatedChat => {
        return res.json({ chat: { [updatedChat.jobId]: updatedChat.messages } })
      })
    } )

})

module.exports = router;