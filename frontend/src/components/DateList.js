import React from 'react';
import Button from 'antd/lib/button'
import List from 'antd/lib/list';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const DateList = () => {

  return (
    <>
      <h2 style={{ padding: "10px" }}>Date List</h2>
      <Button>Start Analysis</Button>
      <List
        style={{ padding: "10px" }}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={item.title}
            />
          </List.Item>
        )}
      />
    </>
  )
}

export default DateList
