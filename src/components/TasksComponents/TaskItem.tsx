import { Avatar, Col, Row, Tag } from "antd";
import { TaskTypes } from "./TaskSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { useDrag } from "react-dnd";


export interface Task {
    id: string
    title: string,
    avatar: string,
    nameSurname: string,
    date: string,
    tags: string[],
    type: TaskTypes
}

interface TaskItemProps {
    task: Task
}

const tagColors: Map<string, string> = new Map([
    ["Frontend", "geekblue"],
    ["Cloud", "gold"],
    ["Backend", "purple"],
    ["Mobile", "green"]
])

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: { id: task.id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))


    return (
        <div ref={drag} style={{ marginTop: "1rem", padding: "1rem", borderRadius: "0.5rem", opacity: isDragging ? 0.4 : 1 }} className="card">
            <Row justify={'space-between'}>
                <Col>
                    <p> {task.title} </p>
                </Col>
                <Col> <Avatar src={task.avatar} size={24} /></Col>
            </Row>
            <Row style={{ marginTop: "1rem" }}>
                <Col style={{ color: "orange" }}> <FontAwesomeIcon icon={faCalendarDays} /> </Col>
                <Col style={{ color: "orange", marginLeft: "0.5rem" }}> Tomorrow </Col>
                <Col style={{ marginLeft: "2rem" }}> <FontAwesomeIcon icon={faComment} /> </Col>
                <Col style={{ marginLeft: "0.5rem" }}> 1 </Col>
            </Row>
            <Row style={{ marginTop: "1rem" }}>
                <Col>
                {
                    task.tags.map((tag) => (
                        <Tag color={tagColors.get(tag)}> {tag} </Tag> 
                    ))
                }
                </Col>
            </Row>
        </div>
    );
}

export default TaskItem;