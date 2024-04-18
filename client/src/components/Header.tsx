import HeaderOption from "./HeaderOption";

const Header = () => {
    return (
        <>
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            <div>
                <input type="text" />
            </div>
            <div>
                <HeaderOption large={"Hello Guest"} small={"Sign In"} />
                <HeaderOption large={"Hello Guest"} small={"Sign In"} />
                <HeaderOption large={"Hello Guest"} small={"Sign In"} />
            </div>
        </>
    )
}

export default Header;
