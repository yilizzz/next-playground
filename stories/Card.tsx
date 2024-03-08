import styled from '@emotion/styled'


const StCardRoot = styled.div(({ theme }) => ({
    backgroundColor: theme.backgroundColor,
    color: theme.color,
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    width: 300,
    height: 300,
    padding: 20,
    borderRadius: 5,
    border: "0.5px solid #B8B0B0",
    boxShadow: "0px 15px 15px rgba(0, 0, 0, 0.08),0px 30px 20px rgba(0, 0, 0, 0.06), 0px 45px 30px rgba(0, 0, 0, 0.04)",
    position: "relative"
}))
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
    // const [currentValue, setCurrentValue] = useState('rgba(255, 87, 51, 0.8)')
    return (
        <StCardRoot>
            <StCardLabel>
                {label}
            </StCardLabel>
            <StCardGroup>
                Group: {group}
            </StCardGroup>
            <StCardPoints>
                Points to remember: {points}
            </StCardPoints>
        </StCardRoot>
    )
}

export default NkCard