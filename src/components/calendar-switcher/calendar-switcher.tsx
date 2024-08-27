"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./calendar-switcher.module.css";

const CalendarModes = ["day", "week", "month", "agenda"] as const;

type CalendarMode = (typeof CalendarModes)[number];

const CalendarSwitcher = () => {
  const [mode, setMode] = useState<CalendarMode>("day");

  return (
    <div className={styles.container}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {CalendarModes.map((item) => (
          <Image
            key={item}
            onClick={() => setMode(item)}
            alt={`Calendar ${item} view`}
            width={40}
            height={40}
            src={`/${item}.png`}
          />
        ))}
      </div>
      <p>{`Currently selected mode: ${mode}`}</p>
    </div>
  );
};

export default CalendarSwitcher;
