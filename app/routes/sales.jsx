import { Outlet } from "@remix-run/react";
import SalesNav from "../components/SalesNav";

export default function Products() {
  return (
    <div className="products flex-1 p-4">
      <h1 className="font-display text-d-h3 text-black">Sales</h1>
			<SalesNav />
      <Outlet />
    </div>
  );
}
