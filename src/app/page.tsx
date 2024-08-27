import CalendarSwitcher from "@/components/calendar-switcher/calendar-switcher";
import styles from "./page.module.css";

export default function Calendar() {
  return (
    <main className={styles.main}>
      <CalendarSwitcher />
    </main>
  );
}
