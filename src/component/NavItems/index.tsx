import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "Món ăn",
    href: "/menu",
  },
  {
    title: "Đơn hàng",
    href: "/orders",
  },
  {
    title: "Đăng nhập",
    href: "/login",
    authRequired: false,
  },
  {
    title: "Quản lý",
    href: "/manage/dashboard",
    authRequired: true,
  },
];

export default function NavItems({ className }: { className?: string }) {
  return menuItems.map((item) => {
    return (
      <Link to={item.href} key={item.href} className={cn('text-[1.6rem] mr-[2.4rem] font-medium ',className)}>
        <span className="text-[white]">{item.title}</span>
      </Link>
    );
  });
}
