import axios from "axios"
import { ADD_RECORD, ADD_RECORD_TIME} from "./types"

export function addRecord(dataToSubmit) {
  const request = axios
    .post("/exercise/record", dataToSubmit)
    .then((response) => response.data)
  return {
    type: ADD_RECORD,
    payload: request,
  }
}

export function addRecordTime(dataToSubmit){
  const request = axios.post("/exercise/recordtime", dataToSubmit).then(response => response.data)
  return{
    type: ADD_RECORD_TIME,
    payload: request,
  }
}
