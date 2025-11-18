export interface WeatherData {
    coord: {
        lon: number;
        lat: number;
    };
    timezone: string;
    main: {
        temp: number;
        feels_like: number;
        humidity: number;
        pressure: number;
    };
    weather: Array<{
        main: string;
        description: string;
        icon: string;
    }>;
    wind: {
        speed: number;
    };
    name: string;
}

export interface WeatherError {
    message: string;
}