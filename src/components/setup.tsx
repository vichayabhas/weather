import { UpdateTimeOffsetRaw } from "../../interface";

export const zeroTimeOffset: UpdateTimeOffsetRaw = {
  minute: 0,
  hour: parseInt(process.env.PUBLIC_NEXT_TIME_ZONE || "0"),
  day: 0,
};
