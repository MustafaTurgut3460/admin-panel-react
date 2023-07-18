import { Dispatch, SetStateAction, useState } from "react";
import TaskItem, { Task } from "./TaskItem";
import { Avatar, Badge, Button, Col, Row, Tag } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { v4 } from "uuid";
import { useDrop } from "react-dnd";


export enum TaskTypes {
    TODO,
    PROGRESS,
    COMPLATED
}

export interface TaskSectionProps {
    title: string,
    type: TaskTypes
    tasks: Task[] | undefined,
    setTasks: Dispatch<SetStateAction<Task[]>>
}

const tagColors: Map<TaskTypes, string> = new Map([
    [TaskTypes.TODO, "gold"],
    [TaskTypes.PROGRESS, "geekblue"],
    [TaskTypes.COMPLATED, "green"],
])

const TaskSection: React.FC<TaskSectionProps> = ({ title, tasks, setTasks, type }) => {

    const [{isOver}, drop] = useDrop(() => ({
        accept: "task",
        drop: (item: {id: string}) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    console.log(isOver)

    const addItemToSection = (id: string) => {        
        setTasks((prev) => {
            const mTasks = prev.map((item) => {
                if(item.id === id){
                    console.log("item id eşleşti");
                    return {...item, type: type}
                }

                return item;
            })

            return mTasks;
        })

        console.log(tasks);
        
    }

    return (
        <div ref={drop}>
            <Row>
                <Col span={24}>
                    <Row justify={'space-between'} style={{borderBottom: isOver ? `2px solid grey` : "", paddingBottom: "5px"}}>
                        <Col span={22}>
                            <Badge count={0} size="small" color={tagColors.get(type)}>
                                <Tag color={tagColors.get(type)} style={{ marginTop: "5px" }}>{title}</Tag>
                            </Badge>
                        </Col>
                        <Col span={2}>
                            <Button type="text" shape="circle">
                                <FontAwesomeIcon icon={faEllipsisVertical} rotation={90} color="grey" />
                            </Button>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "1rem" }}>
                        <Col span={24}>
                            {tasks !== undefined ? (
                                tasks.map((task) => (
                                    task.type === type ?
                                    <TaskItem task={task} key={task.id} /> : <div></div>
                                ))
                            ) : (
                                <div></div>
                            )}

                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default TaskSection;