import React from "react";
import HeaderPage from "../../components/Header/HeaderPage";
import BannerHomePage from "./Banner/BannerHomePage";
import MovieList from "./MovieList/MovieList";
import MovieTabs from "./MovieTab/MovieTabs";
import NewsMovie from "./News/NewsMovie";
import SpeedBooking from "./SpeedBookingMovie/SpeedBooking";

export default function HomePage() {
  return (
    <div>
      <HeaderPage />
      <BannerHomePage />
      <SpeedBooking />
      <MovieList />
      <h1 className="xl:text-4xl md:text-4xl text-3xl text-center text-purple-700 font-bold mb-8">
        Lịch chiếu phim
      </h1>
      <MovieTabs />
      <NewsMovie />
    </div>
  );
}
