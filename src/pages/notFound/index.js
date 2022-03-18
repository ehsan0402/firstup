import { Button } from "antd";
import StyleW from "../../components/layouts/defaultLayout/wrapper/style";

export function NotFound(){
    function Home (){
        <Redirect to="/" />
    }
    return(
        <StyleW>
        <p onClick={Home}>404</p>
        
        </StyleW>
    )
}
export default NotFound;