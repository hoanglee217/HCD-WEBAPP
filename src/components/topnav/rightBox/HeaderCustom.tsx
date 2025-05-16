import ThemeBox from "./themeBox/ThemeBox";
import LangBox from "./langBox/LangBox";
import Profile from "./profile/Profile";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "./HeaderCustom.scss";
import { Flex } from "antd";
import SearchBox from "../searchBox/SearchBox";
import ButtonCustom from "../../UI/button/ButtonCustom";

interface HeaderCustomProps {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}
function HeaderCustom({ collapsed, setCollapsed }: HeaderCustomProps) {
  return (
    <Flex align="center" justify="space-between">
      <ButtonCustom
        type="text"
        customVariant="ghost"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
      <SearchBox/>
      <Flex align="center" gap={24} style={{padding: '0 24px'}}>
        <ThemeBox />
        <LangBox />
        <Profile />
        </Flex>
    </Flex>
  );
}

export default HeaderCustom;
