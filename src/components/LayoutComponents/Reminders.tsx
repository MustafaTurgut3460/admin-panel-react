import { Col, Progress, Row } from "antd";
import RemindersItem from "../DashboardComponents/RemindersItem";
import useWindowDimensions from "../../hooks/window-dimention";
import JobsItem from "../DashboardComponents/JobsItem";

const Reminders = () => {

    const {width} = useWindowDimensions();

    return (
        <Row style={{marginTop: "2rem", marginRight: "1rem", marginLeft: width < 992 ? "1.5rem" : "0"}}>
            <Col span={23}>
                <p style={{fontSize: "1.2rem", fontWeight: "bold"}}>İşlerim</p>
                <JobsItem color={"orange"} text={"Yapılıyor"} />
                <JobsItem color={"success"} text={"Tamamlandı"} />
                <JobsItem color={"success"} text={"Tamamlandı"} />
                <JobsItem color={"error"} text={"İptal Edildi"} />
            </Col>
            <Col span={23} style={{marginTop: "2rem"}}>
                <p style={{fontSize: "1.2rem", fontWeight: "bold"}}>Hatırlatıcılar</p>
                <RemindersItem/>
                <RemindersItem/>
                <RemindersItem/>
            </Col>
        </Row>
    )
}

export default Reminders;