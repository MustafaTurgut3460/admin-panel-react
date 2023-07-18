import { BellOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Dropdown, MenuProps, Popover, Row, Select, Space, Switch } from "antd";
import Search from "antd/es/input/Search";
import avatar1 from "../../assets/images/avatar1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ThemeProps } from "../../pages/Layout";
import { setThemeToLocalStorage } from "../../services/local-storage-service";

const items: MenuProps['items'] = [
    {
        label: <Link to={'/settings'}>Settings</Link>,
        key: '0',
        icon: <FontAwesomeIcon icon={faGear} />
    },
    {
        label: <Link to={'/logout'}>Logout</Link>,
        key: '1',
        icon: <FontAwesomeIcon icon={faRightFromBracket} />
    },
];

const Topbar: React.FC<ThemeProps> = ({light, setLight}) => {

    const content = (
        <div>
            <p>Content</p>
            <p>Content</p>
        </div>
    );

    const setTheme = () => {
        setThemeToLocalStorage(light ? "dark" : "light");        
        setLight(light => !light)
        document.body.classList.toggle("light-mode-variables")
    }


    return (
        <Row style={{ padding: "1rem", marginLeft: "1rem", marginRight: "1rem"}} justify={'space-between'}>
            <Col xs={0} md={4}>
                <Search placeholder="Search anything" />
            </Col>
            <Col xs={24} md={20}>
                <Space size={16} style={{ display: "flex", justifyContent: "end" }}>
                    <Select
                        defaultValue="tr"
                        style={{ width: 120 }}
                        options={[
                            { value: 'tr', label: 'Türkçe' },
                            { value: 'en', label: 'English' },
                        ]}
                        size="small"
                    />
                    <Switch checkedChildren="Light" unCheckedChildren="Dark" onClick={setTheme}/>
                    <Popover content={content} title="Title" trigger="click" placement="bottomRight">
                        <Button type="text" shape="circle"><FontAwesomeIcon icon={faBell} fontSize={16} color="var(--color-dark)"/></Button>
                    </Popover>
                    <Dropdown menu={{ items }} trigger={['click']}>
                        <Avatar className="profile-avatar" size={36} icon={<img src={avatar1} />} />
                    </Dropdown>
                </Space>
            </Col>
        </Row>
    )
}

export default Topbar;