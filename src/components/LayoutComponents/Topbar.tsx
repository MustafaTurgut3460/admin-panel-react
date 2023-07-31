import { BellOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Dropdown, MenuProps, Modal, Popover, Row, Select, Skeleton, Space, Switch } from "antd";
import Search from "antd/es/input/Search";
import avatar1 from "../../assets/images/avatar1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { setThemeToLocalStorage } from "../../services/local-storage-service";
import { useDispatch, useSelector } from "react-redux";
import { ThemeState, Themes, setTheme } from "../../actions/themeAction";
import { useState } from "react";
import Settings from "../../pages/Settings";

const items: MenuProps['items'] = [
    {
        label: <span>Settings</span>,
        key: '0',
        icon: <FontAwesomeIcon icon={faGear} />
    },
    {
        label: <Link to={'/login'}>Logout</Link>,
        key: '1',
        icon: <FontAwesomeIcon icon={faRightFromBracket} />
    },
];

const Topbar = () => {

    const theme = useSelector((state: any) => state.theme);
    const dispatch = useDispatch()

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [loading, setLoading] = useState(true);

    const showModal = () => {
        setIsModalOpen(true);
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        setLoading(true)
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setLoading(true)
    };

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        if (e.key == '0') {
            showModal()
        }
    };

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    const content = (
        <div>
            <p>Content</p>
            <p>Content</p>
        </div>
    );

    const configureTheme = () => {
        setThemeToLocalStorage(theme.theme);
        dispatch(setTheme(theme.theme === Themes.Dark ? Themes.Light : Themes.Dark))
        document.body.classList.toggle("light-mode-variables")
    }


    return (
        <Row style={{ padding: "1rem", marginRight: "1rem"}} justify={'end'}>
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
                    <Switch checkedChildren="Light" unCheckedChildren="Dark" onClick={configureTheme} />
                    <Popover content={content} title="Title" trigger="click" placement="bottomRight">
                        <Button type="text" shape="circle"><FontAwesomeIcon icon={faBell} fontSize={16} color="var(--color-dark)" /></Button>
                    </Popover>
                    <Dropdown menu={menuProps} trigger={['click']}>
                        <Avatar className="profile-avatar" size={36} icon={<img src={avatar1} />} />
                    </Dropdown>
                </Space>
            </Col>

            {/* SETTINGS MODAL */}
            <Modal title="Profile Settings" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Kaydet" width={"40%"}>
                {
                    loading ?
                        <Skeleton active>
                            <Settings />
                        </Skeleton>
                        :
                        <Settings />
                }

            </Modal>
        </Row>
    )
}

export default Topbar;