import NextNavbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NextNavbar />
            <main>{children}</main>
        </>
    )
}