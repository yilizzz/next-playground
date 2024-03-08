'use client'
import Image from "next/image";
import { useState } from "react";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import NkColorPicker from "../stories/ColorPicker";
import NkCard from "@/stories/Card";
import NkHeader from "@/stories/NkHeader";
import { useColorStore } from "./store/useColorStore";
import styled from "@emotion/styled";



const inter = Inter({ subsets: ["latin"] });


export default function Page() {

  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);

  const setColor = useColorStore((state) => state.setColor);

  const handleValueChange = (newValue) => {
    setColor(newValue);
  };
  const handleColorDecided = (isOk) => {
    if (isOk) {
      setIsColorPickerVisible(false)
    }
  };


  const infos = [{
    label: "Noah",
    group: "development front-end",
    points: "gentil, stable, his origin is Tunisia and Cameroon"
  },
  {
    label: "Aloïs",
    group: "CTO",
    points: "tall, gentil, i hope that he is stable"
  },
  {
    label: "Sophie",
    group: "development front-end",
    points: "gentil, piaoliang, having always her lunch box"
  }]

  const StDivHidden = styled.div((props) => ({
    display: props.show ? "block" : "none",
    position: "absolute",
    top: 80,
    right: 0,
    zIndex: 100
  }))

  const handleColorChoosed = (flag: boolean) => {
    if (flag) {
      setIsColorPickerVisible(flag)
    }
  }

  const StDivCards = styled.div(() => ({
    width: "60vw",
    display: "flex",
    flexWrap: "wrap",
    gap: 30
  }))
  return (
    <main className={styles.main}>

      <NkHeader onColorChooseClicked={handleColorChoosed} />

      <StDivHidden show={isColorPickerVisible}>
        <NkColorPicker onValueChange={handleValueChange} onColorDecided={handleColorDecided} />
      </StDivHidden>
      <StDivCards>
        {
          infos.map((item, index) => (
            <NkCard key={index} label={item.label} group={item.group} points={item.points} />
          ))
        }
      </StDivCards>
      {/* <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Learn <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main >
  );
}
