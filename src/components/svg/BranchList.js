import React from "react";

export default function BranchList({ x, y, step }) {
  return (
    <>
      <g id="BranchList" transform={`translate(${x} ${y})`}>
        <g data-branch="master">
          <text x="20" y="0" text-anchor="middle" dominant-baseline="central">
            master
          </text>
          <circle cx={75} cy={0} r={10} className="drawCircle" />
          <line x1="75" y1="0" x2="125" y2="0" className="stroke0" />

          <circle cx={125} cy={0} r={10} className="drawCircle" />
          <line x1="125" y1="0" x2="275" y2="0" className="stroke0" />
          <circle cx={425} cy={0} r={10} className="drawCircle" />
          <line x1="275" y1="0" x2="425" y2="0" className="stroke0" />
        </g>
        <g data-branch="feature1">
          <text
            x="195"
            y="-50"
            text-anchor="middle"
            dominant-baseline="central"
          >
            feature1
          </text>
          <line x1="175" y1="-25" x2="225" y2="-25" className="stroke0" />
          <circle cx={225} cy={-25} r={10} className="drawCircle" />
          <circle cx={175} cy={-25} r={10} className="drawCircle" />
        </g>
        <g data-branch="feature2">
          <text
            x="350"
            y="-75"
            text-anchor="middle"
            dominant-baseline="central"
          >
            feature2
          </text>
          <circle cx={325} cy={-50} r={10} className="drawCircle" />

          <circle cx={375} cy={-50} r={10} className="drawCircle" />
          <line x1="325" y1="-50" x2="375" y2="-50" className="stroke0" />
        </g>
        <g data-branch-to="feature1">
          <line x1="125" y1="0" x2="175" y2="-25" className="stroke0" />
        </g>

        <g data-merge="feature1ToMaster">
          <line x1="225" y1="-25" x2="275" y2="0" className="stroke0" />
          <circle cx={275} cy={0} r={10} className="drawCircle" />
        </g>
        <g data-branch-to="feature2">
          <line x1="275" y1="0" x2="325" y2="-50" className="stroke0" />
        </g>
        <g data-branch="cards">
          <circle cx={325} cy={50} r={10} className="drawCircle" />
          <circle cx={375} cy={50} r={10} className="drawCircle" />
          <line x1="325" y1="50" x2="375" y2="50" className="stroke0" />
          <text x="350" y="75" text-anchor="middle" dominant-baseline="central">
            cards
          </text>
        </g>

        <g data-branch-to="cards">
          <line x1="275" y1="0" x2="325" y2="50" className="stroke0" />
        </g>

        <g data-merge="feature2ToMaster">
          <line x1="375" y1="-50" x2="425" y2="0" className="stroke0" />
        </g>

        <text x="475" y="-100" text-anchor="middle" dominant-baseline="central">
          nav
        </text>
        <circle cx={425} cy={50} r={10} className="drawCircle" />
        <line x1="375" y1="50" x2="425" y2="50" className="stroke0" />

        <circle cx={475} cy={50} r={10} className="drawCircle" />
        <line x1="425" y1="50" x2="475" y2="50" className="stroke0" />

        <circle cx={475} cy={-75} r={10} className="drawCircle" />
        <line x1="425" y1="0" x2="475" y2="-75" className="stroke0" />

        <circle cx={525} cy={0} r={10} className="drawCircle" />
        <line x1="475" y1="-75" x2="525" y2="0" className="stroke0" />

        <line x1="425" y1="0" x2="525" y2="0" className="stroke0" />

        <circle cx={525} cy={50} r={10} className="drawCircle" />
        <line x1="475" y1="50" x2="525" y2="50" className="stroke0" />

        <circle cx={575} cy={50} r={10} className="drawCircle" />
        <line x1="525" y1="50" x2="575" y2="50" className="stroke0" />

        <circle cx={625} cy={0} r={10} className="drawCircle" />
        <line x1="575" y1="50" x2="625" y2="0" className="stroke0" />

        <line x1="525" y1="0" x2="625" y2="0" className="stroke0" />
      </g>
      <rect
        style={{ transform: `translate(${step}px, 0)` }}
        fill="rgba(0,0,0,.9)"
        id="branchOverlay"
        x="90"
        y="0"
        width="100%"
        height="200"
      ></rect>
    </>
  );
}
