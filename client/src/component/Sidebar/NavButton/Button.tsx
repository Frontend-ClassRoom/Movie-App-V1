import React from 'react';
import { StyledNavButton } from './Styled';
import { NavLink } from 'react-router-dom';

interface NavButtonProps {
  label: string;
  path: string;
  icon: React.ReactNode;
}

const NavButton = ({ label, path, icon }: NavButtonProps) => {
  return (
    <StyledNavButton>
      <NavLink to={path}>
        {icon}
        {label}
      </NavLink>
    </StyledNavButton>
  );
};

export default NavButton;
