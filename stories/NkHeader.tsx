'use client'
import React, { useState } from "react";

import styled from '@emotion/styled'
import { Menu } from '@ark-ui/react'

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

    backgroundColor: "gray",
    padding: 10,
    width: "100%",
    height: "60%",
    borderRadius: 5,
    border: "0.5px solid #B8B0B0",
}))
const StMenuItem = styled(Menu.Item)(() => ({
    padding: 10,
    width: "100%",
    height: "100%",
    borderRadius: 5,
    border: "0.5px solid #B8B0B0",
    color: "Teal"
}))

function NkHeader({ onColorChooseClicked }) {

    const [colorChooseClicked, setColorChooseClicked] = useState(false)
    const handleChooseColor = (id) => {
        if (id.value === "chooseColor") {
            setColorChooseClicked(true)
            onColorChooseClicked(colorChooseClicked)
        }
    }
    return (
        <StHeaderRoot>
            <StHeaderTitle>My Colleagues</StHeaderTitle>
            <StHeaderMenu>
                <Menu.Root onSelect={(id) => handleChooseColor(id)}>
                    <StMenuTrigger>Menu</StMenuTrigger>
                    <Menu.Positioner>
                        <Menu.Content>
                            <StMenuItem id="chooseColor">Choose My Color</StMenuItem>
                            {/* <Menu.Item id="undo">Undo</Menu.Item>
                            <Menu.Item id="delivery" disabled>
                                Delivery
                            </Menu.Item>
                            <Menu.Item id="unlink">Unlink</Menu.Item> */}
                        </Menu.Content>
                    </Menu.Positioner>
                </Menu.Root>
            </StHeaderMenu>
        </StHeaderRoot>
    )
}

export default NkHeader