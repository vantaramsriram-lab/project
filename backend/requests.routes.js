import { Router } from "express";
import { Requests } from "./models/requests.models.js";
import mongoose from "mongoose";
const router = Router();
router.post("/", async (req, res) => {
  try {
    const { title, description, priority, resolved } = req.body
    if (!title || !description || !priority) {
      return res.status(400).json({
        message: "fields are missing"
      })
    }
    const request = await Requests.create({
      title, description, priority
    })
    if (!request) {
      throw new Error("Request Not created")
    }
    return res.status(201).json({
      message: "new Request Created",
      request
    })
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
})
router.get("/", async (req, res) => {
  try {
    const requests = await Requests.find({});
    if (!requests) {
      throw new Error("Failed to fetch requests")
    }
    return res.status(200).json({
      requests
    })
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
})
router.patch("/:id", async (req, res) => {
  try {
    const requestId = new mongoose.Types.ObjectId(req.params.id)
    const request = await Requests.findOneAndUpdate(requestId, { $set: { resolved: true } },
      { returnDocument: "after", runValidators: true })
    if (!request) {
      return res.status(404).json({
        message: "Request Not Found"
      })
    }
    return res.status(200).json({
      message: "updated successfully"
    })
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
})
export default router