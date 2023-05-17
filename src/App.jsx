import './App.css'
import {useEffect, useState} from "react";
import svg from '../Frame 2.svg'
function App() {


    const [actualData, setActualData] = useState( new Date());

    setTimeout(()=>setActualData(new Date()), 1000);

    useEffect(()=>{
    },[actualData])

    //месяца нумеруются с 0
    const arrive_date = new Date(2023, 5, 19, 0, 0, 0)
    const now_date = actualData;

    let until_seconds = Math.round(Math.abs(arrive_date-now_date)/(1000))%60;//секунд
    let until_minutes = Math.round(Math.abs(arrive_date-now_date)/(1000*60))%60;//минут
    let until_hours = Math.round(Math.abs(arrive_date-now_date)/(1000*60*60))%24;//часов
    let until_days = Math.round(Math.abs(arrive_date-now_date)/(1000*60*60*24))%30;//дней
    let until_months = Math.round(Math.abs(arrive_date-now_date)/(1000*60*60*24*30));//месяцев

    if( arrive_date<now_date){
        until_seconds = 0
        until_minutes =0
        until_hours = 0
        until_days = 0
        until_months = 0
    }



    // console.log("Секунд " + until_seconds.toLocaleString("ru"));
    // console.log("Минут " + until_minutes.toLocaleString("ru"));
    // console.log("Часов " + until_hours.toLocaleString("ru"));
    // console.log("Дней " + until_days.toLocaleString("ru"));
    // console.log("Месяцев " + until_months.toLocaleString("ru"));

    const options = {
        era: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

  return (
      <div>
          <img src={svg} width={'100%%'} />
          Если я приеду {arrive_date.toLocaleString("ru", options)}
          <p>То до приезда осталось:</p>
          <div>
          <h3>{until_months}</h3>
              {until_months%10===1? " Месяц" :
                  ((until_months%10 >= 5) || until_months%10===0) ? " Месяцев" : " Месяца"}

          <h3> {until_days}</h3>
              {until_days%10 == 1 ? " День" :
                  ((until_days%5 >= 5) || until_days%10 === 0) ? " Дней" : " Дня"}

          <h3> {until_hours}</h3>
              {until_hours%10===1? " Час" :
                  ((until_hours%10 >= 5) || until_hours%10===0) ? " Часов" : " Часа"}

          <h3> {until_minutes} </h3>
              {until_minutes%10===1? " Минута" :
                  ((until_minutes%10 >= 5) || until_minutes%10 === 0) ? " Минут" : " Минуты"}
          <h3> {until_seconds} </h3>
          {until_seconds%10===1? " Секунда" :
              ((until_seconds%10 >= 5) || until_seconds%10 === 0) ? " Секунд" : " Секунды"}
        </div>
      </div>
  )
}

export default App
