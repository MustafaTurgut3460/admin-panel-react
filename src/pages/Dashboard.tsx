import { Col, Progress, Row, Typography } from "antd";
import DashboardLineChart from "../components/Charts/DashboardLineChart";
import DashboardPieChart from "../components/Charts/DashboardPieChart";
import RecentPremiumCustomersTable from "../components/DashboardComponents/RecentPremimumCustomersTable";

const { Paragraph, Title } = Typography;

const Dashboard = () => {

    return (
        <><Row justify={'space-around'} style={{ padding: "1rem" }}>
            <Col xl={7} xs={23} className="card">
                <Row>
                    <Col span={12}>
                        <span>Okunan Belge</span>
                        <h2>45,678</h2>
                    </Col>
                    <Col span={12} style={{ display: "flex", justifyContent: "end" }}>
                        <Progress type="dashboard" percent={82} size={84} format={(percent) => `${percent}%`} />
                    </Col>
                </Row>
            </Col>
            <Col xl={7} xs={23} className="card">
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
            <Col xl={7} xs={23} className="card">
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
            <Col span={15} className="card">
                <span style={{fontSize: "1rem"}}>Aylara Göre Erişim Miktarı</span>
                <DashboardLineChart />
            </Col>
            <Col span={8} className="card">
                <DashboardPieChart />
            </Col>
        </Row>
        <Row style={{padding: "1rem 2rem"}}>
            <Col span={24} className="card" style={{padding: "1.5rem"}}>
                <h3>Recent Premimum Customers</h3>
                <br />
                <RecentPremiumCustomersTable/>
            </Col>
        </Row>
        </>
    )
}

export default Dashboard;