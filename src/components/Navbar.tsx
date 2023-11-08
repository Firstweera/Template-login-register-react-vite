import { UnorderedListOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, Space } from "antd";
import { useContext } from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

const buttonStyles =
  "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
const linkStyles =
  "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

const menuItems = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Contact", link: "/contact" },
];

export const Navbar = () => {
  const { user } = useContext(UserContext);

  const items: MenuProps["items"] = [
    {
      label: <a href="/">Home</a>,
      key: "0",
    },
    {
      label: <a href="/about">About</a>,
      key: "1",
    },
    {
      label: <a href="/contact">Contact</a>,
      key: "2",
    },
  ];

  return (
    <nav className="bg-slate-100 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img
            src="https://img.icons8.com/?size=160&id=yaQcME5IaqMl&format=png"
            className="h-8 mr-3"
            alt="web-Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hidden sm:block">
            Social-Media
          </span>
        </a>
        <div className="flex space-x-2 items-center md:order-2">
          {user?.isAuthen ? (
            <></>
          ) : (
            <>
              <Link to="/login">
                <button
                  type="button"
                  className="hover:text-gray-500 hover:underline"
                >
                  Sign in
                </button>
              </Link>
              <Link to="/register">
                <button type="button" className={buttonStyles}>
                  Sign up
                </button>
              </Link>
            </>
          )}
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 bg-slate-200 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <UnorderedListOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.link} className={linkStyles} aria-current="page">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
