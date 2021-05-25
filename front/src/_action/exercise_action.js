import axios from "axios"
import { ADD_RECORD } from "./types"

export function addRecord(dataToSubmit) {
  const request = axios
    .post("/exercise/record", dataToSubmit)
    .then((response) => response.data)
  return {
    type: ADD_RECORD,
    payload: request,
  }
}