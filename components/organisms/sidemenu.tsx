import { User } from 'components/molecules/user'
import styled from 'styled-components'
import { Colors } from 'hooks/variable'

export const SideMenu = () => {
  return (
    <Side>
      <User />
      サイドメニューです
    </Side>
  )
}

const Side = styled.aside`
  width: 30.8rem;
  height: 100%;
  background-color: ${Colors.colorSecondaryBackground}
`