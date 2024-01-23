import React from "react";
import Image from "next/image";
import img from "../../../../public/img/cashier.png";
import { useRouter } from "next/router";
import Link from "next/link";

const SideMenu = () => {
  const router = useRouter();

  return (
    <div className="fixed z-10 left-0 top-0 w-60 h-full bg-[#335ACB] font-poppins">
      <div className="flex items-center pt-4 pb-4 px-4 border-b-2 border-b-white border-opacity-20">
        <i className="ri-computer-line text-4xl text-white -rotate-45"></i>
        <span className="text-xl font-bold text-white ml-10">KASIR</span>
      </div>

      <ul className="my-4 mx-4">
        <li>
          <Link
            href="/dashboard"
            className={router.pathname == "/dashboard" ? "rounded bg-white text-[#335ACB] flex items-center my-2 py-2 px-4 font-poppins gap-2" : "rounded text-gray-300 flex items-center my-2 py-2 px-4 font-poppins gap-2"}
          >
            <i className="ri-dashboard-fill text-2xl"></i>
            <span className="text-sm">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href="/transaksi"
            className={router.pathname == "/transaksi" ? "rounded bg-white text-[#335ACB] flex items-center my-2 py-2 px-4 font-poppins gap-2" : "rounded text-gray-300 flex items-center my-2 py-2 px-4 font-poppins gap-2"}
          >
            <i className="ri-wallet-2-fill text-2xl"></i>
            <span className="text-sm">Transaksi</span>
          </Link>
        </li>
        <li>
          <Link
            href="/penjualan"
            className={router.pathname == "/penjualan" ? "rounded bg-white text-[#335ACB] flex items-center my-2 py-2 px-4 font-poppins gap-2" : "rounded text-gray-300 flex items-center my-2 py-2 px-4 font-poppins gap-2"}
          >
            <i className="ri-shopping-bag-fill text-2xl"></i>
            <span className="text-sm">Penjualan</span>
          </Link>
        </li>
        <li>
          <Link
            href="/marketplace"
            className={router.pathname == "/marketplace" ? "rounded bg-white text-[#335ACB] flex items-center my-2 py-2 px-4 font-poppins gap-2" : "rounded text-gray-300 flex items-center my-2 py-2 px-4 font-poppins gap-2"}
          >
            <i className="ri-store-3-fill text-2xl"></i>
            <span className="text-sm">Marketplace</span>
          </Link>
        </li>
        <li>
          <Link
            href="/customer"
            className={router.pathname == "/customer" ? "rounded bg-white text-[#335ACB] flex items-center my-2 py-2 px-4 font-poppins gap-2" : "rounded text-gray-300 flex items-center my-2 py-2 px-4 font-poppins gap-2"}
          >
            <i className="ri-customer-service-2-fill text-2xl"></i>
            <span className="text-sm">Customer Support</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
