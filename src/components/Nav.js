import React, { useContext } from "react";
import { MachineContext } from "../models/MachineProvider";

export default function Nav(props) {
  const [, send] = useContext(MachineContext);

  return (
    <nav>
      <button onClick={() => send("overviewScene")}>Overview</button>
      <button onClick={() => send("gitignoreScene")}>.gitignore</button>
      <button onClick={() => send("commitScene")}>commits</button>
    </nav>
  );
}
