// models/detectionModel.js
import  pool from '../config/db.js';

/**
 * Insert a new vehicle detection
 */
export const insertDetection = async (data) => {
  const {
    uuid,
    vehicle_class,
    vehicle_image_path,
    plate_image_path,
    plate_number,
    confidence,
    timestamp,
    camera_id
  } = data;

  const query = `
    INSERT INTO vehicle_detections
      (uuid, vehicle_class, vehicle_image_path, plate_image_path, plate_number, confidence, timestamp, camera_id)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
  `;

  const values = [uuid, vehicle_class, vehicle_image_path, plate_image_path, plate_number, confidence, timestamp, camera_id];

  try {
    await pool.query(query, values);
    return { message: 'Detection inserted successfully' };
  } catch (err) {
    throw new Error(err.message);
  }
};

/**
 * Get all detections
 */
export const getAllDetections = async () => {
  const query = 'SELECT * FROM vehicle_detections ORDER BY timestamp DESC';
  try {
    const res = await pool.query(query);
    return res.rows;
  } catch (err) {
    throw new Error(err.message);
  }
};

/**
 * Get detection by UUID
 */
export const getDetectionByUUID = async (uuid) => {
  const query = 'SELECT * FROM vehicle_detections WHERE uuid=$1';
  try {
    const res = await pool.query(query, [uuid]);
    return res.rows[0];
  } catch (err) {
    throw new Error(err.message);
  }
};

/**
 * Optional: get detections by camera
 */
export const getDetectionsByCamera = async (camera_id) => {
  const query = 'SELECT * FROM vehicle_detections WHERE camera_id=$1 ORDER BY timestamp DESC';
  try {
    const res = await pool.query(query, [camera_id]);
    return res.rows;
  } catch (err) {
    throw new Error(err.message);
  }
};

//new model

export const getNewDetections = async () =>{
  const query = 'SELECT * FROM detections ORDER BY timestamp DESC';
  try {
    const res = await pool.query(query);
    return res.rows;
  } catch (err) {
    throw new Error(err.message);
  }
}