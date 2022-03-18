import { Button } from "antd";
import StyleW from "../../components/layouts/defaultLayout/wrapper/style";

export function NotFound(){
    function Home (){
        <Redirect to="/" />
    }
    return(
        <StyleW>
        <p>404</p>
        <p onClick={Home}>Home</p>
        </StyleW>
    )
}
export default NotFound;