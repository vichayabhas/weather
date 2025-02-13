'use client'
import AirQuality from "@/components/AirQuality";
// // import TMD from "@/components/TMD";
// import { useParams } from "next/navigation";
import React from "react";

export default function page() {
  // const params=useParams<{select:string}>()
  return (
    <div>
      {/* <TMD params={params} path="" /> */}
      <AirQuality />
    </div>
  );
}
