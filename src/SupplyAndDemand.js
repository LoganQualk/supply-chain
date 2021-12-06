const SupplyAndDemand = () => {
    return (
        <div className="container">
            <h1>Supply and Demand</h1>

            <h3>How bad has supply been, really?</h3>
            <p>
                It's easy to believe that the supply chain issues are overblown if they are not affecting you directly.
                Around the time of the beginning of the pandemic, supply was terrible for everyone.  Nobody knew how to
                deal with Covid, so many manufacturers and producers were stopping operations.  Getting products shipped from
                retailers became a nightmare.  However, as the pandemic went on, and we learned more and more about how Covid
                was spread, the supply issues started to improve for most people.  Slowly, Amazon packages went back to 2-day
                shipping, and thus the supply chain issues were no longer an issue on the forefront of people's minds.
            </p>
            <p>
                So, problem solved?  The supply chain issues have been fixed, right?  Not exactly.  While supply for most
                products has been vastly improved, supply for computing technologies is still terrible.  Trying to buy
                products such as gaming consoles, computers, and graphics cards is almost impossible right now.  There is
                simply not enough supply to go around.
            </p>
            <p>
                One statistic that helps visualize these production problems is PPI, or producer price index.  This is used
                to measure the difference in selling prices received by domestic producers over time.  Thus, a high PPI
                shows that there has been higher selling prices from producers, which is indicative of supply
                issues.  In <a href="https://www.cnbc.com/2021/11/10/big-business-bosses-are-warning-that-supply-chain-issues-and-inflation-are-here-to-stay.html">this</a> CNBC
                article, Elliot Smith goes over the increasing supply challenges.  He states that the Chinese PPI has
                increased 13.5% annually and the U.S. PPI has increased 8.6% annually (from this last October).  Both of these
                are all time records, showing just how insane these supply issues have been.
            </p>
            <p>[PPI 12 month image here]</p>

            <h3>Has demand changed at all?</h3>
            <p>
                As we know, supply only matters in the context of consumer demand.  Unfortunately, the pandemic has only
                led to an increase in demand for computing technologies, due to more and more people working from home, along
                with the growing need for home-entertainment.  With many offices and buildings shutting down for safety concerns, 
                along with people needing to stay socially distant for health reasons, it has become absolutely vital to have 
                access to a laptop or computer.  It is unlikely that this increased demand will ease up in the near future,
                since society as a whole has adapted to working remotely.
            </p>

            <h3>How do these issues affect the everyday consumer?</h3>
            <p>
                The combination of low supply and high demand has had massive implications for everyday consumers.  Prices of
                technological components has soared, and that's assuming you can find them in stock at all.  These issues
                have led to an influx of scalpers.  For many technological components, as soon as they are in stock, scripts
                set up by scalpers will immediately buy as much of the stock as possible.  The scalpers can then resell
                these products for a vastly increased price.  Unless you are willing to pay these exorbitant prices,
                it is almost impossible to get things like gaming consoles or graphics cards these days.
            </p>
            <p>
                There are a couple of ways to make scalpers less effective.  The simplest one is to just have enough supply to 
                cover all of the demand.  Unfortunately, this method will likely not be attainable in the near future.  The other
                method is for sellers to introduce buy limits.  If people are limited in the quantity of each product they can 
                purchase, then scalpers are much less profitable, thus reducing how many scalpers there are.  Unfortunately,
                scalpers are just as profitable for sellers as legitimate customers, so implementing measures like these isn't 
                a priority to them.  Hopefully, these supply and demand problems will diminish over time. 
            </p>

            <h3>How are these issues different than supply and demand issues in the past?</h3>
            <p>
                Problems with the supply chain is not a new concept.  There is a long history of the supply chain having 
                issues, so what makes these Covid supply chain issues different from those in the past.  Craighead, Ketchen Jr., 
                and Ferguson discuss this in their 
                article <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/deci.12468">Pandemics and 
                Supply Chain Management Research: Toward a Theoretical Toolbox</a>.  Essentially, there are three main differences
                between the most recent supply chain problems and previous ones:
                <ol>
                    <li>
                        <strong>Scope:</strong> Most of the time, supply disruptions are confined to specific areas or sectors of
                        the market.  For instance, an oil spill in an ocean may affect food supplied from that area.  However, 
                        Covid is a global phenomenon.  The supply issues aren't isolated to a single area, and they don't affect
                        just one sector of the market (although as mentioned previously, computing technologies have been hit
                        especially hard).  Thus, this is likely the supply chain disruption with the largest scope ever.
                    </li>
                    <li>
                        <strong>Spillover:</strong> Craighead, Ketchen Jr. and Ferguson compare most supply chain disruptions to a rock
                        thrown in a lake, saying that "a large initial shock generally dissipates into minor ripples."  However,  the
                        initial "shock" that was Covid hasn't been followed by minor ripples, but instead by equivalent shocks.  Borders 
                        have been closed and travel has been reduced, which while necessary, has led to massive difficulties in having a functional, smoothly
                        operating supply chain.
                    </li>
                    <li>
                        <strong>Shifts:</strong> Most supply chain issues affect either the supply or the demand.  However, the shifts caused by Covid 
                        have led to both supply and demand being massively affected, oftentime affecting the same products as well.  This has exacerbated
                        the supply chain issues even further.
                    </li>
                </ol>
                <p>As a whole, the scale of the supply and demand issues caused by Covid is unprecendented.</p>
            </p>
        </div>
    );
}

export default SupplyAndDemand;