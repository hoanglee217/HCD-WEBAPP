import {
  DashboardOutlined,
  FileOutlined,
  FolderOpenOutlined,
  MessageOutlined,
  SettingOutlined,
  TagsOutlined,
} from "@ant-design/icons";
import "./SiderCustom.scss";
import { images } from "../../constants";
import { useTranslation } from "react-i18next";
import ThemeContext from "../../store/themeContext";
import { Link, useLocation } from "react-router-dom";
import { Menu, Layout, MenuProps, Space, Flex } from "antd";
import { useContext, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useAuth } from "../../store/AuthContext";

interface SiderProps {
  collapsed: boolean;
}
type MenuItem = Required<MenuProps>["items"][number];

interface LevelKeysProps {
  key?: string;
  children?: LevelKeysProps[];
}

const getLevelKeys = (items1: LevelKeysProps[]) => {
  const key: Record<string, number> = {};
  const func = (items2: LevelKeysProps[], level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

const getParentKey = (
  items1: LevelKeysProps[],
  childKey: string
): string | null => {
  for (const item of items1) {
    if (item.children?.some((child) => child.key === childKey)) {
      return item.key || null; // Return the parent key
    }

    // Recursively check in deeper levels
    if (item.children) {
      const found = getParentKey(item.children, childKey);
      if (found) return found;
    }
  }
  return null; // Return null if no parent is found
};

const SiderCustom = ({ collapsed }: SiderProps) => {
  const location = useLocation();
  const { t } = useTranslation();
  const { Sider } = Layout;
  const themeCtx = useContext(ThemeContext);
  let theme = themeCtx.theme;
  const { logout } = useAuth();
  const currentPath = location.pathname.split("/").filter(Boolean);
  const [stateOpenKeys, setStateOpenKeys] = useState<string[]>();
  const [selectedKey, setSelectedKey] = useState(
    currentPath.length > 0 ? currentPath : ["dashboard"]
  );

  const items: MenuItem[] = [
    {
      key: "dashboard",
      icon: <DashboardOutlined />,
      label: <Link to="/">{t("Dashboard")}</Link>,
    },
    {
      key: "categories",
      icon: <FolderOpenOutlined />,
      label: <Link to="/categories">{t("CATEGORIES")}</Link>,
    },
    {
      key: "blog-group",
      icon: <FileOutlined />,
      label: t("BLOGS"),
      children: [
        {
          key: "blogs",
          label: <Link to="/blogs">{t("BLOG_ALL")}</Link>,
        },
        {
          key: "add-blog",
          label: <Link to="/add-blog">{t("BLOG_CREATE")}</Link>,
        },
      ],
    },
    {
      key: "comments",
      icon: <MessageOutlined />,
      label: <Link to="/comments">{t("COMMENTS")}</Link>,
    },
    {
      key: "tags",
      icon: <TagsOutlined />,
      label: <Link to="/tags">{t("TAGS")}</Link>,
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: <Link to="/settings">{t("SETTINGS")}</Link>,
    },
  ];

  const levelKeys = getLevelKeys(items as LevelKeysProps[]);

  useEffect(() => {
    const parentKey = getParentKey(items as LevelKeysProps[], selectedKey[0]);
    if (parentKey) {
      setStateOpenKeys([parentKey]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logoutHandler = async () => {
    await logout();
  };

  const onSelectChange = (value: string) => {
    const selected = items.filter((o) => o?.key === value);
    if (selected.length > 0) {
      setStateOpenKeys([]);
    }
    setSelectedKey([value]);
  };

  const onOpenChange: MenuProps["onOpenChange"] = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys?.indexOf(key) === -1
    );

    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <Sider
      theme={theme}
      trigger={
        <Link to="/login" onClick={logoutHandler} className="trigger-sider">
          <Flex gap={12} align="center" justify="center">
            <Icon icon="tabler:logout" />
            {!collapsed && <div>{t("logout")}</div>}
          </Flex>
        </Link>
      }
      collapsible
      collapsed={collapsed}
    >
      {!collapsed ? (
        <Space>
          <div className={`logo ${theme === "dark" ? "logo_dark" : ""}`}>
            <img
              src={theme === "dark" ? images.logoLight : images.logoDark}
              alt="logo"
            />
          </div>
        </Space>
      ) : (
        <img src={images.logo} alt="logo" />
      )}
      <Menu
        theme={theme}
        mode="inline"
        openKeys={stateOpenKeys}
        selectedKeys={selectedKey}
        onOpenChange={onOpenChange}
        onSelect={(o) => {
          onSelectChange(o.key);
        }}
        items={items}
      />
    </Sider>
  );
};

export default SiderCustom;
