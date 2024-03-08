import { Avatar } from '@ark-ui/react'
import styled from '@emotion/styled'

const StAvatarRoot = styled(Avatar.Root)(({width, height}) => ({
    width: width,
    height: height,
}))

function NkAvatar({width = 48, height = 48}) {
    return <StAvatarRoot width={width} height={height}>
      <Avatar.Fallback>PA</Avatar.Fallback>
      <Avatar.Image src="https://i.pravatar.cc/300" alt="avatar" />
    </StAvatarRoot>
}

export default NkAvatar