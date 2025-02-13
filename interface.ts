export interface ReceiveAirQuality {
    id: string;
    measurements: {
      hourly: {
        ts: string; //date
        aqi: number;
        pm25?: {
          aqi: number;
          concentration: number;
        };
      }[];
    };
    //public
  }
  export interface UpdateTimeOffsetRaw {
    day: number;
    hour: number;
    minute: number;
    //private
  }