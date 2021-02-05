import { Form, Input, InputNumber, Button } from "antd";
import { DatePicker, Space } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Axios from "axios";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const dateFormat = "YYYY/MM/DD";
const monthFormat = "YYYY/MM";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

function Add(props) {
    
  const [name, setname] = useState("");
  const [quantity, setquantity] = useState(0);
  
  const [price, setprice] = useState(0);
  
  // const [quantity, setquantity] = useState(0);
  const insertindb = () => {
    Axios.post("http://localhost:3001/api/insert", {
      name: name,
      quantity: quantity,
      price: price,
    
      startdate:props.currDay,
    });
        
    
  };

  function onChange(value){
      setquantity(value)
  }
  function onChangep(value){
      setprice(value)
  }
  
  return (
    <Form
      {...layout}
      name="nest-messages"
      validateMessages={validateMessages}
      style={{
        marginTop: "50px",
        marginLeft: "0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Form.Item
        name={["user", "name"]}
        label="Item Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
      </Form.Item>

      <Form.Item
        style={{ alignItems: "center" }}
        name={["qantity:"]}
        label="quantity: "
        rules={[
          {
            type: "number",
            min: 1,
            max: 10000,
            required: true,
          },
        ]}
      >
        <InputNumber
          style={{ margin: "10px" }}
          onChange={onChange}
        />
      </Form.Item>

      <Form.Item
        style={{ alignItems: "center" }}
        name={["price"]}
        label="price: "
        rules={[
          {
            type: "number",
            min: 1,
            max: Infinity,
            required: true,
          },
        ]}
      >
        <InputNumber
          style={{ margin: "10px" }}
          onChange={onChangep}
        />
      </Form.Item>

      {/* <Form.Item
        name={["till date"]}
        label="till date"
        rules={[
          {
            type: "date",

            required: true,
          },
        ]}
      >
        <input type="date" onChange={(e)=>{
            settilldate(e.target.value)
        }}/>
      </Form.Item> */}
      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={insertindb}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Add;
