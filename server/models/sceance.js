const mongoose = require("mongoose");
sceanceSchema = new mongoose.Schema({
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  finalTime: {
    type: String,
  },
  medecin1: {
    type: mongoose.Types.ObjectId,
    ref: "medecin",
  },
  medecin2: {
    type: mongoose.Types.ObjectId,
    ref: "medecin",
  },
  specialite: {
    type: mongoose.Types.ObjectId,
    ref: "specialite",
  },
  infirmier: {
    type: mongoose.Types.ObjectId,
    ref: "infirmier", 
  },
  patient: {
    type: mongoose.Types.ObjectId,
    ref: "patient", 
  },
  code: {
    type: String,
  },
});
module.exports = mongoose.model("sceance", sceanceSchema);
