import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { getAllRecord,myPage} from "../_action/user_action"

import "../css/App.css"
import "../css/Main.css"


function ExerciseData() {
  
  const [plTime,setPlTime] = useState(0)
  const [plKcal,setPlKcal] = useState(0)
  const [sqCount,setSqCount] = useState(0)
  const [sqKcal,setSqKcal] = useState(0)
  const [wrTime,setWrTime] = useState(0)
  const [wrKcal,setWrKcal] = useState(0)
  const [lgCount,setLgCount] = useState(0)
  const [lgKcal,setLgKcal] = useState(0)
  const [hmCount,setHmCount] = useState(0)
  const [hmKcal,setHmKcal] = useState(0)
  const [totalKcal,setTotalKcal] = useState(0)
  
  const dispatch = useDispatch()
  
  dispatch(myPage()).then(response =>{
      let userName = response.payload.userName
    dispatch(getAllRecord({userName : userName})).then(res => {
      if(res.payload.success){
        let pl_total_time = 0;
        let pl_total_kcal = 0;
        let sq_total_count = 0;
        let sq_total_kcal = 0;
        let wr_total_time = 0;
        let wr_total_kcal =0;
        let lg_total_count = 0;
        let lg_total_kcal =0;
        let hm_total_count = 0;
        let hm_total_kcal =0;
        
        for(let i=0; i<res.payload.info.length;i++){
          if(res.payload.info[i].exercise === "plank"){
            pl_total_time += res.payload.info[i].time
            pl_total_kcal += res.payload.info[i].useKcal
          }
          else if(res.payload.info[i].exercise === "squat"){
            sq_total_count += res.payload.info[i].count
            sq_total_kcal += res.payload.info[i].useKcal
          }
          else if(res.payload.info[i].exercise === "warrior"){
            wr_total_time = res.payload.info[i].time
            wr_total_kcal += res.payload.info[i].useKcal
          }
          else if(res.payload.info[i].exercise === "lunge"){
            lg_total_count = res.payload.info[i].count
            lg_total_kcal += res.payload.info[i].useKcal
          }
          else if(res.payload.info[i].exercise === "hammercurl"){
            hm_total_count = res.payload.info[i].count
            hm_total_kcal += res.payload.info[i].useKcal
          }else{
  
          }
        }
        setPlTime(pl_total_time)
        setPlKcal((pl_total_kcal).toFixed(0))
        setSqCount(sq_total_count)
        setSqKcal((sq_total_kcal).toFixed(0))
        setWrTime(wr_total_time)
        setWrKcal(wr_total_kcal.toFixed(0))
        setLgCount(lg_total_count)
        setLgKcal(lg_total_kcal.toFixed(0))
        setHmCount(hm_total_count)
        setHmKcal(hm_total_kcal.toFixed(0))
        setTotalKcal(Number(plKcal)+Number(sqKcal)+Number(wrKcal)+Number(lgKcal)+Number(hmKcal)+36)
      }
    })
    
    
  })
  

  return (
    <div>
      <div className="exer">
        <span className="sport">??? ??? ???</span>
        <span className="time">{plTime}???</span>
        <span className="compare">{plKcal}kcal</span>
      </div>
      <div className="exer">
        <span className="sport">??? ??? ???</span>
        <span className="time">{sqCount}???</span>
        <span className="compare">{sqKcal}kcal</span>
      </div>
      <div className="exer">
        <span className="sport">????????????</span>
        <span className="time">{wrTime}???</span>
        <span className="compare">{wrKcal}kcal</span>
      </div>
      <div className="exer">
        <span className="sport">??? ??? ???</span>
        <span className="time">{hmCount}???</span>
        <span className="compare">{hmKcal}kcal</span>
      </div>
      <div className="exer">
        <span className="sport">??? ??? ???</span>
        <span className="time">120???</span>
        <span className="compare">36kcal</span>
      </div>
      <div className="exer">
        <span className="sport">???    ???</span>
        <span className="time">{lgCount}???</span>
        <span className="compare">{lgKcal}kcal</span>
      </div>
        <a style={{ fontSize: "14px"  }}> ???-???????????? ????????? ??? ????????? : {totalKcal}Kcal</a>
        
      
    </div>
  )
}

export default ExerciseData
