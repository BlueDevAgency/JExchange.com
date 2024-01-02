import CardInfo from "../../../components/card";
import Fire from "../../../assets/icon/fire.svg";
import Down from "../../../assets/icon/down.svg";
import Up from "../../../assets/icon/up.svg";
import CircleChart from "../../../assets/icon/circle-chart.svg";
import BitCoin from "../../../assets/icon/bitcoin.svg";
import Cake from "../../../assets/icon/cake.svg";
import LiteCoin from "../../../assets/icon/litecoin.svg";

const MarketCoinsView = () => {
    const cards = [
        {
            icon: Fire,
            title: "Trending",
            subTitle: "Top Trending coin in last 24h",
            currency: "$",
            value: 65876.98,
            changePercent: 4.3,
            coinIcon: BitCoin,
            coinFlag: "BTC",
            coinName: "Bitcoin",
        },
        {
            icon: Down,
            title: "Top Loser",
            subTitle: "Top Loser coin in last 24h",
            currency: "$",
            value: 1876.98,
            changePercent: -3.65,
            coinIcon: Cake,
            coinFlag: "Cake",
            coinName: "PancakeSwap",
        },
        {
            icon: Up,
            title: "Top Gainer",
            subTitle: "Top Gainer coin in last 24h",
            currency: "$",
            value: 2376.38,
            changePercent: 0.8,
            coinIcon: LiteCoin,
            coinFlag: "LTC",
            coinName: "LiteCoin",
        },
        {
            icon: CircleChart,
            title: "Top Volume",
            subTitle: "Top Volume coin in last 24h",
            currency: "$",
            value: 65376.98,
            changePercent: 1.8,
            coinIcon: BitCoin,
            coinFlag: "BTC",
            coinName: "Bitcoin",
        },
    ];

    return (
        <div>
            <div
                className={`
                    w-full h-full
                    px-20
                    bg-zinc-800
                    2xl: h-screen
                    sm:pt-10 pb-20
                    md:pt-10 pb-20
                `}
            >
                <div className="scroll-smooth h-screen">
                    <div
                        className={`
                                    w-full
                                    flex
                                    flex-row
                                    grid
                                    sm:grid-cols-1
                                    md:grid-cols-2
                                    lg:grid-cols-2 gap-4
                                    xl:grid-cols-4 gap-4 
                                    2xl:grid-cols-4 gap-4
                                `}
                    >
                        {cards.map((card) => {
                            return (
                                <CardInfo
                                    icon={card.icon}
                                    title={card.title}
                                    subTitle={card.subTitle}
                                    value={card.value}
                                    changePercent={card.changePercent}
                                    coinIcon={card.coinIcon}
                                    coinFlag={card.coinFlag}
                                    coinName={card.coinName}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketCoinsView;
