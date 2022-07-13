import { Link } from "@remix-run/react";

export default function SalesNav() {
  return (
    <section className="sales-nav">
      <ul className="flex gap-x-4">
        <li>
          <Link className="inline-block hover:font-bold my-4" to={"/sales/dashboard"}>Overview</Link>
        </li>
        <li>
          <Link className="inline-block hover:font-bold my-4" to={"/sales/accounts"}>Suscriptions</Link>
        </li>
        <li>
          <Link className="inline-block font-bold my-4" to={"/sales/sales"}>Invoices</Link>
        </li>
        <li>
          <Link className="inline-block hover:font-bold my-4" to={"/sales/expenses"}>Customers</Link>
        </li>
        <li>
          <Link className="inline-block hover:font-bold my-4" to={"/sales/reports"}>Deposites</Link>
        </li>
      </ul>
    </section>
  );
}
