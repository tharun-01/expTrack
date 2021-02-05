import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Table, Tag, Space } from "antd";
function Mybill(props) {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },

    {
      title: "price",
      key: "price",
      dataIndex:"price"
    },
  ];
 
  const [myCards, setMyCards] = useState([]);
  
    useEffect(() => {
        Axios.post("http://localhost:3001/api/bill", { date: props.currDay}).then(
            (response) => {
                setMyCards(response.data);
                
            }
            );
        }, [props.currDay]);
        return (
            <div>
      <Table columns={columns} dataSource={myCards} />
    </div>
  );
}

export default Mybill;
