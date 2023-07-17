import { Button, Col, Progress, Row, Space } from "antd";
import RemindersItem from "../DashboardComponents/RemindersItem";
import useWindowDimensions from "../../hooks/window-dimention";
import JobsItem from "../DashboardComponents/JobsItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Reminders = () => {

    const {width} = useWindowDimensions();

    return (
        <Row style={{marginTop: "2rem", marginRight: "1rem", marginLeft: width < 992 ? "1.5rem" : "0"}}>
            <Col span={23}>
                <p style={{fontSize: "1.2rem", fontWeight: "bold"}}>My Tasks</p>
                <JobsItem color={"orange"} text={"Yapılıyor"} />
                <JobsItem color={"success"} text={"Tamamlandı"} />
                <JobsItem color={"success"} text={"Tamamlandı"} />
                <JobsItem color={"error"} text={"İptal Edildi"} />
                <Button style={{marginTop: "1rem"}} type="text" block> <Space><FontAwesomeIcon icon={faPlus} /> Add Job</Space> </Button>
            </Col>
            <Col span={23} style={{marginTop: "2rem"}}>
                <p style={{fontSize: "1.2rem", fontWeight: "bold"}}>Reminders</p>
                <RemindersItem/>
                <RemindersItem/>
                <RemindersItem/>
                <Button style={{marginTop: "1rem"}} type="text" block> <Space><FontAwesomeIcon icon={faPlus} /> Add Reminder</Space> </Button>
            </Col>
        </Row>
    )
}

export default Reminders;