import mongoose from "mongoose";
import { nanoid } from "nanoid";

const PrescriptSchema = new mongoose.Schema({
    prescriptId: {
        type: String,
        default: () => nanoid(8),
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    remark: {
        type: String,
    },
    drugs: [{
        drugName: {
            type: String,

        },
        drugQty: {
            type: Number
        },
        drugDosage: {
            type: String
        },
        drugId: {
            type: String
        },
        drugType: {
            type: String
        },
    }],
}, {
    timestamps: true
});

const Prescript = mongoose.model("Prescript", PrescriptSchema);
export default Prescript;