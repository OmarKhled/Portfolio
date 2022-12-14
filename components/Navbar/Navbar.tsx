import { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiFillGithub, AiOutlineBehance } from "react-icons/ai"
import styled from "styled-components";

import IconWrapper from "@components/IconWrapper";
import { clamp } from "@components/GlobalStyles/GlobalStyles.helpers";
import ThemeToggle from "@components/ThemeToggle";
import { MAX_WIDTH, QUERIES } from "@constants/breakpoints";
import MenuBurger from "./MenuBurger";
import MobileNav from "./MobileNav";

const Navbar: NextPage = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const { asPath } = useRouter();
  const toggleMobileNav = (isOpen: boolean) => {
    setMobileNavOpen(isOpen);
    if (isOpen) {
      document.body!.style!.overflow = "hidden"
    } else {
      document.body!.style!.removeProperty("overflow")
    }
  }
  return (
    <>
    <MobileNav open={mobileNavOpen} setOpen={toggleMobileNav} />
    <Wrapper>
      <Name href="/">Omar Khled</Name>
      <Nav>
        <NavElements>
          <NavElement>
            <Link href="/" passHref>
              <NavLink currentPath={asPath}>Home</NavLink>
            </Link>
          </NavElement>
          <NavElement>
            <Link href="/about" passHref>
              <NavLink currentPath={asPath}>About</NavLink>
            </Link>
          </NavElement>
          <NavElement>
          <Link href="/previouswork" passHref>
              <NavLink currentPath={asPath}>Previous Work</NavLink>
            </Link>
          </NavElement>
        </NavElements>
      </Nav>
      <ExternalLinks>
        <IconWrapper>
          <ThemeToggleIcon />
        </IconWrapper>
        <IconWrapper aria-label="github profile link" as="a" href="https://github.com/omarkhled" target="_blank">
          <AiFillGithub />
        </IconWrapper>
        <IconWrapper aria-label="behance profile link" as="a" href="https://behance.net/omarkhled" target="_blank">
          <AiOutlineBehance />
        </IconWrapper>
      </ExternalLinks>
      <MenuBurgerIcon open={mobileNavOpen} setOpen={toggleMobileNav} />
    </Wrapper>
    </>
  );
}


const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: ${clamp(35, 48)};
  transition: color 2000ms ease;
  width: 80%;
  max-width: ${MAX_WIDTH / 16}rem;
  margin: auto;
  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: auto 1fr auto;
    align-items: baseline;
  }
`
const Name = styled.a`
  text-decoration: none;
  color: var(--primary);
  font-size: ${clamp(28.13, 35.16)};
  line-height: ${clamp(28.13, 35.16)};
  font-weight: 600;
  cursor: pointer;
  &:hover {
    opacity: 0.97;
  }
`
const Nav = styled.nav`
  display: none;
  @media ${QUERIES.tabletAndUp} {
    display: block;
  }
`
const NavElements = styled.ul`
  list-style: none;
  padding: 0;
`
const NavElement = styled.li`
  display: inline-block;
  padding: 0 0.8rem;
`
export const NavLink = styled.a<{ currentPath: string }>`
  --color: ${(p) => p.currentPath === p.href ? "var(--secondary)" : "var(--textColor)"} !important;
  color: var(--color);
  text-decoration: none;
  will-change: color;
  transition: color 400ms ease;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: var(--secondary);
    }
  }
`
const ExternalLinks = styled.div`
  display: none;
  @media ${QUERIES.tabletAndUp} {
    display: grid;
    /* align-self: end; */
    grid-template-columns: repeat(3, 1fr);
    max-height: 100%;
    gap: 0.8rem;
  }
`

export const ThemeToggleIcon = styled(ThemeToggle)`
  position: relative;
  line-height: 0;
  &::after {
    --tap-increment: -0.4rem;
    content: '';
    line-height: 0;
    position: absolute;
    top: var(--tap-increment);
    left: var(--tap-increment);
    right: var(--tap-increment);
    bottom: var(--tap-increment);
  }
`
const MenuBurgerIcon = styled(MenuBurger)`
  display: block;
  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`


export default Navbar;
