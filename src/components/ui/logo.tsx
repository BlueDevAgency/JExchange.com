import LogoIcon from "../../assets/icon/logo.svg";

const Logo = () => {
    return (
        <div className="flex items-center space-x-2">
            <img className="h-12 w-auto" src={LogoIcon} width={64} alt={"jexchange"} />
            <span className="py-0.5 text-lg font-normal text-gray-400">{`jexchange`}</span>
        </div>
    );
};

export default Logo;
