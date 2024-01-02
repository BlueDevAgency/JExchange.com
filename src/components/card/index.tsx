import { splitPrice } from "../../utils/helper";

const CardInfo = ({
    icon,
    title,
    subTitle,
    currency = "$",
    value = 0,
    changePercent = 0,
    coinIcon,
    coinFlag,
    coinName,
}: {
    icon?: any;
    title?: string;
    subTitle?: string;
    currency?: string;
    value?: number;
    changePercent?: number;
    coinIcon?: any;
    coinFlag?: string;
    coinName?: string;
}) => {
    return (
        <div
            className={`
                grid content-between 
                bg-white rounded-xl shadow-xl 
                h-52 px-5 py-7
                
                `}
        >
            <div>
                <div className="flex space-x-2">
                    {icon && <img src={icon} width={24} height={24} alt={title} />}
                    <span className="text-lg font-semibold">{title ?? "Title"}</span>
                </div>
                <span className="text-base text-gray-500 font-medium">
                    {subTitle ?? "SubTitle"}
                </span>
            </div>

            <div className="space-y-2 w-full">
                <div className="flex w-full justify-between align-center">
                    <span className="text-lg font-semibold w-auto text-2xl">
                        {currency + " " + splitPrice(value)}
                    </span>
                    <span
                        className={`${
                            changePercent > 0
                                ? "bg-emerald-50"
                                : changePercent < 0
                                ? "bg-rose-50"
                                : ""
                        } rounded-xl px-3 py-0.5 text-lg font-semibold ${
                            changePercent > 0
                                ? "text-emerald-600"
                                : changePercent < 0
                                ? "text-rose-600"
                                : ""
                        } w-auto`}
                    >
                        {`${changePercent > 0 ? "+" : ""}${changePercent}%`}
                    </span>
                </div>
                <div className="flex align-center">
                    <div className="flex bg-slate-100 rounded-xl px-5 space-x-2">
                        {coinIcon && <img src={coinIcon} width={24} height={24} alt={coinName} />}
                        <span className="rounded-xl py-0.5 text-lg font-normal bg-slate-100">
                            {`${coinFlag ?? "-"} -`}{" "}
                            <span className="rounded-xl py-0.5 text-lg font-normal text-gray-400 bg-slate-100">
                                {`${coinName ?? "-"}`}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardInfo;
