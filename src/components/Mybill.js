import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Modal, Button } from "antd";
import { Table, Tag, Space } from "antd";
function Mybill(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const [sum, setsum] = useState(0);
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
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
      dataIndex: "price",
    },
  ];

  const [myCards, setMyCards] = useState([]);
  const [monthsum, setmonthsum] = useState(0)
  let totol = 0;
  useEffect(() => {
    console.log("use effect called", props.currDay);
    Axios.post("http://localhost:3001/api/bill", { date: props.currDay }).then(
      (response) => {
        setMyCards(response.data);
        let totol = 0;
        response.data.map((value, index) => {
          totol += value.price;
        });
        setsum(totol);

        {
        }
      }
    );
    Axios.post("http://localhost:3001/api/monthbill", { date: props.currDay }).then(
      (response) => {
        
        let totosl = 0;
        response.data.map((value, index) => {
          totosl += value.price;
        });
        setmonthsum(totosl);

        {
        }
      }
    );
  }, [props.currDay]);





  return (
    <div>
      <Table columns={columns} dataSource={myCards} />
      <div>
        <Button type="primary" onClick={showModal}>
          Today's bill
        </Button>
        <Modal
          title="SURPRISE"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          style={{ width: "500px" }}
        >
          <div>
            <h3>Totol amount spent in this day was</h3>
            <p>{sum}</p>
            <h3>Totol amout spent in this month was</h3>
            <p>{monthsum}</p>
            {console.log(sum,monthsum, "hey")}
          </div>
        </Modal>
      </div>
     
    </div>
  );
}

export default Mybill;
