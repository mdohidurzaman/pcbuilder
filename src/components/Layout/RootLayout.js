import Link from "next/link";
import React from "react";

const RootLayout = ({ children }) => {
  return (
    <>
      <div className="navbar bg-gray-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Categories</a>
                <ul className="p-2 w-48">
                  <li>
                    <Link href={"/category/processor"}>CPU/Processor</Link>
                  </li>
                  <li>
                    <Link href={"/category/motherboard"}>Motherboard</Link>
                  </li>
                  <li>
                    <Link href={"/category/ram"}>RAM</Link>
                  </li>
                  <li>
                    <Link href={"/category/ups"}>Power Supply Unit</Link>
                  </li>
                  <li>
                    <Link href={"/category/storage"}>Storage Device</Link>
                  </li>
                  <li>
                    <Link href={"/category/monitor"}>Monitor</Link>
                  </li>
                  <li>
                    <Link href={"/category/others"}>Others</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Link
            href={"/"}
            className="normal-case text-3xl text-green-500 text-weight-800"
          >
            PCBAZAR
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li tabindex="0">
              <details>
                <summary>Categories</summary>
                <ul className="p-2 w-48">
                  <li>
                    <Link href={"/category/processor"}>CPU/Processor</Link>
                  </li>

                  <li>
                    <Link href={"/category/motherboard"}>Motherboard</Link>
                  </li>
                  <li>
                    <Link href={"/category/ram"}>RAM</Link>
                  </li>
                  <li>
                    <Link href={"/category/ups"}>Power Supply Unit</Link>
                  </li>
                  <li>
                    <Link href={"/category/storage"}>Storage Device</Link>
                  </li>
                  <li>
                    <Link href={"/category/monitor"}>Monitor</Link>
                  </li>
                  <li>
                    <Link href={"/category/others"}>Others</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href={"/pcbuilding"} className="btn bg-green-400">
            PC Builder
          </Link>
        </div>
      </div>
      <section
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </section>

      <div className="text-center text-xl">I am your footer!!</div>
    </>
  );
};

export default RootLayout;
