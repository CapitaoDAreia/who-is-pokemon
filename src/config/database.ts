import mongoose from "mongoose";

export async function initDatabase() {
    try {
        await mongoose.connect("mongodb+srv://root:checkout@pokeapi.8u4er8q.mongodb.net/?retryWrites=true&w=majority", () => {
            console.log("banco de dados iniciado")
        })
    } catch(err) {
        console.log(err)
    }
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  image: String,
  score: Number,
});

export const Users = mongoose.model("Users", userSchema);

