import Navigation from "@/Layouts/Navigation.jsx";

export default function App({children}){
    return <>
        <Navigation/>
        <div className="pt-8">{children}</div>
    </>
}
