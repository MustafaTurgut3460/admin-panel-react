import React, { useRef, useState } from 'react';
import { Button, Dropdown, Input, InputRef, MenuProps, Space, Table, Tag, Tooltip } from 'antd';
import type { ColumnType, ColumnsType } from 'antd/es/table';
import useWindowDimensions from '../../hooks/window-dimention';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FilterConfirmProps } from 'antd/es/table/interface';
import { SearchOutlined } from '@ant-design/icons';
import BigModal from '../BigModal';

interface DataType {
    key: number;
    name: string;
    age: number;
    classCount: number;
    tag: string;
    column1: string,
    column2: string,
    column3: string,
    column4: string,
    column5: string,
    column6: string,
}


const data: DataType[] = [];

for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        age: 33,
        classCount: 5,
        name: i % 2 == 0 ? `Burası uzun bir yazı olacak tabloda nasıl yer kapladığını görmek ve test etmek için uzatıyorum. Burası uzun bir yazı olacak tabloda nasıl yer kapladığını görmek ve test etmek için uzatıyorum. ` : `Burası Kısa Yazı`,
        tag: "Normal",
        column1: "Deneme",
        column2: "Deneme",
        column3: "Deneme",
        column4: "Deneme",
        column5: "Deneme",
        column6: "Deneme",
    })
}

const items: MenuProps['items'] = [
    {
        label: 'Tabloyu İncele',
        key: '1',
        icon: <FontAwesomeIcon icon={faMagnifyingGlass} />
    },
];

interface UserTableProps{
    scrollY: number
}


const UserTable: React.FC<UserTableProps> = ({scrollY}) => {

    const { width, height } = useWindowDimensions();

    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: 200,
            render: (_, { name }) => {
                return (
                    name.length > 20
                        ?
                        <Tooltip title={name}>
                            {name.slice(0, 20)}...
                        </Tooltip>
                        :
                        name
                )
            }
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            width: 150
        },
        {
            title: 'Class Count',
            dataIndex: 'classCount',
            key: 'classCount',
            width: 150
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
            },
            width: 200
        },
        {
            title: "Column 1",
            dataIndex: "column1",
            key: "column1",
            width: 200
        },
        {
            title: "Column 2",
            dataIndex: "column2",
            key: "column2",
            width: 200
        },
        {
            title: "Column 3",
            dataIndex: "column3",
            key: "column3",
            width: 200
        },
        {
            title: "Column 4",
            dataIndex: "column4",
            key: "column4",
            width: 200
        },
        {
            title: "Column 5",
            dataIndex: "column5",
            key: "column5",
            width: 200
        },
        {
            title: "Column 6",
            dataIndex: "column6",
            key: "column6",
            width: 200
        },
        {
            title: 'Action',
            key: 'action',
            width: 200,
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
    return (
        <Table columns={columns} dataSource={data} scroll={{ y: scrollY, x: width / 3 }} style={{ backgroundColor: width > 576 ? "var(--color-white)" : "", marginTop: "1rem" }} />
    )
}

export default UserTable;