import { FullFakebooksLogo } from "../../Components";
import { Link } from "@remix-run/react";

export default function Sidenav() {
  return (
    <aside className="sidenav p-4 bg-gray-50 min-h-screen border-r border-gray-100">
      <div className="sidenav-sidenav">
        <FullFakebooksLogo position="center" size="sm" />
      </div>
      <div
        className="my-4"
        style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <ul className="flex flex-col font-bold ">
          <li>
            <Link className="my-1 block text-[length:14px] py-1 px-2 pr-16 rounded-md" to={"about"}>Dashboard</Link>
          </li>
          <li>
            <a className="my-1 block text-[length:14px] py-1 px-2 pr-16 rounded-md"
              target="_blank"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer">
              Accounts
            </a>
          </li>
          <li>
            <a className="my-1 block text-[length:14px] py-1 px-2 pr-16 rounded-md bg-gray-100"
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer">
              Sales
            </a>
          </li>
          <li>
            <a className="my-1 block text-[length:14px] py-1 px-2 pr-16 rounded-md" target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Expenses
            </a>
          </li>
          <li>
            <a className="my-1 block text-[length:14px] py-1 px-2 pr-16 rounded-md" target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Reports
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
