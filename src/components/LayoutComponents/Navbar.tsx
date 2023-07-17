import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { useEffect, useState } from 'react';
import useWindowDimensions from '../../hooks/window-dimention';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faDiagramProject, faGauge, faListCheck, faPeopleGroup, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

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
    getItem(<Link to={'/users'}>Users</Link>, '3', <FontAwesomeIcon icon={faUserPlus} />),
    getItem(<Link to={'/database'}>Database</Link>, '8', <FontAwesomeIcon icon={faDatabase} />),
    getItem(<Link to={'/projects'}>Projects</Link>, '2', <FontAwesomeIcon icon={faDiagramProject} />),
    getItem('Team', 'sub1', <FontAwesomeIcon icon={faPeopleGroup} />, [
        getItem(<Link to={'/team'}>My Team</Link>, '5'),
        getItem(<Link to={'/other-authors'}>Other Authors</Link>, '6'),
    ]),
    getItem(<Link to={'/tasks'}>Tasks</Link>, '7', <FontAwesomeIcon icon={faListCheck} />),
];

const navs: Map<string, string[]> = new Map([
    ['/', ['1']],
    ['/users', ['3']],
    ['/database', ['8']],
    ['/projects', ['2']],
    ['/team', ['5']],
    ['/', ['1']],
    ['/tasks', ['7']],
])

const Navbar = () => {

    const { width } = useWindowDimensions();
    const location = useLocation();

    return (
        <div>
            <Menu
                defaultSelectedKeys={navs.get(location.pathname)}
                mode="inline"
                theme="dark"
                inlineCollapsed={width < 1200}
                items={items}
                style={{ backgroundColor: "var(--color-white)", borderRadius: "1rem", height: "90vh" }}
            />
        </div>
    )
}

export default Navbar;