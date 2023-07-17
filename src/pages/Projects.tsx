import { Col, Row } from "antd";
import ProjectItem from "../components/ProjectsComponents/ProjectItem";

const Projects = () => {

    return (
        <Row>
            <Col span={23} style={{ marginLeft: "2rem" }}>
                <ProjectItem status="active" type={"processing"} text={"in progress"} percent={60}/>
                <ProjectItem status="success" type={"success"} text={"complated"} percent={100}/>
                <ProjectItem status="exception" percent={30} type={"error"} text={"closed"} />
                <ProjectItem status="normal" percent={0} type={"default"} text={"not started"} />
                <ProjectItem status="active" percent={34} type={"processing"} text={"in progress"} />
                <ProjectItem status="success" percent={100} type={"success"} text={"complated"} />
                <ProjectItem status="exception" percent={50} type={"error"} text={"closed"} />
            </Col>
        </Row>
    )
}

export default Projects;