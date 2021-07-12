import React from 'react';
import {
  StyledBtnSet,
  StyledHeader,
  StyledHeaderContents,
  StyledLogo,
} from './Styled';
import { Button } from 'component/Button';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { SidebarActionToggle } from 'store/action';

const Header = () => {
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(SidebarActionToggle());
  };

  return (
    <StyledHeader>
      <StyledHeaderContents>
        <Button onClick={handleToggleSidebar}>
          <BiMenu size={20} />
        </Button>
        <StyledLogo>MovieApp</StyledLogo>
        <StyledBtnSet>
          <Button>
            <AiOutlineSearch size={20} />
          </Button>
          <Button>
            <AiOutlineUser size={20} />
          </Button>
        </StyledBtnSet>
      </StyledHeaderContents>
    </StyledHeader>
  );
};

export default Header;
