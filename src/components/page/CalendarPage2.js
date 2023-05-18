import "react-calendar/dist/Calendar.css";
import styles from "./CalendarPage2.module.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";

import NavCell from "./cell/NavCell";

export default function CalendarPage2() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <NavCell />
      <div className={styles.calendarContainer}>
        <Calendar onChange={onChange} value={value} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.infoItem}>
          <Link to="/takerinfo" className={styles.link}>
            성향 정보 입력
          </Link>
        </div>
        <div className={styles.infoItem}>
          <Link to="/alarm" className={styles.link}>
            알람 정보 입력 - 선택
          </Link>
        </div>
      </div>
    </>
  );
}
