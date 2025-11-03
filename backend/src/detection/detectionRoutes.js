import express from 'express'
import { addDetection, fetchAllDetections, fetchDetectionByUUID,fetchNewAllData } from './detectionController.js'

const detectionRouter = express.Router();

detectionRouter.post('/add-detections',addDetection)
// detectionRouter.get('/get-detections',fetchAllDetections)
detectionRouter.get('/get-detection/:id',fetchDetectionByUUID)
detectionRouter.get('/get-detections',fetchNewAllData)


export default detectionRouter