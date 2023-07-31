import { Col, Dropdown, MenuProps, Modal, Progress, Row, Typography, message } from "antd";
import DashboardLineChart from "../components/Charts/DashboardLineChart";
import DashboardPieChart from "../components/Charts/DashboardPieChart";
import RecentPremiumCustomersTable from "../components/DashboardComponents/RecentPremimumCustomersTable";
import useWindowDimensions from "../hooks/window-dimention";
import DashboardBarChart from "../components/Charts/DashboardBarChart";
import DashboardAreaChart from "../components/Charts/DashboardAreaChart";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserTable from "../components/UsersComponents/UserTable";

const { Paragraph, Title } = Typography;

const items: MenuProps['items'] = [
    {
        label: 'Tabloyu İncele',
        key: '1',
        icon: <FontAwesomeIcon icon={faMagnifyingGlass} />
    },
];


const Dashboard = () => {

    const [open, setOpen] = useState(false);
    const { t } = useTranslation();
    const { width, height } = useWindowDimensions();

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        setOpen(true);
    };

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };


    return (
        <><Row justify={'space-around'} style={{ padding: "1rem" }}>
            <Col xxl={5} xl={11} xs={23} className="card">
                <Row>
                    <Col span={12}>
                        <span>{t("DASHBOARD.CARDS.TOTAL_USER")}</span>
                        <h2>45,678</h2>
                    </Col>
                    <Col span={12} style={{ display: "flex", justifyContent: "end" }}>
                        <Progress type="dashboard" percent={82} size={84} format={(percent) => `${percent}%`} />
                    </Col>
                </Row>
            </Col>
            <Col xxl={5} xl={11} xs={23} className="card">
                <Row>
                    <Col span={12}>
                        <span>Total Amount</span>
                        <h2>65,234₺</h2>
                    </Col>
                    <Col span={12} style={{ display: "flex", justifyContent: "end" }}>
                        <Progress type="dashboard" percent={20} size={84} format={(percent) => `-${percent}%`} status="exception" />
                    </Col>
                </Row>
            </Col>
            <Col xxl={5} xl={11} xs={23} className="card">
                <Row>
                    <Col span={12}>
                        <span>Total Amount</span>
                        <h2>65,234₺</h2>
                    </Col>
                    <Col span={12} style={{ display: "flex", justifyContent: "end" }}>
                        <Progress type="dashboard" percent={40} size={84} format={(percent) => `+${percent}%`} status="success" />
                    </Col>
                </Row>
            </Col>
            <Col xxl={5} xl={11} xs={23} className="card">
                <Row>
                    <Col span={12}>
                        <span>Total Amount</span>
                        <h2>65,234₺</h2>
                    </Col>
                    <Col span={12} style={{ display: "flex", justifyContent: "end" }}>
                        <Progress type="dashboard" percent={40} size={84} format={(percent) => `+${percent}%`} status="success" />
                    </Col>
                </Row>
            </Col>
        </Row>
            <Row style={{ padding: "2rem" }} justify={'space-between'}>
                <Col xs={24} xl={15} className="card">
                    <span style={{ fontSize: "1rem" }}>Aylara Göre Erişim Miktarı</span>
                    <DashboardLineChart />
                </Col>
                <Col xs={24} xl={8} className="card">
                    <DashboardPieChart />
                </Col>
            </Row>
            <Row style={{ padding: "2rem" }} justify={'space-between'}>
                <Col xs={24} xl={12} className="card">
                    <span style={{ fontSize: "1rem" }}>Aylara Göre Yeni Kullanıcı Sayısı</span>
                    <DashboardAreaChart />
                </Col>
                <Col xs={24} xl={11} className="card">
                    <span style={{ fontSize: "1rem" }}>Aylara Göre Veritabanı İşlemleri</span>
                    <DashboardBarChart />
                </Col>
            </Row>
            <Row style={{ padding: "1rem 2rem" }}>
                <Dropdown menu={menuProps} trigger={["contextMenu"]}>
                    <Col span={24} className={width > 576 ? "card" : ""} style={{ padding: "1.5rem" }}>
                        <h3>Recent Premimum Customers</h3>
                        <br />
                        <UserTable scrollY={height/2} />
                    </Col>
                </Dropdown>
            </Row>
            {/* MODAL */}
            <Modal
                title="Modal 1000px width"
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={'100%'}
            >
                <UserTable scrollY={height/1.5} />
            </Modal>
        </>
    )
}

export default Dashboard;