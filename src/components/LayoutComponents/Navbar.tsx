// import type { MenuProps } from 'antd';
// import { Avatar, Button, Menu } from 'antd';
// import { Dispatch, SetStateAction, useEffect, useState } from 'react';
// import useWindowDimensions from '../../hooks/window-dimention';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDatabase, faDiagramProject, faGauge, faListCheck, faPeopleGroup, faUser, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
// import { Link, useLocation } from 'react-router-dom';
// import { ThemeState, Themes } from '../../actions/themeAction';
// import { useSelector } from 'react-redux';

// type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//     label: React.ReactNode,
//     key: React.Key,
//     icon?: React.ReactNode,
//     children?: MenuItem[],
//     type?: 'group',
// ): MenuItem {
//     return {
//         key,
//         icon,
//         children,
//         label,
//         type,
//     } as MenuItem;
// }

// const items: MenuItem[] = [
//     getItem(<Link to={'/'}>Dashboard</Link>, '1', <FontAwesomeIcon icon={faGauge} />),
//     getItem(<span>Users</span>, '3', <FontAwesomeIcon icon={faUsers} />, [
//         getItem(<Link to={'/premium-users'}>Premimum</Link>, '9', <FontAwesomeIcon icon={faUserPlus} />),
//         getItem(<Link to={'/users'}>Normal</Link>, '10', <FontAwesomeIcon icon={faUser} />)
//     ]),
//     getItem(<Link to={'/database'}>Database</Link>, '8', <FontAwesomeIcon icon={faDatabase} />),
//     getItem(<Link to={'/projects'}>Projects</Link>, '2', <FontAwesomeIcon icon={faDiagramProject} />),
//     getItem(<Link to={'/team'}>Team</Link>, '5', <FontAwesomeIcon icon={faPeopleGroup} />),
//     getItem(<Link to={'/tasks'}>Tasks</Link>, '7', <FontAwesomeIcon icon={faListCheck} />),
// ];

// const navs: Map<string, string[]> = new Map([
//     ['/', ['1']],
//     ['/users', ['3']],
//     ['/database', ['8']],
//     ['/projects', ['2']],
//     ['/team', ['5']],
//     ['/tasks', ['7']],
// ])

// interface NavbarProps{
//     inDrawer: boolean
// }

// const Navbar: React.FC<NavbarProps> = ({inDrawer}) => {

//     const { width } = useWindowDimensions();
//     const location = useLocation();

//     const theme = useSelector((state: ThemeState) => state.theme);

//     return (
//         <div>
//             <Menu
//                 defaultSelectedKeys={navs.get(location.pathname)}
//                 mode="vertical"
//                 theme= {theme === Themes.Dark ? "dark" : "light"}
//                 inlineCollapsed={(!inDrawer && width < 1700)}
//                 items={items}
//                 style={{ backgroundColor: "var(--color-white)", color: "var(--color-dark)" ,borderRadius: "1rem", height: "90vh" }}

//             />
//         </div>
//     )
// }

// export default Navbar;


import React, { useState } from 'react';
import { Avatar, Button, Col, Menu, Popover, Row, Switch } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { faBars, faClose, faDatabase, faDiagramProject, faGauge, faListCheck, faPeopleGroup, faUser, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { ThemeState, Themes, setTheme } from '../../actions/themeAction';
import avatar from "../../assets/images/avatar1.png"
import { setThemeToLocalStorage } from '../../services/local-storage-service';
import useWindowDimensions from '../../hooks/window-dimention';

interface NavItemProps {
    label: React.ReactNode;
    icon?: React.ReactNode;
    to: string;
    children?: NavItemProps[];
    theme: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, icon, children, to, theme }) => {
    const location = useLocation();

    if (children) {
        return (
            <Menu.SubMenu key={to} title={label} icon={icon}>
                {children.map((child) => (
                    <NavItem key={child.to} label={child.label} to={child.to} icon={child.icon} theme={theme} />
                ))}
            </Menu.SubMenu>
        );
    }

    return (
        <Menu.Item key={to} icon={icon} style={{ backgroundColor: location.pathname === to ? '#1890ff30' : 'inherit' }}>
            <Link to={to} style={{ color: (location.pathname === to && theme === Themes.Dark) ? "white" : 'inherit' }}>
                {label}
            </Link>
        </Menu.Item>
    );
};


interface NavbarProps {
    inDrawer: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ inDrawer }) => {
    const theme = useSelector((state: ThemeState) => state.theme);
    const location = useLocation();
    const {width, height} = useWindowDimensions();
    const [collapsed, setCollapsed] = useState((!inDrawer && width < 1700));

    const dispatch = useDispatch();

    // const configureTheme = () => {
    //     setThemeToLocalStorage(theme.theme);
    //     dispatch(setTheme(theme.theme === Themes.Dark ? Themes.Light : Themes.Dark))
    //     document.body.classList.toggle("light-mode-variables")
    // }

    const items: NavItemProps[] = [
        {
            label: 'Dashboard',
            to: '/',
            icon: <FontAwesomeIcon icon={faGauge} />,
            theme: theme
        },
        {
            label: 'Users',
            to: '/users',
            icon: <FontAwesomeIcon icon={faUsers} />,
            children: [
                {
                    label: 'Premimum',
                    to: '/premium-users',
                    icon: <FontAwesomeIcon icon={faUserPlus} />,
                    theme: theme
                },
                {
                    label: 'Normal',
                    to: '/users',
                    icon: <FontAwesomeIcon icon={faUser} />,
                    theme: theme
                },
            ],
            theme: theme
        },
        {
            label: 'Database',
            to: '/database',
            icon: <FontAwesomeIcon icon={faDatabase} />,
            theme: theme
        },
        {
            label: 'Projects',
            to: '/projects',
            icon: <FontAwesomeIcon icon={faDiagramProject} />,
            theme: theme
        },
        {
            label: 'Team',
            to: '/team',
            icon: <FontAwesomeIcon icon={faPeopleGroup} />,
            theme: theme
        },
        {
            label: 'Tasks',
            to: '/tasks',
            icon: <FontAwesomeIcon icon={faListCheck} />,
            theme: theme
        },
    ];

    return (
        <div>
            <Menu
                mode="vertical"
                theme={theme === Themes.Dark ? 'dark' : 'light'}
                style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-dark)', height: '100vh',}}
                inlineCollapsed={collapsed}
                selectedKeys={[location.pathname]}
            >
                
                <div style={{ display: "flex", justifyContent: collapsed ? "center" : "start", margin: "0.5rem" }}>
                    <Button type='default' onClick={() => setCollapsed(prev => !prev)}>
                        <FontAwesomeIcon icon={faBars}/>
                    </Button>
                </div>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
                    <Avatar size={48} src={avatar} />
                </div>
                <p style={{ textAlign: "center", marginTop: "1rem", marginBottom: "3rem", display: collapsed ? "none" : "block"}}>Mustafa Turgut</p>


                {items.map((item) => (
                    <NavItem key={item.to} label={item.label} to={item.to} icon={item.icon} children={item.children} theme={theme} />
                ))}
            </Menu>
        </div>
    );
};

export default Navbar;
