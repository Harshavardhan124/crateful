"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onNotify = async () => {
    if (!email || !email.includes('@')) return;

    const request = new Request("http://localhost:5678/webhook/54339e63-59aa-47e0-99a6-cebe1bb4f4cd", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email }),
    });
    
    try {
      const response = await fetch(request);
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Failed to submit:", error);
    }
  };

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
          <div className={styles.inputWrapper}>
            {/* <input  value={email} onChange={e => setEmail(e.target.value)} type="text"  />
            <button onClick={() => onNotify()}>Nofity</button> */}
            {submitted ? (
              <div className={styles.thanksMessage}>
                <p>Thanks! We'll notify you when we launch.</p>
              </div>
            ) : (
              <div className={styles.notifyContainer}>
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email"
                  className={styles.emailInput}
                />
                <div className={styles.seperator} />
                <button 
                  onClick={onNotify}
                  className={styles.notifyButton}
                >
                  Notify Me
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
