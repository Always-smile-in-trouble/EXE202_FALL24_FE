// import { AnimateSharedLayout, motion, LayoutGroup } from "framer-motion";
// import React, { useState } from "react";
// import "./Card.css";
// import { IoCloseOutline } from "react-icons/io5";
// import Chart from "react-apexcharts";

// export const Card = (props) => {
//   const [expanded, setExpanded] = useState(true);

//   const  handleHide =() => {
//     setExpanded(!CompactCard)
//   }
//   return (
//     // <AnimateSharedLayout>
//     //   {expanded ? "Expended" : <CompactCard param={props} />}
//     // </AnimateSharedLayout>
//     <LayoutGroup>
//       {expanded ? (
//         <ExpendedCard param={props} setExpanded={() => setExpanded(false)} />
//       ) : (
//         <CompactCard param={props} setExpanded={() => setExpanded(true)} />
//       )}
//     </LayoutGroup>
//   );
// };

// function CompactCard({ param, setExpanded }) {
//   const Png = param.png;
//   return (
//     <motion.div
//       className="CompactCard"
//       style={{
//         background: param.color.backGround,
//         boxShadow: param.color.boxShadow,
//       }}
//       onClick={setExpanded}
//       layoutId="expandableCard"
//     >
//       <div className="redialBar">{param.title}</div>
//       <div className="detail">
//         <Png />
//         <span>${param.value}</span>
//         <span>Last 24 hours</span>
//       </div>
//     </motion.div>
//   );
// }

// function ExpendedCard({ param, setExpanded }) {
//   const data = {
//     options: {
//       chart: {
//         type: "area",
//         height: "auto",
//       },
//       dropShadow: {
//         enable: false,
//         enableOnSeries: undefined,
//         top: 0,
//         left: 0,
//         blur: 3,
//         color: "#000",
//         opacity: 0.35,
//       },
//       fill: {
//         colors: ["#fff"],
//         type: "gradident",
//       },
//       dataLabels: {
//         enable: false,
//       },
//       stroke: {
//         curve: "smooth",
//         colors: ["white"],
//       },
//       tooltip: {
//         x: {
//           format: "dd/MM/yy HH:mm",
//         },
//       },
//       grid: {
//         show: true,
//       },
//       xaxis: {
//         type: "datetime",
//         categories: [
//           "2024-10-20T00:00:00.000Z",
//           "2024-10-20T01:05:00.000Z",
//           "2024-10-20T02:10:00.000Z",
//           "2024-10-20T03:15:00.000Z",
//           "2024-10-20T04:20:00.000Z",
//           "2024-10-20T05:25:00.000Z",
//         ],
//       },
//     },
//   };
//   return (
//     <motion.div
//       className="ExpendedCard"
//       style={{
//         background: param.color.backGround,
//         boxShadow: param.color.boxShadow,
//       }}
//       layoutId="expandableCard"
//     >
//       <div
//         style={{
//           alignSelf: "flex-end",
//           cursor: "pointer",
//           color: "white",
//         }}
//       >
//         {/* <IoCloseOutline onClick={(()) => {
//           setExpanded
//           console.log(expanded);
//         }} /> */}

//         <IoCloseOutline onClick={expanded} />
//       </div>
//       <span>{param.title}</span>
//       <div className="chartContainer">
//         <Chart series={param.series} type="area" options={data.options} />
//       </div>
//     </motion.div>
//   );
// }

import React, { useState } from "react";
import "./Card.css";
import { motion, AnimateSharedLayout, LayoutGroup } from "framer-motion";
import Chart from "react-apexcharts";
import { IoCloseOutline } from "react-icons/io5";

// parent Card

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <LayoutGroup>
      {expanded && expanded ? (
        <ExpandedCard
          param={props}
          setExpanded={() => setExpanded(false)}
          expanded={expanded}
        />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </LayoutGroup>
  );
};

// Compact Card
function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <motion.div
      layout
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      // layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="radialBar">
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>{param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded, expanded }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
        ],
      },
    },
  };

  return (
    <motion.div
      layout
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      // layoutId="expandableCard"
      onClick={() => setExpanded(!expanded)}
    >
      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart options={data.options} series={param.series} type="area" />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
}

export default Card;
