import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function NextNavbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    interface MenuItem {
        title: string;
        url: string;
    }
    const menuItems: MenuItem[] = [
        {
            title: "Home",
            url: "/",
        },
        {
            title: "Projects",
            url: "/projects",
        }
    ];

    return (
        <>
            <Navbar shouldHideOnScroll
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}>
                <NavbarBrand>
                    <p className="font-bold text-inherit">FAY</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {menuItems.map((item, index) => (
                        <NavbarItem key={index}>
                            <Link
                                href={item.url}
                            >
                                {item.title}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>
                <NavbarContent  className="sm:hidden" justify="end">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                </NavbarContent>
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={index}>
                            <Link
                                className="block py-2 px-3 transition md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                                href={item.url}
                                size="lg"
                            >
                                {item.title}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
            <div className="border-t border-gray-200" />
        </>
    );
}
