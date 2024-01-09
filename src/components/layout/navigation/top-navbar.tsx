import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Logo from "../../ui/logo";
import ArrowDown from "../../../assets/icon/arrow-down.svg";
import Profile from "../../../assets/icon/Profile.png";
import MoonIcon from "../../../assets/icon/moon.svg";
import BellIcon from "../../../assets/icon/bell.svg";
import MessageIcon from "../../../assets/icon/message.svg";
import LeftIcon from "../../../assets/icon/leftArrow.svg";
import EmptyImageIcon from "../../../assets/icon/emptyImage.svg";

const menuItems = [
    {
        id: 1,
        title: "Trades",
    },
    {
        id: 2,
        title: "Market",
    },
    {
        id: 3,
        title: "Wallet",
    },
    {
        id: 4,
        title: "Reports",
    },
    {
        id: 5,
        title: "Staking",
    },
];

const profileItems = [
    {
        id: 3,
        icon: MessageIcon,
        alt: "Message",
    },
    {
        id: 2,
        icon: BellIcon,
        alt: "Bell",
    },
    {
        id: 1,
        icon: MoonIcon,
        alt: "Moon",
    },
];

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-transparent space-y-12 bg-[#131919]">
            <nav
                className="mx-auto flex items-center justify-between py-6 px-20 "
                aria-label="Global"
            >
                <div
                    className="
                    w-full
                    flex items-center space-x-8 
                    lg:flex lg:flex-1"
                >
                    <Logo />
                    <div
                        className="
                        w-auto
                        flex space-x-2 items-center mr-8 
                        hidden
                        2xl:flex
                        xl:flex
                        lg:hidden
                        md:hidden
                        sm:hidden
                        "
                    >
                        {menuItems.map((mapItem) => {
                            return (
                                <div className="flex">
                                    <span className="text-base font-medium text-slate-200	 ">
                                        {mapItem.title}
                                    </span>
                                    <img src={ArrowDown} width={24} height={24} alt={"ArrowDown"} />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <img src={Profile} className="h-10 w-10" alt={"Profile"} />
                    </button>
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-3 items-center">
                    {profileItems.map((mapItem) => {
                        return (
                            <div className="w-6 h-6 ">
                                <img src={mapItem.icon} width={24} height={24} alt={mapItem.alt} />
                            </div>
                        );
                    })}

                    <div className="bg-slate-100 w-0.5 h-6 my-2" />

                    <img src={Profile} width={48} height={48} alt={"Profile"} />
                </div>
            </nav>
            <div className="space-y-4 pb-40">
                <div className="flex items-center space-x-2 px-32">
                    <img src={LeftIcon} className="w-6 h-6 " alt={"Profile"} />

                    <span className="py-0.5 text-base font-normal text-gray-400 ">
                        {"Dashboard/Market/Coins"}
                    </span>
                </div>
                <div className="flex items-center space-x-2 px-40 ">
                    <div className="w-10 h-10 bg-[#FFFFFF]/[.08] rounded-3xl items-center justify-center flex">
                        <img src={EmptyImageIcon} className="w-6 h-6 " alt={"Profile"} />
                    </div>

                    <span className="text-2xl font-medium text-white ">{"Market"}</span>
                </div>
            </div>

            <Dialog
                as="div"
                className="lg:hidden xl:hidden 2xl:hidden bg-red-400"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <Dialog.Panel className=" bg-[#131919] fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-center ">
                        <Logo />
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        />
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {menuItems.map((mapItem) => {
                                    return (
                                        <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                            <span className="text-base font-medium text-slate-200	 ">
                                                {mapItem.title}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
};

export default Navbar;
