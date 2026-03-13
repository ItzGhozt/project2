import express from "express";
import {
  findActivityLogsByEntityType,
  findActivityLogsByEntityId,
  updateActivityLogNote,
  findAllActivityLogs,
} from "../models/ActivityLog.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

// All routes require authentication
router.use(isAuthenticated);

// Get all activity logs for applications
router.get("/applications", async (req, res) => {
  try {
    const logs = await findActivityLogsByEntityType(
      req.session.userId,
      "application"
    );
    res.json({ logs });
  } catch (error) {
    console.error("Get application logs error:", error);
    res.status(500).json({ error: "Failed to fetch activity logs" });
  }
});

// Get all activity logs for network
router.get("/network", async (req, res) => {
  try {
    const logs = await findActivityLogsByEntityType(
      req.session.userId,
      "network"
    );
    res.json({ logs });
  } catch (error) {
    console.error("Get network logs error:", error);
    res.status(500).json({ error: "Failed to fetch activity logs" });
  }
});

// Get all activity logs (recent feed)
router.get("/", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 50;
    const logs = await findAllActivityLogs(req.session.userId, limit);
    res.json({ logs });
  } catch (error) {
    console.error("Get activity logs error:", error);
    res.status(500).json({ error: "Failed to fetch activity logs" });
  }
});


//The Get entity and Id are doing the same thing with a different enetity type
//The two routes here can be combined into one
router.get("/:type", async (req, res) => {
  const validTypes = ["application", "network"];
  if (!validTypes.includes(req.params.type)) {
    return res.status(400).json({ error: "Invalid type" });
  }
  const logs = await findActivityLogsByEntityType(req.session.userId, req.params.type);
  ...
});


// Get activity logs for specific entity
router.get("/entity/:entityId", async (req, res) => {
  try {
    const logs = await findActivityLogsByEntityId(req.params.entityId);
    res.json({ logs });
  } catch (error) {
    console.error("Get entity logs error:", error);
    res.status(500).json({ error: "Failed to fetch activity logs" });
  }
});

// Update activity log user note
router.put("/:id", async (req, res) => {
  try {
    const { userNote } = req.body;

    if (userNote === undefined) {
      return res.status(400).json({ error: "userNote is required" });
    }

    const log = await updateActivityLogNote(
      req.params.id,
      req.session.userId,
      userNote
    );

    if (!log) {
      return res.status(404).json({ error: "Activity log not found" });
    }

    res.json({
      message: "User note updated successfully",
      log,
    });
  } catch (error) {
    console.error("Update activity log error:", error);
    res.status(500).json({ error: "Failed to update activity log" });
  }
});

export default router;

// well written code and handles appropriate status codes are used 
