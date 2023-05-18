import styles from "./TabsModal.module.css";
import cx from "clsx";

import { useLocation, Link } from "react-router-dom";

const tabList = [
  { name: "GiftPage", pathname: "/main" },
  { name: "CalendarPage", pathname: "/calendar" },
  { name: "Letter&PackagePage", pathname: "/letter" },
  { name: "ShoppingCartPage", pathname: "/shoppingcart" },
];

export default function TabsModal() {
  const { pathname } = useLocation();

  return (
    <ul className={styles.tabList}>
      {tabList.map((tab, idx) => (
        <Tab
          key={`${idx}`}
          selected={(pathname === "/" ? "/main" : pathname) === tab.pathname}
          item={tab}
        />
      ))}
    </ul>
  );
}

function Tab({ item, selected, number }) {
  return (
    <li>
      <Link to={item.pathname} className={styles.link}>
        <button className={cx(styles.tab, { [styles.selected]: selected })}>
          <span>{item.name}</span>
          {number && <div className={styles.circle}>{number}</div>}
        </button>
      </Link>
    </li>
  );
}
