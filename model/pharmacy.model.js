import mongoose from "mongoose";

const PharmacySchema = new mongoose.Schema({
  firebaseId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Please insert an email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a valid password"],
  },
  location: {
    longitude: {
      type: Number,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
  },
});

const Pharmacy = mongoose.model("Pharmacy", PharmacySchema);
export default Pharmacy;
