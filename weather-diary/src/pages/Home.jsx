import React, {useState, useEffect} from "react";
import DiaryCard  from "../components/DiaryCard.jsx";
import WeatherBox from "../components/WeatherBox.jsx";
import useWeather from "../hooks/useWeather.js";
import Header from "../components/Header.jsx";

function Home() {
  const [diaries, setDiaries] = useState([]);
  const weather = useWeather();
  useEffect(() => { const savedDiaries = JSON.parse(localStorage.getItem("diaries") || "[]");
    setDiaries(savedDiaries);
  }, []);

  return (
      <div>

        <h2>
          <Header />
          📘 일기 리스트 페이지입니다
          <WeatherBox weather={weather} />
        </h2>
        {diaries.map((diary, index) => (
            <DiaryCard key={index} date={diary.date} content={diary.content} />
        ))}
      </div>

  );
}

export default Home;
