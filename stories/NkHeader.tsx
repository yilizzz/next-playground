'use client'
import React from "react";

import styled from '@emotion/styled'
import { Menu } from '@ark-ui/react'
import { motion } from "framer-motion"

const StHeaderRoot = styled.div(({ theme }) => ({
    backgroundColor: theme.backgroundColor,
    color: theme.color,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100vw",
    height: 50,
    marginBottom: 40,
    boxShadow: "0px 15px 15px rgba(0, 0, 0, 0.08),0px 30px 20px rgba(0, 0, 0, 0.06), 0px 45px 30px rgba(0, 0, 0, 0.04)",
    position: "relative"
}))
const StHeaderTitle = styled.div(() => ({
    fontFamily: "monospace",
    fontSize: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginLeft: 15
}))
const StHeaderMenu = styled.div(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    marginRight: 15
}))

const StMenuTrigger = styled(Menu.Trigger)(() => ({
    padding: 10,
    width: "100%",
    height: "60%",
    borderRadius: 5,
    cursor: "pointer"
}))
const StMenuPositioner = styled(Menu.Positioner)(({ theme }) => ({
    backgroundColor: theme.backgroundColor,
    color: theme.color,
    borderRadius: 5,
    cursor: "pointer"
}))

const StMenuContent = styled(Menu.Content)(() => ({
    padding: 10,
    width: 150,
    height: 150,
    borderRadius: 5,
    border: "0.5px solid #B8B0B0",

}))

const StMenuItem = styled(Menu.Item)(() => ({
    padding: 10,
    fontSize: 14,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "50%",
    borderBottom: "0.5px solid #B8B0B0 "
}))

function NkHeader({ onColorChooseClicked }) {
    const handleChooseColor = (id) => {
        if (id.value === "chooseColor") {
            onColorChooseClicked(true)
        }
    }
    return (
        <StHeaderRoot>
            <StHeaderTitle>My Colleagues</StHeaderTitle>

            <StHeaderMenu>
                <Menu.Root onSelect={(id) => handleChooseColor(id)}>
                    <motion.div whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 },
                    }}
                        whileTap={{ scale: 0.9 }}
                        whileInView={{ opacity: 1 }}>
                        <StMenuTrigger>Menu</StMenuTrigger>
                    </motion.div>

                    <StMenuPositioner>
                        <motion.div
                            initial={{ scale: 0.9 }}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.5 },
                            }}
                            whileTap={{ scale: 0.9 }}
                            whileInView={{ opacity: 1 }}>
                            <StMenuContent>
                                <StMenuItem id="chooseColor">Choose My Color</StMenuItem>
                            </StMenuContent>
                        </motion.div>
                    </StMenuPositioner>

                </Menu.Root>
            </StHeaderMenu>

        </StHeaderRoot>
    )
}

export default NkHeader