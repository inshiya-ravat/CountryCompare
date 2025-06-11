import { Flex, Switch, Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import { BulbOutlined, CloudOutlined } from "@ant-design/icons";
import logo from "../../../public/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Header>
      <Flex justify="space-between" align="center">
        <Flex align="center" gap={10}>
          <img src={logo} alt="logo" />
          <Typography.Title className="text" level={3}>
            Country Compare
          </Typography.Title>
        </Flex>
        <Switch
          checkedChildren={<BulbOutlined />}
          unCheckedChildren={<CloudOutlined />}
          defaultChecked
        />
      </Flex>
    </Header>
  );
};

export default Navbar;
