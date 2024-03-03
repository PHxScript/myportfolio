import React from "react";
import "./pieChart.css";

import { ResponsivePie } from "@nivo/pie";

const PieChart = () => {
  const pieChartData = [
    {
      id: "rust",
      label: "rust",
      value: 267,
      color: "hsl(78, 70%, 50%)",
    },
    {
      id: "lisp",
      label: "lisp",
      value: 297,
      color: "hsl(220, 70%, 50%)",
    },
    {
      id: "hack",
      label: "hack",
      value: 309,
      color: "hsl(146, 70%, 50%)",
    },
    {
      id: "sass",
      label: "sass",
      value: 451,
      color: "hsl(259, 70%, 50%)",
    },
    {
      id: "scala",
      label: "scala",
      value: 328,
      color: "hsl(85, 70%, 50%)",
    },
  ];

  return (
    <div className="dashboard_pieChart-content">
      <h5>Programming Languages</h5>
      <ResponsivePie
        data={pieChartData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "scala",
            },
            id: "lines",
          },
          {
            match: {
              id: "lisp",
            },
            id: "lines",
          },
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 52,
            // itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 15,
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

export default PieChart;
