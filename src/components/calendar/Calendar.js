import Day from "./Day";
import styles from "./Calendar.module.css";

const RenderWeeks = () => {
  const weeks = [];
  const date = ["일", "월", "화", "수", "목", "금", "토"];

  for (let i = 0; i < 7; i++) {
    weeks.push(
      <div className={styles.col} key={i}>
        {date[i]}
      </div>
    );
  }

  return <div className={styles.weeksContainer}>{weeks}</div>;
};

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
        <RenderWeeks />
        <div className={styles.bodyContainer}>
          <Day day={1} />
          <Day day={2} />
          <Day day={3} />
          <Day day={4} />
          <Day day={5} />
          <Day day={6} />
          <Day day={7} />
          <Day day={8} />
          <Day day={9} />
          <Day day={10} />
          <Day day={11} />
          <Day day={12} />
          <Day day={13} />
          <Day day={14} />
          <Day day={15} />
          <Day day={16} />
          <Day day={17} />
          <Day day={18} />
          <Day day={19} />
          <Day day={20} />
          <Day day={21} />
          <Day day={22} />
          <Day day={23} />
          <Day day={24} />
          <Day day={25} />
          <Day day={26} />
          <Day day={27} />
          <Day day={28} />
          <Day day={29} />
          <Day day={30} />
          <Day day={31} />
          <Day day={32} />
          <Day day={33} />
          <Day day={34} />
          <Day day={35} />
        </div>
      </div>
    </div>
  );
}
