import type { WeatherData } from "../types";

interface WeatherCardProps {
    data: WeatherData;
}

export function WeatherCard({ data }: WeatherCardProps) {
    return (
        <div className="bg-neutral-800 border-2 transition duration-300 border-neutral-300 rounded-xl cursor-pointer p-6 hover:border-indigo-500">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl text-neutral-300 font-bold">{data.name}</h2>
                <img 
                  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt={data.weather[0].description}
                  className="w-19 h-19"
                />
            </div>

            <div className="flex">
                  <div className="w-[30%]">
                    <p className="text-4xl text-neutral-300 font-bold">{Math.round(data.main.temp)}</p>
                    <p className="text-neutral-300">{data.weather[0].main}</p>
                </div>

                <div className="space-y-2">
                  <p className="text-neutral-300">
                    Feels like: {Math.round(data.main.feels_like)}°C
                  </p>
                  <p className="text-neutral-300">
                    Humidity: {data.main.humidity}%
                  </p>
                  <p className="text-neutral-300">
                    Wind: {data.wind.speed} m/s
                  </p>
                </div>

            </div>
        </div>
    )
}