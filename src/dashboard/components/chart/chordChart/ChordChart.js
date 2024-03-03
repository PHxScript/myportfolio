import React from "react";
import "./chordChart.css";

import { ResponsiveChord } from "@nivo/chord";
const ChordChart = () => {
  const chordChartData = [
    [12, 747, 202, 1602, 773],
    [1368, 60, 156, 417, 1160],
    [145, 482, 839, 8, 1114],
    [1271, 112, 329, 280, 275],
    [27, 366, 157, 273, 1805],
  ];

  return (
    <div className="dashboard_chordChart-content">
      <ResponsiveChord
        data={chordChartData}
        keys={["John", "Raoul", "Jane", "Marcel", "Ibrahim"]}
        margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
        valueFormat=".2f"
        padAngle={0.02}
        innerRadiusRatio={0.96}
        innerRadiusOffset={0.02}
        inactiveArcOpacity={0.25}
        arcBorderColor={{
          from: "color",
          modifiers: [["darker", 0.6]],
        }}
        activeRibbonOpacity={0.75}
        inactiveRibbonOpacity={0.25}
        ribbonBorderColor={{
          from: "color",
          modifiers: [["darker", 0.6]],
        }}
        labelRotation={-90}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1]],
        }}
        colors={{ scheme: "nivo" }}
        motionConfig="stiff"
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 70,
            itemWidth: 80,
            itemHeight: 14,
            itemsSpacing: 0,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            symbolSize: 12,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default ChordChart;
