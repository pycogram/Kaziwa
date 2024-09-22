export function Page({objIconPro, objImgPro, objGifPro}) {

    const tg = objIconPro.tg,
           x =  objIconPro.x,
           ray = objIconPro.ray,
           dext = objIconPro.dext,
           dexs = objIconPro.dexs;

    const logo1 = objImgPro.logo1,
          logo2 = objImgPro.logo2,
          logo3 = objImgPro.logo3;

    const gif1 = objGifPro.gif1,
          gif2 = objGifPro.gif2,
          gif3 = objGifPro.gif3,
          gif4 = objGifPro.gif4,
          gif5 = objGifPro.gif5,
          gif6 = objGifPro.gif6,
          gif7 = objGifPro.gif7;

    return(
        <div>
            <header className="socialLink">
                <span>
                    <a href="https://t.me/+_4UBSE88m9MxOGU0" target="_blank"><img src={tg} alt="telegram link"></img></a>   
                </span>
                <span>
                    <a href="https://x.com/CTOKaziwa" target="_blank"><img src={x} alt="twitter link"></img></a>
                </span>
                <span>
                    <a href="https://pump.fun/EE1JYjpo1croL7awdhu1PGys4WthumnWX5WT6uTDpump" target="_blank"><img src={ray} alt="pumpfun buy link"></img></a>
                </span>
                <span>
                    <a href="https://www.dextools.io/app/en/solana/pair-explorer/" target="_blank"><img src={dext} alt="dextools link"></img></a>
                </span>
                <span>
                    <a href="https://dexscreener.com/solana/EE1JYjpo1croL7awdhu1PGys4WthumnWX5WT6uTDpump" target="_blank"><img src={dexs} alt="dexscreener link"></img></a>
                </span>
            </header>
            <main className="bodySection">
                <div className="logoText">
                    <h2>Yo, Welcome to $Kaziwa's World!</h2>
                    <div>
                        <span>
                            <img src={logo1} alt="Kaziwa official Logo"></img>
                        </span>
                    </div>
                    <h4>$Kaziwa's on solana</h4>
                </div>
                <div className="caSection">
                    <div>
                        <h4>CA:</h4>
                        <p>EE1JYjpo1croL7awdhu1PGys4WthumnWX5WT6uTDpump</p>
                    </div>
                </div>
                <div className="aboutSection">
                    <div className="about">
                        <span>
                            <img src={logo2} alt="about pic"></img>
                        </span>
                        <h4>
                            Why did the glossy pink blob invest in $Kaziwa? 
                            Saw the liquidity pool and said, "Shiny gains, here I come!" 
                            Scooped up those tokens like candy, grinning with each purchase. 
                            Told its squishy friends, "Just HODL and stay smooth!" 
                            Diversified into $Kaziwa. Now it’s flexing that unreal shine, lounging in the metaverse, 
                            untouched by FUD!
                        </h4>
                        <span>
                            <img src={logo3} alt="about pic 2"></img>
                        </span>
                    </div>
                    <div className="buyButton">
                        <button>
                            <a href="https://pump.fun/GzfAXT3oNJMfiuE6dz7SDKYLe7i76bhYuXd3YfjUpump" target="_blank">Buy $Kaziwa</a> 
                        </button>
                    </div>
                </div>
                <div className="memeSection">
                    <h4>Everyone loves $Kaziwa. $Kaziwa is cute af.</h4>
                    <div className="memePic">
                        <span>
                            <img src={gif1} alt="Kaziwa pic"></img>
                        </span>
                        <span>
                            <img src={gif3} alt="Kaziwa pic"></img>
                        </span>
                        <span>
                            <img src={gif4} alt="Kaziwa pic"></img>
                        </span>
                        <span>
                            <img src={gif5} alt="Kaziwa pic"></img>
                        </span>
                        <span>
                            <img src={gif6} alt="Kaziwa pic"></img>
                        </span>
                        <span>
                            <img src={gif7} alt="Kaziwa pic"></img>
                        </span>
                    </div>
                </div>
            </main>
            <footer>
                <p>© 2024 $Kaziwa. All rights reserved.</p>
            </footer>
        </div>
    );
}
