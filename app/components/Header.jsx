"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {

    const pathName = usePathname();
    const navItems = [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "About Page",
            href: "/about"
        },
        {
            label: "FAQ",
            href: "/about/faq"
        },
        {
            label: "Posts",
            href: "/posts"
        },
        {
            label: "CRUD",
            href: "/crud"
        }
    ]


    return <div>
        <ul className="flex gap-5 py-10">
        {
            navItems.map((nav, index) => {
                return (
                    <li key={index}>
                        <Link href={nav.href} className={pathName === `${nav.href}` ? "text-blue-500 font-bold" : ""}>{nav.label}</Link>
                    </li>
                )
            })
        }
        </ul>
    </div>;
};
export default Header;