import {
  insertDetection,
  getAllDetections,
  getDetectionByUUID,
  getNewDetections,
} from "./detectionModel.js";

export const addDetection = async (req, res) => {
  try {
    const result = await insertDetection(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const fetchAllDetections = async (req, res) => {
  try {
    const data = await getAllDetections();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const fetchDetectionByUUID = async (req, res) => {
  try {
    const { uuid } = req.params;
    const data = await getDetectionByUUID(uuid);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// new controller

export const fetchNewAllData = async (req,res) => {
  try {
    const data = await getNewDetections();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
