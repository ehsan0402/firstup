
import { Link } from "react-router-dom";
import StyleW from "../../components/layouts/defaultLayout/wrapper/style";

export function NotFound(){
    
    return(
        <StyleW>
        <Link to="/" >404 
        click to redirect to home</Link>
        </StyleW>
    )
}
export default NotFound;