import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import useWindowDimensions from '../../hooks/window-dimention';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faDiagramProject, faGauge, faListCheck, faPeopleGroup, faUser, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { ThemeState, Themes } from '../../actions/themeAction';
import { useSelector } from 'react-redux';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem(<Link to={'/'}>Dashboard</Link>, '1', <FontAwesomeIcon icon={faGauge} />),
    getItem(<span>Users</span>, '3', <FontAwesomeIcon icon={faUsers} />, [
        getItem(<Link to={'/premium-users'}>Premimum</Link>, '9', <FontAwesomeIcon icon={faUserPlus} />),
        getItem(<Link to={'/users'}>Normal</Link>, '10', <FontAwesomeIcon icon={faUser} />)
    ]),
    getItem(<Link to={'/database'}>Database</Link>, '8', <FontAwesomeIcon icon={faDatabase} />),
    getItem(<Link to={'/projects'}>Projects</Link>, '2', <FontAwesomeIcon icon={faDiagramProject} />),
    getItem(<Link to={'/team'}>Team</Link>, '5', <FontAwesomeIcon icon={faPeopleGroup} />),
    getItem(<Link to={'/tasks'}>Tasks</Link>, '7', <FontAwesomeIcon icon={faListCheck} />),
];

const navs: Map<string, string[]> = new Map([
    ['/', ['1']],
    ['/users', ['3']],
    ['/database', ['8']],
    ['/projects', ['2']],
    ['/team', ['5']],
    ['/tasks', ['7']],
])

interface NavbarProps{
    inDrawer: boolean
}

const Navbar: React.FC<NavbarProps> = ({inDrawer}) => {

    const { width } = useWindowDimensions();
    const location = useLocation();

    const theme = useSelector((state: ThemeState) => state.theme);

    return (
        <div>
            <Menu
                defaultSelectedKeys={navs.get(location.pathname)}
                mode="inline"
                theme= {theme === Themes.Dark ? "dark" : "light"}
                inlineCollapsed={(!inDrawer && width < 1700)}
                items={items}
                style={{ backgroundColor: "var(--color-white)", color: "var(--color-dark)" ,borderRadius: "1rem", height: "90vh" }}
            />
        </div>
    )
}

export default Navbar;