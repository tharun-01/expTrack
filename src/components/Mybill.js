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
  const [sum, setsum] = useState(0)
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
  let totol=0
  useEffect(() => {
    Axios.post("http://localhost:3001/api/bill", { date: props.currDay }).then(
      (response) => {
        setMyCards(response.data);
        let totol=0
        myCards.map((value,index)=>{
            totol+=value.price;
        })
        setsum(totol)
        console.log(sum)
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
          Open Modal
        </Button>
        <Modal
          title="SURPRISE"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          style={{width:"500px"}}
        
        >
            <div >

          <h3>Totol amount spent in this month is</h3>
          <p>{sum}</p>
            </div>
        </Modal>
      </div>
    </div>
  );
}

export default Mybill;
