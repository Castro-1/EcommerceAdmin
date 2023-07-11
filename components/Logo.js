import Link from "next/link";
import StoreIcon from "./icons/StoreIcon";

export default function Logo() {
  return (
    <Link href={"/"} className="flex gap-1">
      <StoreIcon />
      <span className="">EcommereAdmin</span>
    </Link>
  );
}
