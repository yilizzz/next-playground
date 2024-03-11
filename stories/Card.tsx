import styled from '@emotion/styled'
import { motion } from "framer-motion"
import { PropsWithoutRef, JSX } from 'react';


const StCardRoot = styled(motion.div)(({ theme }) => ({
    backgroundColor: theme.backgroundColor,
    color: theme.color,
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    width: 300,
    height: 300,
    padding: 20,
    boxShadow: "0px 15px 15px rgba(0, 0, 0, 0.08),0px 30px 20px rgba(0, 0, 0, 0.06), 0px 45px 30px rgba(0, 0, 0, 0.04)",
    position: "relative"
}))
// Animate the StCardRoot component
const AnimatedStCardRoot = ({ children }: PropsWithoutRef<JSX.IntrinsicElements['div'] & {
    amICool: boolean
}>) => (
    <StCardRoot
        animate={{
            scale: [1, 0.8, 0.8, 0.8, 1],
            rotate: [0, 90, 180, 270, 0],
            borderRadius: ["0%", "50%", "50%", "50%", "0%"],

        }}
        transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: 0
            // repeat: Infinity,
            // repeatDelay: 1
        }}>
        {children}
    </StCardRoot>
);
const StCardLabel = styled.div(() => ({
    textAlign: "center",
    fontFamily: "monospace",
    fontSize: "32px",
    width: "100%",
    height: 30,
    position: "absolute",
    top: 20,
    left: 0
}))
const StCardGroup = styled.div(() => ({
    textAlign: "start",
    fontSize: "18px",
    width: "100%",
    height: 30,
    marginTop: 70
}))
const StCardPoints = styled.div(() => ({
    textAlign: "start",
    fontSize: "18px",
    width: "100%",
    marginTop: 10
}))

function NkCard({ label, group, points }) {

    return (

        <AnimatedStCardRoot amICool={true}>
            <StCardLabel>
                {label}
            </StCardLabel>
            <StCardGroup>
                Group: {group}
            </StCardGroup>
            <StCardPoints>
                Tips: {points}
            </StCardPoints>
        </AnimatedStCardRoot>

    )
}

export default NkCard