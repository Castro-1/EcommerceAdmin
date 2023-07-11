import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import Logo from "./Logo";
import HomeIcon from "./icons/HomeIcon";
import ProductsIcon from "./icons/ProductsIcon";
import CategoriesIcon from "./icons/CategoriesIcon";
import OrdersIcon from "./icons/OrdersIcon";
import AdminsIcon from "./icons/AdminsIcon";
import SettingsIcon from "./icons/SettingsIcon";
import LogoutIcon from "./icons/LogoutIcon";

export default function Nav({ show }) {
  const inactiveLink = "flex gap-1 p-1";
  const activeLink = inactiveLink + " bg-highlight text-black rounded-sm";
  const inactiveIcon = "w-6 h-6";
  const activeIcon = inactiveIcon + " text-primary";
  const router = useRouter();
  const { pathname } = router;

  async function logout() {
    await router.push("/");
    await signOut();
  }

  return (
    <aside
      className={
        (show ? "-left-0" : "-left-full") +
        " top-0 text-gray-500 p-4 fixed w-full bg-bgGray h-full md:static md:w-auto transition-all"
      }
    >
      <div className="mb-4 mr-4">
        <Logo />
      </div>
      <nav className="flex flex-col gap-2">
        <Link
          href={"/"}
          className={pathname === "/" ? activeLink : inactiveLink}
        >
          <HomeIcon className={pathname === "/" ? activeIcon : inactiveIcon} />
          Dashboard
        </Link>
        <Link
          href={"/products"}
          className={pathname.includes("/products") ? activeLink : inactiveLink}
        >
          <ProductsIcon
            className={
              pathname.includes("/products") ? activeIcon : inactiveIcon
            }
          />
          Products
        </Link>
        <Link
          href={"/categories"}
          className={
            pathname.includes("/categories") ? activeLink : inactiveLink
          }
        >
          <CategoriesIcon
            className={
              pathname.includes("/categories") ? activeIcon : inactiveIcon
            }
          />
          Categories
        </Link>
        <Link
          href={"/orders"}
          className={pathname.includes("/orders") ? activeLink : inactiveLink}
        >
          <OrdersIcon
            className={pathname.includes("/orders") ? activeIcon : inactiveIcon}
          />
          Orders
        </Link>
        <Link
          href={"/admins"}
          className={pathname.includes("/admins") ? activeLink : inactiveLink}
        >
          <AdminsIcon
            className={pathname.includes("/admins") ? activeIcon : inactiveIcon}
          />
          Admins
        </Link>
        <Link
          href={"/settings"}
          className={pathname.includes("/settings") ? activeLink : inactiveLink}
        >
          <SettingsIcon
            className={
              pathname.includes("/settings") ? activeIcon : inactiveIcon
            }
          />
          Settings
        </Link>
        <button onClick={logout} className={inactiveLink}>
          <LogoutIcon className={inactiveIcon} />
          Logout
        </button>
      </nav>
    </aside>
  );
}
