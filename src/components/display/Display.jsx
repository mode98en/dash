import React, { useState } from "react";
import { Button, Modal, Image, Table, Space } from "antd";
import "./Display.css";
import Delete from "../delete/Delete";
import Edit from "../edit/Edit";

function Get({ products }) {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleOk = () => {
    setSelectedProductId(null);
  };
  const handleCancel = () => {
    setSelectedProductId(null);
  };
  const handleEditSuccess = () => {
    alert("Product edited successfully");
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
         
          <Modal
            title="Product Details"
            open={selectedProductId === record.id}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <h1>{record.title}</h1>
            <p>{record.description}</p>
            <b><h2>{record.price}$</h2></b>
          </Modal>
          <Edit id={record.id} onEdit={handleEditSuccess} products={products} />
          <Delete id={record.id} />
        </Space>
      ),
    },
  ];
  const columns2 = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          
          <Modal
            title="Product Details"
            open={selectedProductId === record.id}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <h1>{record.title}</h1>
            
            <p>{record.description}</p>
            <b><h2>{record.price}$</h2></b>
          </Modal>
          <Edit id={record.id} onEdit={handleEditSuccess} products={products} />
          <Delete id={record.id}  />
        </Space>
      ),
    },
  ];
  return (
    <div>
      <div className="table1">
        <Table
          columns={columns}
          dataSource={products}
          className="customTable"
         
        />
      </div>
      <div className="table2">
        <Table
          columns={columns2}
          dataSource={products}
          className="customTable"
         
          style={{ width: "200px" }}
        />
      </div>
      <br />
      
    </div>
  );
}

export default Get;
