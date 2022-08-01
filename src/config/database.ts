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

