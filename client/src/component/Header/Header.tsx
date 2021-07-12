import { useEffect, useRef } from 'react';
import {
  StyledBtnSet,
  StyledHeader,
  StyledHeaderContents,
  StyledLogo,
} from './Styled';
import { Button } from 'component/Button';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { SidebarActionToggle } from 'store/action';
import { RootState } from 'store/reducer';

const Header = () => {
  const { fixedHeader } = useSelector(
    (state: RootState) => state.CommonReducer
  );
  const dispatch = useDispatch();
  const handleToggleSidebar = () => {
    dispatch(SidebarActionToggle());
  };

  return (
    <StyledHeader isFixed={fixedHeader}>
      <StyledHeaderContents>
        <Button onClick={handleToggleSidebar} variant="default">
          <BiMenu size={20} />
        </Button>
        <StyledLogo>MovieApp</StyledLogo>
        <StyledBtnSet>
          <Button variant="default">
            <AiOutlineSearch size={20} />
          </Button>
          <Button variant="default">
            <AiOutlineUser size={20} />
          </Button>
        </StyledBtnSet>
      </StyledHeaderContents>
    </StyledHeader>
  );
};

export default Header;
