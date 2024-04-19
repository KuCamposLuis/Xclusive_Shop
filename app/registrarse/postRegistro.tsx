import { cliente } from "@/models/types";
import axios from "axios";

export default async function postRegistro(userData: cliente) {
  try {
    const postUser = await axios.post(
      "http://www.xclusivedesigns.somee.com/api/Cliente",
      userData
    );
    console.log(postUser.data);
    return postUser.data;
  } catch (error) {
    console.error("Error al registrar", error);
    throw error;
  }
}