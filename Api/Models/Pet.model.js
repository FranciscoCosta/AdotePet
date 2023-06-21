import mongoose from "mongoose";

const { Schema } = mongoose;

const petSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
    },
    size: {
        type: String,
        required: true,
        enum: ["Pequeno", "Médio", "Grande"],
    },
    weight: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
    },
    color: {
        type: String,
        required: true,
        enum: ["Preto","Branco","Marrom","Cinza","Laranja","Amarelo","Caramelo","Verde","Azul","Roxo"]
    },
    gender: {
        type: String,
        required: true,
        enum: ["macho", "fêmea"],
    },
    status: {
        type: String,
        required: true,
        default: "disponível",
        enum: ["disponível", "adotado", "desaparecido"],
    },
    description : {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024,
    },
    species: {
        type: String,
        required: true,
        enum: ["Cachorro","Gato","Pássaro","Roedor","Réptil","Outro"]
    },
    breed: {
        type: String,
        required: true,
        default: "Vira-lata",
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
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    timestamp: {
        type: Date,
    },
});

export default mongoose.model("Pet", petSchema);