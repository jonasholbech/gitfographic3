import React from "react";

export default function BranchList({ x, y, step }) {
  const positions = [0, 146, 173, 246, 297, 324, 400, 450, 500, 800];
  return (
    <>
      <g id="BranchList" transform={`translate(${x} ${y})`}>
        <line x1="75" y1="0" x2="125" y2="0" />
        <line x1="125" y1="0" x2="275" y2="0" />
        <line x1="125" y1="0" x2="175" y2="-25" />
        <line x1="175" y1="-25" x2="225" y2="-25" />
        <line x1="225" y1="-25" x2="275" y2="0" />
        <line x1="275" y1="0" x2="425" y2="0" />
        <line x1="275" y1="0" x2="325" y2="-50" />
        <line x1="275" y1="0" x2="325" y2="50" />
        <line x1="325" y1="-50" x2="375" y2="-50" />
        <line x1="325" y1="50" x2="375" y2="50" />
        <line x1="375" y1="-50" x2="425" y2="0" />
        <line x1="375" y1="50" x2="425" y2="50" />
        <line x1="425" y1="50" x2="475" y2="50" />
        <line x1="425" y1="0" x2="475" y2="-75" />

        <line x1="475" y1="50" x2="525" y2="50" />
        <line x1="525" y1="50" x2="575" y2="50" />
        <line x1="425" y1="0" x2="625" y2="0" />
        <line x1="575" y1="50" x2="625" y2="0" />
        <g data-branch="master">
          <text x="20" y="0" textAnchor="middle" dominantBaseline="central">
            main
          </text>
          <circle cx={75} cy={0} r={10} className="drawCircle" />

          <circle cx={125} cy={0} r={10} className="drawCircle" />

          <circle cx={425} cy={0} r={10} className="drawCircle" />
        </g>
        <g data-branch="feature1">
          <text x="195" y="-50" textAnchor="middle" dominantBaseline="central">
            feature1
          </text>

          <circle cx={225} cy={-25} r={10} className="drawCircle" />
          <circle cx={175} cy={-25} r={10} className="drawCircle" />
        </g>
        <g data-branch="feature2">
          <text x="350" y="-75" textAnchor="middle" dominantBaseline="central">
            feature2
          </text>
          <circle cx={325} cy={-50} r={10} className="drawCircle" />

          <circle cx={375} cy={-50} r={10} className="drawCircle" />
        </g>
        <g data-branch-to="feature1"></g>

        <g data-merge="feature1ToMaster">
          <circle cx={275} cy={0} r={10} className="drawCircle" />
        </g>
        <g data-branch-to="feature2"></g>
        <g data-branch="cards">
          <circle cx={325} cy={50} r={10} className="drawCircle" />
          <circle cx={375} cy={50} r={10} className="drawCircle" />

          <text x="350" y="75" textAnchor="middle" dominantBaseline="central">
            cards
          </text>
        </g>

        <text x="475" y="-100" textAnchor="middle" dominantBaseline="central">
          nav
        </text>
        <circle cx={425} cy={50} r={10} className="drawCircle" />

        <circle cx={475} cy={50} r={10} className="drawCircle" />

        <circle cx={475} cy={-75} r={10} className="drawCircle" />

        <circle cx={525} cy={50} r={10} className="drawCircle" />

        <circle cx={575} cy={50} r={10} className="drawCircle" />

        <circle cx={625} cy={0} r={10} className="drawCircle" />
      </g>
      <rect
        style={{ transform: `translate(${positions[step]}px, 0)` }}
        //fill="rgba(0,0,0,.3)"
        fill="white"
        id="branchOverlay"
        x="90"
        y="120"
        width="100%"
        height="210"
      ></rect>
    </>
  );
}
