import Head from "next/head";
import Header from "../components/pages/Header/Header";
import IntroduceMe from "../components/pages/IntroduceMe/IntroduceMe";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <IntroduceMe />
      </main>
    </div>
  );
}
