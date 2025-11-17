import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { WeatherCard } from "./components/WeatherdCard";
import { getWeather } from "./services/weatherAPI";
import type { WeatherData } from "./types";
import { LoadingSkeleton } from "./components/LoadingSkeleton";

const App = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (city: string) => {
    try {
      setIsLoading(true);
      setError('')
      const data = await getWeather(city)
      setWeather(data)
    }
    catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setWeather(null);
    }
    finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-neutral-950 min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-lg bg-neutral-800 shadow-lg rounded-lg p-6 space-y-6">
        <h1 className="text-3xl text-neutral-300 font-bold text-center mb-8">
          Weatheer Dashboard
        </h1>

        <SearchBar onSearch={handleSearch} isLoading={isLoading} />

        {isLoading && <LoadingSkeleton />}
        {!isLoading && weather && <WeatherCard data={weather} />}
        {!isLoading && error && (
          <div className="p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
