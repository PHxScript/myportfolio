import React from "react";
import "./tunnelChart.css";
import { ResponsiveSankey } from "@nivo/sankey";

const TunnelChart = () => {
  const sanKeyChartData = {
    nodes: [
      {
        id: "John",
        nodeColor: "hsl(286, 70%, 50%)",
      },
      {
        id: "Raoul",
        nodeColor: "hsl(321, 70%, 50%)",
      },
      {
        id: "Jane",
        nodeColor: "hsl(248, 70%, 50%)",
      },
      {
        id: "Marcel",
        nodeColor: "hsl(338, 70%, 50%)",
      },
      {
        id: "Ibrahim",
        nodeColor: "hsl(306, 70%, 50%)",
      },
      {
        id: "Junko",
        nodeColor: "hsl(268, 70%, 50%)",
      },
    ],
    links: [
      {
        source: "Jane",
        target: "Raoul",
        value: 184,
      },
      {
        source: "Marcel",
        target: "Junko",
        value: 179,
      },
      {
        source: "Raoul",
        target: "John",
        value: 127,
      },
      {
        source: "Raoul",
        target: "Junko",
        value: 101,
      },
      {
        source: "Ibrahim",
        target: "Marcel",
        value: 94,
      },
      {
        source: "Ibrahim",
        target: "Jane",
        value: 100,
      },
      {
        source: "Junko",
        target: "John",
        value: 136,
      },
    ],
  };

  return (
    <div className="dashboard_sanKeychart-content">
      <h5>Clients</h5>
      <ResponsiveSankey
        data={sanKeyChartData}
        margin={{ top: 40, right: 130, bottom: 40, left: 20 }}
        align="justify"
        colors={{ scheme: "category10" }}
        nodeOpacity={1}
        nodeHoverOthersOpacity={0.35}
        nodeThickness={18}
        nodeSpacing={24}
        nodeBorderWidth={0}
        nodeBorderColor={{
          from: "color",
          modifiers: [["darker", 0.8]],
        }}
        nodeBorderRadius={3}
        linkOpacity={0.5}
        linkHoverOthersOpacity={0.1}
        linkContract={3}
        enableLinkGradient={true}
        labelPosition="outside"
        labelOrientation="vertical"
        labelPadding={16}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1]],
        }}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 130,
            itemWidth: 100,
            itemHeight: 14,
            itemDirection: "right-to-left",
            itemsSpacing: 2,
            itemTextColor: "#999",
            symbolSize: 14,
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

export default TunnelChart;
