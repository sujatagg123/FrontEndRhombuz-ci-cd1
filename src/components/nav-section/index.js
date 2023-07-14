import React from 'react';
import {
  Link,
  NavWrp,
  // PlusButton,
  SaveCount,
  TileBottomwpr,
  TileHeader,
  TileLabel,
  TileValue,
} from './index.sc';
import { navMenu } from '../../routes';
import Plus from '../../assets/icons/Plus';
import { theme } from '../../constants/theme';
import { axiosGet } from '../../service';
import { LoadingSpin } from '../loading-spinner/index.sc';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
// import DashboardPopup from '../dasboard-popup';
// import QuickLnkDrwr from '../quick-link-drawer';

const NavSection = () => {
  // const [menu, setNavMenu] = useState(JSON.parse(JSON.stringify(navMenu)));
  // const elements = menu.filter((ele) => ele.menuItem);
  // const element = elements[elements.length - 1];
  // const [show, setShow] = useState(false);

  const selectedTheme = useSelector((store) => {
    return store?.theme.theme || {};
  });

  const getTabCount = () => {
    return axiosGet('/tabs-count', {}, {});
  };

  const { isLoading, data } = useQuery({
    queryKey: ['tabCount'],
    queryFn: () => getTabCount(),
    refetchOnWindowFocus: false,
  });

  const getTileValue = (label) => {
    const countObj = data?.data?.data.find((item) => item.label === label);
    return countObj ? countObj.count : 0;
  };

  const elements = navMenu.filter((item) => item.menuItem);
  return (
    <NavWrp>
      {elements.slice(0, 5).map((ele, i) => (
        <Link index={i} key={`${ele.path}-${i}`} to={ele.path}>
          <TileHeader>
            {ele.icon}
            <SaveCount>
              <Plus
                width="1.5rem"
                height="1.5rem"
                color={theme[selectedTheme].logoText}
              />
            </SaveCount>
          </TileHeader>
          <TileBottomwpr>
            {isLoading ? (
              <LoadingSpin />
            ) : (
              <TileValue>{getTileValue(ele.label)}</TileValue>
            )}
            <TileLabel>{ele.label}</TileLabel>
          </TileBottomwpr>
        </Link>
      ))}
    </NavWrp>
  );
};

export default NavSection;
