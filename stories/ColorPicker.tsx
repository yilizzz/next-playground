import styled from '@emotion/styled'
import { ColorPicker } from '@ark-ui/react'
import { useState } from 'react'

// function CustomDiv({ children, ...props }) {
//     return <div {...props}>{children}</div>
// }
const StCustomDivStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
}

// const StDivForValueOfHexOrAlpha = styled(CustomDiv)(() => ({
//     ...StCustomDivStyle,
//     width: "60%",
//     marginBottom: 10

// }))
const StDivForValueOfHexOrAlpha = styled.div(() => ({
    ...StCustomDivStyle,
    width: "60%",
    marginBottom: 10

}))

const StDivForEyeDropperAndInputHexAndInputAlpha = styled.div(() => ({
    ...StCustomDivStyle,

}))

const StPickerRoot = styled(ColorPicker.Root)(() => ({
    position: "relative",
    width: 200,

}))

const StPickerControl = styled(ColorPicker.Control)(() => ({
    display: "flex",
    justifyContent: "space-between",
    height: 30,
}))

const StPickerChannelInput = styled(ColorPicker.ChannelInput)(() => ({
    width: 120,
    height: 25,
    borderRadius: 3,
    border: "0.5px solid #B8B0B0",
}))

const StPickerTrigger = styled(ColorPicker.Trigger)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    borderRadius: 5,
    border: "0.5px solid #B8B0B0",
    padding: 5,
    margin: 0
}))

const StPickerSwatch = styled(ColorPicker.Swatch)(() => ({
    width: "100%",
    height: "100%",
    borderRadius: 5,
}))

const StPickerArea = styled(ColorPicker.Area)(() => ({
    width: 300,
    height: 200,
}))

const StPickerAreaBackground = styled(ColorPicker.AreaBackground)(() => ({
    width: 300,
    height: 200,
    borderRadius: 5,
}))

const StPickerAreaThumb = styled(ColorPicker.AreaThumb)(() => ({
    width: 10,
    height: 10,
    border: "3px solid white",
    borderRadius: 30,

}))

const StDivUnderContent = styled.div(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    padding: 10,
    borderRadius: 5,
    border: "0.5px solid #B8B0B0",
}))

const StPickerChannelSlider = styled(ColorPicker.ChannelSlider)(() => ({
    position: "relative",
    margin: 10
}))

const StPickerChannelSliderTrack = styled(ColorPicker.ChannelSliderTrack)(() => ({
    width: 200,
    height: 15,
    borderRadius: 5,
}))

const StPickerChannelSliderThumb = styled(ColorPicker.ChannelSliderThumb)(() => ({
    width: 15,
    height: 15,
    borderRadius: 20,
    border: "1px solid white",
    position: "absolute",
    transform: 'translate(-55%, -50%)'
}))

const StPickerEyeDropperTrigger = styled(ColorPicker.EyeDropperTrigger)(() => ({
    width: 30,
    height: 30,
    textAlign: "center",
    border: "none"
}))

const StPickerPositioner = styled(ColorPicker.Positioner)(() => ({
    padding: 10,
    width: "100%",
    height: "100%",
}))
const StButton = styled.button(({ theme }) => ({
    backgroundColor: theme.backgroundColor,
    color: theme.color,
    padding: 5,
    borderRadius: 5,
    border: "0.5px solid #B8B0B0",
}))
function NkColorPicker({ onValueChange, onColorDecided }) {
    const [currentValue, setCurrentValue] = useState('rgba(255, 255, 255, 0.8)')

    return (<StPickerRoot
        format="rgba"
        value={currentValue}
        onValueChange={(details) => { setCurrentValue(details.valueAsString); onValueChange(details.valueAsString) }}
    // onValueChangeEnd={(details) => console.log(details)} defaultValue="#eb5e41"
    >
        {(api) => (
            <>
                <ColorPicker.Label>Choisir une couleur</ColorPicker.Label>

                <StPickerControl>
                    <ColorPicker.View format="rgba">
                        <StPickerChannelInput channel="hex" />
                    </ColorPicker.View>

                    <StPickerTrigger>
                        {/* <ColorPicker.TransparencyGrid /> */}
                        <StPickerSwatch value={api.value} />
                    </StPickerTrigger>
                </StPickerControl>
                <StPickerPositioner>
                    <ColorPicker.Content>
                        <StDivUnderContent>
                            <StPickerArea>
                                <StPickerAreaBackground />
                                <StPickerAreaThumb />
                            </StPickerArea>
                            <StDivForEyeDropperAndInputHexAndInputAlpha>
                                <StPickerEyeDropperTrigger>🔎</StPickerEyeDropperTrigger>
                                <div>
                                    <StPickerChannelSlider channel="hue">
                                        <StPickerChannelSliderTrack />
                                        <StPickerChannelSliderThumb />
                                    </StPickerChannelSlider>
                                    <StPickerChannelSlider channel="alpha">
                                        <ColorPicker.TransparencyGrid />
                                        <StPickerChannelSliderTrack />
                                        <StPickerChannelSliderThumb />
                                    </StPickerChannelSlider>
                                </div>
                            </StDivForEyeDropperAndInputHexAndInputAlpha>
                            <StDivForValueOfHexOrAlpha>
                                <ColorPicker.Label>hex</ColorPicker.Label>
                                <StPickerChannelInput channel="hex" />
                            </StDivForValueOfHexOrAlpha>
                            <StDivForValueOfHexOrAlpha>
                                <ColorPicker.Label>alpha</ColorPicker.Label>
                                <StPickerChannelInput channel="alpha" />
                            </StDivForValueOfHexOrAlpha>
                            <StButton onClick={() => onColorDecided(true)}>
                                OK, I decided
                            </StButton>

                        </StDivUnderContent>
                    </ColorPicker.Content>
                </StPickerPositioner>
            </>
        )
        }
    </ StPickerRoot >
    )
}

export default NkColorPicker