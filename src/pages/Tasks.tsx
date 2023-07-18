import { Avatar, Button, Col, DatePicker, DatePickerProps, Dropdown, Input, MenuProps, Modal, Row, Select, Space } from "antd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TaskSection, { TaskTypes } from "../components/TasksComponents/TaskSection";
import { useState } from "react";
import { Task } from "../components/TasksComponents/TaskItem";
import { v4 } from "uuid";
import avatar from "../assets/images/avatar1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faCloud, faCode, faListCheck, faMobileAndroid, faServer, faTag, faUser } from "@fortawesome/free-solid-svg-icons";

const { Option } = Select;

const items: MenuProps['items'] = [
    {
        label: <div style={{ display: "flex", justifyContent: "left" }}><Avatar src={avatar} /> <span style={{ marginLeft: "0.5rem" }}>Mustafa Turgut</span> </div>,
        key: '0',
    },
    {
        label: <div style={{ display: "flex", justifyContent: "left" }}><Avatar src={avatar} /> <span style={{ marginLeft: "0.5rem" }}>Mustafa Turgut</span> </div>,
        key: '1',
    },
    {
        label: <div style={{ display: "flex", justifyContent: "left" }}><Avatar src={avatar} /> <span style={{ marginLeft: "0.5rem" }}>Mustafa Turgut</span> </div>,
        key: '3',
    },
];

const Tasks = () => {

    const [tasks, setTasks] = useState<Task[]>(
        [
            {
                avatar: avatar,
                date: "Tomorrow",
                id: v4(),
                nameSurname: "Mustafa Turgut",
                tags: ["Mobile"],
                title: "Mobil Tasarım",
                type: TaskTypes.TODO
            },
            {
                avatar: avatar,
                date: "Tomorrow",
                id: v4(),
                nameSurname: "Mustafa Turgut",
                tags: ["Mobile"],
                title: "Mobil Tasarım",
                type: TaskTypes.PROGRESS
            },
            {
                avatar: avatar,
                date: "Tomorrow",
                id: v4(),
                nameSurname: "Mustafa Turgut",
                tags: ["Mobile"],
                title: "Mobil Tasarım",
                type: TaskTypes.COMPLATED
            }
        ]
    )

    // form hooks
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [tags, setTags] = useState<string[]>([]);
    const [type, setType] = useState(TaskTypes.TODO);

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(dateString);
        setDate(dateString)
    };

    const createTask = () => {
        showModal()
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        const task: Task = {
            avatar: avatar,
            nameSurname: "Mustafa Turgut",
            date: date,
            id: v4(),
            tags: tags,
            title: title,
            type: type
        }
        tasks.push(task);
        setTasks(tasks)
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <Row style={{ marginLeft: "2rem" }}>
                <Col span={23} style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "1.5rem" }}>Tasks</span>
                    <Button type="primary" onClick={createTask}>Create Task</Button>
                </Col>
                <Col span={23}>
                    <Row justify={'space-between'} style={{ marginTop: "2rem" }}>
                        <Col span={7} style={{ backgroundColor: "rgb(255, 215, 0, 0.05)", borderRadius: "0.5rem", padding: "1rem" }}>
                            <TaskSection tasks={tasks} setTasks={setTasks} title="Todo" type={TaskTypes.TODO} />
                        </Col>
                        <Col span={7} style={{ backgroundColor: "rgb(82, 115, 224, 0.05)", borderRadius: "0.5rem", padding: "1rem" }}>
                            <TaskSection tasks={tasks} setTasks={setTasks} title="In Progress" type={TaskTypes.PROGRESS} />
                        </Col>
                        <Col span={7} style={{ backgroundColor: "rgb(106, 190, 57, 0.05)", borderRadius: "0.5rem", padding: "1rem" }}>
                            <TaskSection tasks={tasks} setTasks={setTasks} title="Complated" type={TaskTypes.COMPLATED} />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Modal title="Create A New Task" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Create">
                <div style={{ display: "flex", alignItems: "center", marginBottom: "5px", marginTop: "10px" }}>
                    <FontAwesomeIcon icon={faListCheck} />
                    <span style={{ marginLeft: "10px" }}>Task Title</span>
                </div>
                <Input size="middle" style={{ width: "50%" }} placeholder="Task Title" value={title} onChange={(e) => {
                    setTitle(e.currentTarget.value)
                }} />
                <br />
                <div style={{ display: "flex", alignItems: "center", marginBottom: "5px", marginTop: "10px" }}>
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <span style={{ marginLeft: "10px" }}>Task Last Date</span>
                </div>
                <DatePicker onChange={onChange} />
                <br />
                <div style={{ display: "flex", alignItems: "center", marginBottom: "5px", marginTop: "10px" }}>
                    <FontAwesomeIcon icon={faUser} />
                    <span style={{ marginLeft: "10px" }}>Task Person</span>
                </div>
                <Dropdown menu={{ items }} trigger={['click']}>
                    <Button> Select Person </Button>
                </Dropdown>
                <br />
                <div style={{ display: "flex", alignItems: "center", marginBottom: "5px", marginTop: "10px" }}>
                    <FontAwesomeIcon icon={faTag} />
                    <span style={{ marginLeft: "10px" }}>Task Tags</span>
                </div>
                <Select
                    mode="multiple"
                    style={{ width: '50%' }}
                    placeholder="Select Tags"
                    onChange={(value) => setTags(value)}
                    optionLabelProp="label"
                >
                    <Option value="Mobile" label="Mobile">
                        <Space>
                            <span role="img" aria-label="Mobile">
                                <FontAwesomeIcon icon={faMobileAndroid} />
                            </span>
                            Mobile
                        </Space>
                    </Option>
                    <Option value="Frontend" label="Frontend">
                        <Space>
                            <span role="img" aria-label="Frontend">
                                <FontAwesomeIcon icon={faCode} />
                            </span>
                            Frontend
                        </Space>
                    </Option>
                    <Option value="Backend" label="Backend">
                        <Space>
                            <span role="img" aria-label="Backend">
                                <FontAwesomeIcon icon={faServer} />
                            </span>
                            Backend
                        </Space>
                    </Option>
                    <Option value="Cloud" label="Cloud">
                        <Space>
                            <span role="img" aria-label="Cloud">
                                <FontAwesomeIcon icon={faCloud} />
                            </span>
                            Cloud
                        </Space>
                    </Option>
                </Select>
            </Modal>
        </DndProvider>
    )
}

export default Tasks;