import styled from '@emotion/styled'

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #7957d5;
  box-shadow: 0 5px 5px 0 rgba(150, 150, 150, 0.5);

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
    height: 100%;
    display: inline-block;
    padding: 0.5rem;
  }
`

export const NavLeft = styled.div`
  ${Nav} & {
    height: 100%;
    flex-grow: 0;
    margin-left: 1rem;
  }
`

export const NavMiddle = styled.div`
  ${Nav} & {
    height: 100%;
    flex-grow: 1;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }
`

export const NavRight = styled.div`
  ${Nav} & {
    height: 100%;
    flex-grow: 0;
    margin-right: 1rem;
  }
`
