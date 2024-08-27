import "./AdminLayout.scss";
import {Footer, Header, LateralBar} from "../../Components"

export function AdminLayout (props) {
    const {children} = props;
    return (
        <>
            <Header />
            <div className="AdminLayout">
                {children}
            </div>
            <LateralBar />
            <Footer/>
        </>
    )
}