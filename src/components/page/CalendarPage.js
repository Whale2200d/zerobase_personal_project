import DayCell from "./cell/DayCell";
import styles from "./CalendarPage.module.css";

export default function Calendar() {
  return (
    <div className={styles.Canlendar}>
      <div className={styles.canlendarContainer}>
        <div className={styles.headerContainer}>
          <button className={styles.leftArrow}>◀</button>
          <div className={styles.date}>
            <button>2023Y</button>
            <button>05M</button>
            <button>03D</button>
          </div>
          <button className={styles.rightArrow}>▶</button>
        </div>
        {/* <RenderWeeks /> */}
        <div className={styles.bodyContainer}>
          <DayCell day={1} />
          <DayCell day={2} />
          <DayCell day={3} />
          <DayCell day={4} />
          <DayCell day={5} />
          <DayCell day={6} />
          <DayCell day={7} />
          <DayCell day={8} />
          <DayCell day={9} />
          <DayCell day={10} />
          <DayCell day={11} />
          <DayCell day={12} />
          <DayCell day={13} />
          <DayCell day={14} />
          <DayCell day={15} />
          <DayCell day={16} />
          <DayCell day={17} />
          <DayCell day={18} />
          <DayCell day={19} />
          <DayCell day={20} />
          <DayCell day={21} />
          <DayCell day={22} />
          <DayCell day={23} />
          <DayCell day={24} />
          <DayCell day={25} />
          <DayCell day={26} />
          <DayCell day={27} />
          <DayCell day={28} />
          <DayCell day={29} />
          <DayCell day={30} />
          <DayCell day={31} />
          <DayCell day={32} />
          <DayCell day={33} />
          <DayCell day={34} />
          <DayCell day={35} />
          <DayCell day={36} />
          <DayCell day={37} />
          <DayCell day={38} />
          <DayCell day={39} />
          <DayCell day={40} />
          <DayCell day={41} />
          <DayCell day={42} />
        </div>
      </div>
    </div>
  );
}
