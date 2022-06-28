import axios from "axios";
import { ConsultRegister } from "../models/ConsultDTO";

export const api = axios.create({
  baseURL: "http://localhost:3333/",
});

export async function deleteConsult(consultId: string | number) {
  await api.delete(`/consults/${consultId}`).then((response) => {
    console.log(response.status);
    console.log(response.data);
  });
}

export async function editConsult(
  consultId: string | number,
  consult: ConsultRegister
) {
  api.put(`/consults/${consultId}`, consult).then((response) => {
    console.log(response.status);
    console.log(response.data);
  });
}

export async function createConsult(consultRegister: ConsultRegister) {
  const response = await api.post("/consults", consultRegister);
  console.log(response.status);
  console.log(response.data);
}
