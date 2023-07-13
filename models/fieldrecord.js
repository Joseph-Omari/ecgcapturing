import mongoose, { Schema } from "mongoose";

const fieldSchema = new Schema(
  {
    groupNumber: String,
    cusName: String,
    cusContact: String,
    tarrifClass: String,
    activity: String,
    meterNumber: String,
    readings: String,
    anomaly: String,
    flatRate: String,
    digitalAddress: String,
    idType: String,
    idNumber: String,
    remarks: String,
  },
  {
    timestamps: true,
  }
);

const Field = mongoose.models.Field || mongoose.model("Field", fieldSchema);

export default Field;
