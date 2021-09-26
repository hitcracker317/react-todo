import React, { VFC } from 'react'
import styled from 'styled-components'
import { mixins } from 'hooks/style'

export const User = () => {
  return (
    <UserWrapper className="flex align-items--end">
      <UserAvator alt="xxxx" src="https://bit.ly/sage-adebayo" />
      <UserTextWrapper>
        <UserName className="patagraph-16">Andrew dressy</UserName>
        <p className="patagraph-12 text-color-annotation">dynamaxcity@gmail.com</p>
      </UserTextWrapper>
    </UserWrapper>
  )
}

const UserWrapper = styled.div`
  ${mixins.padding16px20px}
`

const UserAvator = styled.img`
  ${mixins.roundFull(4.8)}
`

const UserTextWrapper = styled.div`
  margin-left: 1.6rem;
`

const UserName = styled.h3`
  margin-bottom: 0.4rem;
`