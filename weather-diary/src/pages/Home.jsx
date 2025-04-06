import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DiaryCard from "../components/DiaryCard.jsx";
import WeatherBox from "../components/WeatherBox.jsx";
import useWeather from "../hooks/useWeather";

function Home() {
    const [diaries, setDiaries] = useState([]);
    const weather = useWeather();

    useEffect(() => {
        const savedDiaries = JSON.parse(localStorage.getItem("diaries") || "[]");
        setDiaries(savedDiaries);
    }, []);

    const handleUpdate = (index, updatedContent) => {
        const updatedDiaries = diaries.map((diary, i) => {
            if (i === index) {
                return { ...diary, content: updatedContent };
            }
            return diary;
        });
        setDiaries(updatedDiaries);
        localStorage.setItem("diaries", JSON.stringify(updatedDiaries));
    };

    return (
        <div>

            <h2>📘 일기 리스트 페이지입니다</h2>
            <WeatherBox weather={weather} />
            <Link to="/write">
                <button>일기 작성하기</button>
            </Link>
            {diaries.map((diary, index) => (
                <DiaryCard
                    key={index}
                    index={index}
                    date={diary.date}
                    content={diary.content}
                    onUpdate={handleUpdate}
                />
            ))}
        </div>
    );
}

export default Home;
