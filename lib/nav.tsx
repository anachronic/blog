import styled from '@emotion/styled'
import { css } from '@emotion/react'

const stretchedRowFlex = css`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`

export const Nav = styled.nav`
  ${stretchedRowFlex};

  background-color: #7957d5;
  box-shadow: 0 5px 5px 0 rgba(150, 150, 150, 0.5);
  font-size: 1.1em;

  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      text-decoration: none;
      background-color: #6943d0;
      color: #fff;
    }
  }

  .item {
    padding: 0.5rem;
    display: inline-flex;
    align-items: center;
  }
`

export const NavLeft = styled.div`
  ${Nav} & {
    flex-grow: 0;
    margin-left: 1rem;

    ${stretchedRowFlex};
  }
`

export const NavMiddle = styled.div`
  ${Nav} & {
    flex-grow: 1;
    margin-right: 0.5rem;
    margin-left: 0.5rem;

    ${stretchedRowFlex};
  }
`

export const NavRight = styled.div`
  ${Nav} & {
    flex-grow: 0;
    margin-right: 1rem;

    ${stretchedRowFlex};
  }
`
