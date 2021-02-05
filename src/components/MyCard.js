import React, { useState } from "react";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Form, Input, Select } from "antd";
import { Modal, Button } from "antd";
import { FormInstance } from "antd/lib/form";
const { Meta } = Card;

function MyCard(props) {
  const formRef = React.createRef();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    props.setDescription(formRef.current.getFieldValue("quantity"));
    setIsModalVisible(false);
  };
  const onFinish = (values) => {
    console.log(values);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  return (
    <Card
      style={{ width: 300, marginBottom: "1rem" }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <EditOutlined key="edit" onClick={showModal} />,
        <DeleteOutlined key="delete" onClick={() => props.deleteMe()} />,
      ]}
    >
      <Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title={props.title}
        description={props.description}
        
      />
     
      <Modal
        title={props.title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form {...layout} ref={formRef} name="control-ref" onFinish={onFinish}>
          <Form.Item
            name="quantity"
            label="Quantity"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
}

export default MyCard;
