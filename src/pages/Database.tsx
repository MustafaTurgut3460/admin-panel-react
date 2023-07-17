import { Col, Progress, Row } from "antd";
import DashboardLineChart from "../components/Charts/DashboardLineChart";
import DashboardPieChart from "../components/Charts/DashboardPieChart";
import DashboardAreaChart from "../components/Charts/DashboardAreaChart";
import DashboardBarChart from "../components/Charts/DashboardBarChart";
import DatabaseAreaChart from "../components/DatabaseComponents/DatabaseAreaChart";
import DatabasePieChart from "../components/DatabaseComponents/DatabasePieChart";
import DatabaseBarChart from "../components/DatabaseComponents/DatabaseBarChart";
import DatabaseLineChart from "../components/DatabaseComponents/DatabaseLineChart";

const Database = () => {

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
                        <span>Yazılan Belge</span>
                        <h2>15,234</h2>
                    </Col>
                    <Col span={12} style={{ display: "flex", justifyContent: "end" }}>
                        <Progress type="dashboard" percent={65} size={84} format={(percent) => `${percent}%`} status="exception" />
                    </Col>
                </Row>
            </Col>
            <Col xl={7} xs={23} className="card">
                <Row>
                    <Col span={12}>
                        <span>Silinen Belge</span>
                        <h2>5,234</h2>
                    </Col>
                    <Col span={12} style={{ display: "flex", justifyContent: "end" }}>
                        <Progress type="dashboard" percent={40} size={84} format={(percent) => `${percent}%`} status="success" />
                    </Col>
                </Row>
            </Col>
        </Row>
            <Row style={{ padding: "2rem" }} justify={'space-between'}>
                <Col xs={24} xl={12} className="card" style={{ paddingTop: "1.5rem" }}>
                    <span style={{ fontSize: "1rem" }}>Aylara Göre Yeni Kullanıcılar</span>
                    <DatabaseAreaChart />
                </Col>
                <Col xs={24} xl={11} className="card" style={{ paddingTop: "1.5rem" }}>
                    <span style={{ fontSize: "1rem" }}>Aylara Göre Kazanç Miktarı</span>
                    <DatabaseLineChart />
                </Col>
            </Row>
            <Row style={{ padding: "2rem" }} justify={'space-between'}>
                <Col xs={24} xl={16} className="card" style={{ paddingTop: "1.5rem" }}>
                    <span style={{ fontSize: "1rem" }}>Aylara Göre Okuma/Yazma/Silme İşlemleri</span>
                    <DatabaseBarChart />
                </Col>
                <Col xs={24} xl={7} className="card" style={{ paddingTop: "1.5rem" }}>
                    <span style={{ fontSize: "1rem" }}>Kullanıcı Tipi Dağılımı</span>
                    <DatabasePieChart />
                </Col>
            </Row>
        </>
    )
}

export default Database;