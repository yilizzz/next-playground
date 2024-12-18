"use client";
import Image from "next/image";
import { useState } from "react";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import NkColorPicker from "../stories/ColorPicker";
import NkCard from "@/stories/Card";
import NkHeader from "@/stories/NkHeader";
import { useColorStore } from "./store/useColorStore";
import styled from "@emotion/styled";
import { useGetPersonsQuery } from "./queries/persons.queries";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  const { data } = useGetPersonsQuery();
  console.log(data);

  const infos = [
    {
      label: "Noah",
      group: "development front-end",
      points: "gentil, stable, his origin is Tunisia and Cameroon",
    },
    {
      label: "Aloïs",
      group: "CTO",
      points: "tall, gentil, i hope that he is stable",
    },
    {
      label: "Sophie",
      group: "development front-end",
      points: "gentil, piaoliang, has a dog, had a lapin",
    },
    {
      label: "Nicolas",
      group: "CEO",
      points: "friendly, talktive, c'est lui qui m'a trouve",
    },
    {
      label: "Quentin",
      group: "development back-end",
      points: "il trouve AZURE !",
    },
  ];

  const StDivHidden = styled.div((props) => ({
    display: props.show ? "block" : "none",
    position: "absolute",
    top: 80,
    right: 80,
    zIndex: 100,
  }));

  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);

  const setColor = useColorStore((state) => state.setColor);

  const handleValueChange = (newValue: string) => {
    setColor(newValue);
  };

  const handleColorDecided = (flag: boolean) => {
    setIsColorPickerVisible(!flag);
  };

  const handleColorChoosed = (flag: boolean) => {
    setIsColorPickerVisible(flag);
  };

  const StDivCards = styled.div(() => ({
    width: "60vw",
    display: "flex",
    flexWrap: "wrap",
    gap: 30,
  }));
  return (
    <main className={styles.main}>
      <NkHeader onColorChooseClicked={handleColorChoosed} />

      <StDivHidden show={isColorPickerVisible}>
        <NkColorPicker
          onValueChange={handleValueChange}
          onColorDecided={handleColorDecided}
        />
      </StDivHidden>
      {/*  <StDivCards>
        {infos.map((item, index) => (
          <NkCard
            key={index}
            label={item.label}
            group={item.group}
            points={item.points}
          />
        ))}
      </StDivCards> */}
    </main>
  );
}
