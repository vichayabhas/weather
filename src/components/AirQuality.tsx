import getAirQuality from "@/libs/otherBackend/getAirQuality";
import GetTimeHtml from "./GetTimeHtml";
import { UpdateTimeOffsetRaw } from "../../interface";
import { zeroTimeOffset } from "./setup";
import React from "react";
export default async function AirQuality() {
  const timeOffset: UpdateTimeOffsetRaw = zeroTimeOffset;

  const airQuality = await getAirQuality();
  return (
    <table>
      <tr>
        <th>time</th>
        <th>pm2.5</th>
        <th>aqi</th>
      </tr>
      {airQuality.measurements.hourly.map((hourly, i) => {
        if (!hourly.pm25) {
          return null;
        }
        return (
          <tr key={i}>
            <td>
              <GetTimeHtml input={hourly.ts} offset={timeOffset} />
            </td>
            <td>{hourly.pm25.concentration}</td>
            <td>{hourly.aqi}</td>
          </tr>
        );
      })}
    </table>
  );
}
