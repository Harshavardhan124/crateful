import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.header}>
          <Image src="/logo.png" alt="logo" width={150} height={40} />
          <button></button>
        </div>
        <div className={styles.bodyWrapper}>
          <h1 className={styles.comingSoon}>COMING SOON.</h1>
          <p className={styles.subtext}>Seamless Storage, Smart Fulfillment.</p>
        </div>
      </main>
    </div>
  );
}
