import { useState } from 'react';
import styled from 'styled-components';

const TabMenus = ['ACCOUNT', 'SOCIAL', 'DEVICES'];
const SettingMenuItem = [
  '설정메뉴1',
  '설정메뉴2',
  '설정메뉴3',
  '설정메뉴4',
  '설정메뉴5',
]; // Todo..

/* type */
type TabMenu = ACCOUNT | SOCIAL | DEVICES;
type ACCOUNT = string;
type SOCIAL = string;
type DEVICES = string;

function Setting() {
  const [selectedMenu, setSelectedMenu] = useState<TabMenu>('ACCOUNT');

  return (
    <>
      <Title>Setting</Title>
      <ProfileWrapper>
        <ProfileImg>
          <img
            src="https://cdn.pixabay.com/photo/2013/04/01/21/30/photo-99135_960_720.png"
            alt="pic"
          />
        </ProfileImg>
        <ProfileInfo>
          <p className="name">아니테</p>
          <span className="nickname">ahnytae</span>
        </ProfileInfo>
      </ProfileWrapper>
      <NavTab>
        {TabMenus?.map((menu: TabMenu, idx: number) => (
          <li
            style={selectedMenu === menu ? TabBorderStyle : {}}
            onClick={() => setSelectedMenu(menu)}
          >
            {menu}
          </li>
        ))}
      </NavTab>
      <SettingMenus>
        {SettingMenuItem?.map((item, idx: number) => (
          <li>
            <button>ICON</button>
            <span>{item}</span>
            <MenuMore>
              <span>{`>`}</span>
            </MenuMore>
          </li>
        ))}
      </SettingMenus>
    </>
  );
}

export default Setting;

/** style **/
const Title = styled.h1`
  font-size: 44px;
  font-weight: bold;
  color: #555555;
  margin: 0 0 40px 0;
`;

const ProfileWrapper = styled.div`
  overflow: hidden;
  text-align: left;
  margin: 0 0 40px 0;
`;

const ProfileImg = styled.div`
  width: 88px;
  border-radius: 50%;
  border: 3px solid #555555;
  float: left;

  img {
    border: 3px solid darkcyan;
    border-radius: 50%;
  }
`;

const ProfileInfo = styled.div`
  float: left;
  margin: 20px;

  p {
    color: #555555;
    font-size: 28px;
    font-weight: 700;
    margin: 0 0 5px 0;
  }

  span {
    color: #555555;
  }

  button {
    float: right;
  }
`;

const NavTab = styled.ul`
  margin: 0 0 40px 0;
  li {
    padding: 5px 0;
    margin: 0 50px 0 0;
    display: inline-block;

    &:hover {
      cursor: pointer;
    }
  }
`;

const TabBorderStyle: React.CSSProperties = {
  borderBottom: '1px red solid',
  borderBottomColor: '#555555',
  borderWidth: '4px',
};

const SettingMenus = styled.ul`
  cursor: pointer;

  li {
    padding: 10px 0;
  }

  span {
    margin: 0 0 0 10px;
  }
`;

const MenuMore = styled.div`
  float: right;
  vertical-align: baseline;
  span {
    line-height: 1.5em;
  }
`;
