import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024,
    },
    image: {
        type: String,
        minlength: 5,
        maxlength: 1024,
        default: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    location: {
        state: String,
        city: String,
        neighborhood: String,
    },
    pets: [
        {
            type: Schema.Types.ObjectId,
            ref: "Pet",
        },
    ],
    timestamp: {
        type: Date,
    },
});

export default mongoose.model("User", userSchema);