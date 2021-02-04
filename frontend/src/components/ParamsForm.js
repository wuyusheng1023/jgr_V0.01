import React, { useState } from 'react';
import Form from 'antd/lib/form'
import Button from 'antd/lib/button'
import Radio from 'antd/lib/radio'
import Select from 'antd/lib/select'
import DatePicker from 'antd/lib/date-picker'

const { RangePicker } = DatePicker;

const ParamForm = () => {
  const [componentSize, setComponentSize] = useState('default');
  const [formLayout] = useState('horizontal');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const buttonItemLayout =
    formLayout === 'horizontal' ?
      {
        wrapperCol: {
          span: 14,
          offset: 4,
        },
      } :
      null;

  const onFinish = (data) => {
    console.log(data)
  }

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}

        onFinish={onFinish}
      >
        <Form.Item label="Station" name="station">
          <Radio.Group>
            <Radio.Button value="VAR">SMEAR I Värriö forest</Radio.Button>
            <Radio.Button value="HYY">SMEAR II Hyytiälä forest</Radio.Button>
            <Radio.Button value="KUM">SMEAR III Helsinki Kumpula</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="To" name="range">
          <RangePicker />
        </Form.Item>

        <Form.Item label="Processing Level" name="quality">
          <Select>
            <Select.Option value="ANY">ANY</Select.Option>
            <Select.Option value="CHECKED">CHECKED</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Averaging" name="interval">
          <Select>
            <Select.Option value="1 min">1 min</Select.Option>
            <Select.Option value="30 min">30 min</Select.Option>
            <Select.Option value="1 hour">1 hour</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Averaging Type" name="aggregation">
          <Select>
            <Select.Option value="NONE">NONE</Select.Option>
            <Select.Option value="ARITHMETIC">ARITHMETIC</Select.Option>
            <Select.Option value="GEOMETRIC">GEOMETRIC</Select.Option>
            <Select.Option value="SUN">SUN</Select.Option>
            <Select.Option value="MEDIAN">MEDIAN</Select.Option>
            <Select.Option value="MIN">MIN</Select.Option>
            <Select.Option value="MAX">MAX</Select.Option>
            <Select.Option value="CIRCULAR">CIRCULAR</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item {...buttonItemLayout}>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
};


export default ParamForm
