import styles from "./page.module.css";
import UserWelcome from "@/components/user-welcome/user-welcome";

export default function Home() {
  return (
    <main className={styles.main}>
      <UserWelcome />
      <UserWelcome firstName="Thomas" />
      <UserWelcome lastName="Gransden" />
      <UserWelcome firstName="Thomas" lastName="Gransden" />
    </main>
  );
}
