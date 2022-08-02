import PropTypes from "prop-types";
import Link from "next/link";
import { Input, Menu, Row, Col } from "antd";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";
import { useCallback } from "react";
import { useRouter } from "next/router";
import useInput from "../hooks/useInput";

const AppLayout = ({ children }) => {
  const router = useRouter();
  const [searchInput, onChangeSearchInput] = useInput("");
  const { me } = useSelector((state) => state.user);

  const onSearch = useCallback(() => {
    router.push(`/hashtag/${searchInput}`);
  }, [searchInput]);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href={"/"}>
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href={"profile"}>
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search
            enterButton
            value={searchInput}
            onChange={onChangeSearchInput}
            onSearch={onSearch}
            style={{ verticalAlign: "middle" }}
          />
        </Menu.Item>
        <Menu.Item>
          <Link href={"signup"}>
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://velog.io/@walker_jung"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made By WalkerJung
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
