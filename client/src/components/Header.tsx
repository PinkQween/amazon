import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { HeaderOption } from "./";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
    return (
        <div className="h-[60px] flex items-center bg-[#131921] sticky top-0 z-10">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" className="w-[100px] object-contain mx-[20px] mt-[18px]" />
            <div className="flex flex-1 items-center rounded-3xl h-5">
                <input type="text" className="h-full border-none w-full" />
                <SearchIcon className={`h-full bg-[#cd9042]`} style={{ height: '100%', width: '20px' }} />
            </div>
            <div className="flex justify-evenly">
                <HeaderOption small={"Hello, sign in"} large={"Account & Lists"} />
                <HeaderOption small={"Returns"} large={"& Orders"} />
                <div className="flex items-center text-white">
                    <ShoppingCartCheckoutIcon className=' scale-[3] ml-[10px]'/>
                    <span className="text-[18px] font-extrabold mx-[10px]">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header;
