import Pharmacy from "../model/pharmacy.model.js";

export const getPharmacies = async (req, res) => {
  try {
    const pharmacies = await Pharmacy.find();
    return res.status(200).json(pharmacies);
  } catch (error) {
    res.status(400).json("Error: " + error);
  }
};

export const getPharmacybyEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const pharmacy = await Pharmacy.findOne({ email });
    return res.status(200).json(pharmacy);
  } catch (error) {
    res.status(400).json("Error: " + error);
  }
};

export const signUpPharmacy = async (req, res) => {
  try {
    const { firebaseId, email, password, location } = req.body;
    const ifPharmacy = await Pharmacy.findOne({ email });

    if (ifPharmacy) {
      return res
        .status(200)
        .json("Pharmacy already exists. Please login to continue");
    }

    const newPharmacy = new Pharmacy({
      firebaseId,
      email,
      password,
      location,
    });
    await newPharmacy.save();
    return res.status(201).json(newPharmacy);
  } catch (error) {
    res.status(400).json("Error: " + error);
  }
};

export const signInPharmacy = async (req, res) => {
  try {
    const { email, password } = req.body;
    const pharmacy = await Pharmacy.findOne({
      email: email,
      password: password,
    });
    return res.status(200).json(pharmacy);
  } catch (error) {
    res.status(400).json("Error: " + error);
  }
};
