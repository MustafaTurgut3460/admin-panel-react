import React from 'react';
import { Button, Space, Table, Tag, Tooltip } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import useWindowDimensions from '../../hooks/window-dimention';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faTrash } from '@fortawesome/free-solid-svg-icons';

interface DataType {
    key: string;
    name: string;
    age: number;
    classCount: number;
    tag: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Class Count',
        dataIndex: 'classCount',
        key: 'classCount',
    },
    {
        title: 'Member Type',
        key: 'tag',
        dataIndex: 'tag',
        render: (_, { tag }) => {
            return (
                <Tag color={tag == "Premium" ? "green" : "geekblue"} key={tag}>
                    {tag.toUpperCase()}
                </Tag>
            );
        }
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Tooltip title="See Details">
                    <Button type='primary' shape='circle'><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
                </Tooltip>
                <Tooltip title="Remove">
                    <Button type='primary' shape='circle' danger><FontAwesomeIcon icon={faTrash} /></Button>
                </Tooltip>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: Date.now().toString(),
        name: 'John Brown',
        age: 32,
        classCount: 12,
        tag: 'Premium',
    },
    {
        key: Date.now().toString(),
        name: 'Jim Green',
        age: 42,
        classCount: 10,
        tag: 'Normal',
    },
    {
        key: Date.now().toString(),
        name: 'Joe Black',
        age: 32,
        classCount: 5,
        tag: 'Normal',
    },
    {
        key: Date.now().toString(),
        name: 'John Brown',
        age: 32,
        classCount: 3,
        tag: 'Normal',
    },
    {
        key: Date.now().toString(),
        name: 'Jim Green',
        age: 42,
        classCount: 8,
        tag: 'Premium',
    },
    {
        key: Date.now().toString(),
        name: 'Joe Black',
        age: 32,
        classCount: 11,
        tag: 'Normal',
    },
    {
        key: Date.now().toString(),
        name: 'John Brown',
        age: 32,
        classCount: 12,
        tag: 'Premium',
    },
    {
        key: Date.now().toString(),
        name: 'Jim Green',
        age: 42,
        classCount: 10,
        tag: 'Normal',
    },
    {
        key: Date.now().toString(),
        name: 'Joe Black',
        age: 32,
        classCount: 5,
        tag: 'Normal',
    },
    {
        key: Date.now().toString(),
        name: 'John Brown',
        age: 32,
        classCount: 3,
        tag: 'Normal',
    },
    {
        key: Date.now().toString(),
        name: 'Jim Green',
        age: 42,
        classCount: 8,
        tag: 'Premium',
    },
    {
        key: Date.now().toString(),
        name: 'Joe Black',
        age: 32,
        classCount: 11,
        tag: 'Normal',
    },
];

const UserTable = () => {
    const { width } = useWindowDimensions();
    return <Table columns={columns} dataSource={data} style={{ backgroundColor: width > 576 ? "var(--color-white)" : "", marginTop: "1rem"}} />
}

export default UserTable;