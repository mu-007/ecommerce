import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";

export const shopContext = createContext();
const shopContextProvider =(props)=>
{
    const currency='$';
    const delivary_fee=10;
    const [search,setSearch]
=useState('');
const [showSearch,setShowSearch] = useState(true);


    const value= {
        products,currency,delivary_fee,search,setSearch,showSearch,setShowSearch}
        return(
            <shopContext.Provider value={value}>
                {props.children}
            </shopContext.Provider>
        )
    }

export default shopContextProvider;
