import Navbar from "@/Layouts/Navbar.jsx";

export default function App({children}){
    return <>
        <Navbar/>
        <div className="pt-8">{children}</div>
    </>
}
