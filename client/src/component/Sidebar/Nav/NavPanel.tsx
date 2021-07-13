import React, { useEffect } from 'react';
import {
  StyledDimm,
  StyledNav,
  StyledNavContents,
  StyledNavHeader,
  StyledNavList,
} from './Styled';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/reducer';
import { Button } from 'component/Button';
import { FiLogOut } from 'react-icons/fi';
import { BiHome, BiMovie } from 'react-icons/bi';
import { TiBusinessCard } from 'react-icons/ti';
import { AiOutlineSetting } from 'react-icons/ai';
import { LogoutAction, SidebarCloseAction } from 'store/action';
import { useClickOutsideListenerRef } from 'hook/useClickOutside';
import NavButton from '../NavButton/Button';

const NavItem = [
  { label: 'Home', path: '/', icon: <BiHome size={24} /> },
  { label: 'My Card', path: '/card', icon: <TiBusinessCard size={24} /> },
  { label: 'Movie', path: '/movie', icon: <BiMovie size={24} /> },
  { label: 'Setting', path: '/setting', icon: <AiOutlineSetting size={24} /> },
];

const Nav = () => {
  const {
    user: { id },
  } = useSelector((state: RootState) => state.AuthReducer);
  const { sidebar } = useSelector((state: RootState) => state.CommonReducer);
  const dispatch = useDispatch();

  const handleCloseSidebar = () => {
    dispatch(SidebarCloseAction());
  };

  const handleLogout = () => {
    dispatch(LogoutAction());
    handleCloseSidebar();
  };

  // esc키, 외부 클릭시 sidebar close
  const sidebarRef = useClickOutsideListenerRef(handleCloseSidebar, sidebar);

  useEffect(() => {
    const body = document.querySelector('body');
    if (!body) return;
    if (sidebar) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [sidebar]);

  return (
    <>
      <StyledNav isOpen={sidebar} ref={sidebarRef}>
        <StyledNavHeader>{`${id}님`}</StyledNavHeader>
        <StyledNavContents>
          <StyledNavList>
            {NavItem.map(({ label, path, icon }, index) => (
              <NavButton key={index} path={path} label={label} icon={icon} />
            ))}
          </StyledNavList>
          <Button label="Logout" onClick={handleLogout}>
            <FiLogOut />
          </Button>
        </StyledNavContents>
      </StyledNav>
      <StyledDimm isOpen={sidebar} />
    </>
  );
};

export default Nav;
