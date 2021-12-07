import image1 from "./Content/Truck-Driving-in-Storm.jpg";
import image2 from "./Content/crypto.jpg";

const DeepDive = () => {
    return (
        <div className="content">
            <h1>Deep Dive</h1>
            <h3>Trucking and the Supply Chain</h3>
            <div className="imageContentLeft">
                <p>
                    Issues with the supply chain due to covid will no doubt have long term affects on society as a whole.  One of the main reasons we have 
                    had global supply chain issues, especially in regards to computing technologies, is due to a decline in freight drivers. Catherine 
                    Macmillan talks about this in <a href="https://www.smart-trucking.com/truck-driver-shortage/">her article</a>; she states that the U.S. has 
                    experienced upwards of 60,000 to 80,000 missing freight drivers.
                    Obviously, this is a massive number, and the reasons for it are quite simple: low wages, poor working conditions, and the difficult demands of the job.

                </p>
                <img src={image1} alt="Semi-Truck driving through heavy rain" style={{height: '25ch'}}/>
            </div>
            <p>
                One reason that truck drivers get low wages is that they are often paid for mileage instead of time spent driving.
                Any sort of traffic, inclement weather, or delays mean that they lose money, even though they are still spending time 
                on the job.
            </p>
            <p>
                Driving these trucks also comes with a lot of risks.
                Often times, they must traverse dangerous roads and extreme weather conditions like heavy rain and snow, 
                which is made even more difficult by the truck's poor turning radius/handling.
            </p>
            <p>
                Lastly, in order to be a trcker, you have to be away from home, friends, and family for days at a time.
                This is obviously an extremely tough ask for most people.
                All of these factors illustrate why many freight drivers are quitting, hurting the global supply chain in the process.
            </p>
            <iframe style={{'width': '600px', 'maxWidth': '100%', 'marginBottom': '1.5rem'}} height="315" src="https://www.youtube.com/embed/eR7SvZgytVk" title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h3>What exactly is the supply chain and why is it in disarray?</h3>
            <p>
                The supply chain is an absolutely massive global system that has a massive affect on society.  It is best thought of 
                as a "network of connected and interdependent organizations mutually and co-operatively working together or a system that
                consists of all parties involved, directly or indirectly, in fulfilling a customer request" as explained
                by <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/jscm.12248">Andreas Wieland</a>.  
                <br />
                <br />
                All this being said and taken into consideration, let us address the initial question.
                Wieland discusses how the Supply Chain itself had grown vulnerable due to having low "resiliency."  Since it is a massive network 
                of organizations, including suppliers, manufacturers, resellers, and more, if one of these parts begins to fail, then the 
                supply chain as a whole would fail, thus making it not resilient.  Obviously, with the effects of covid, multiple parts started to fail, 
                and thus the entire network fell into disarray.  Due to computing technologies often being developed overseas, along with issues 
                getting material to manufacture these parts, substantial issues have arised with their supply and transit, thus creating the shortage we are experiencing today.  Overall, society as we know it cannot function without a 
                working supply chain.
            </p>
            <h3>How widespread are the supply chain issues?</h3>
            <p>
                Believe it or not, supply chain issues have affected not only the United States, but the entire world.  Due to the pandemic, consumers globally
                are often working from home, thus needing to use more computing technologies.  Thus, manufacturers have had great difficulty attempting to keep up 
                with the increased demand.
                With a lack of workers (due to COVID-19 and health issues) and a lack of raw material, companies also simply cannot produce as much as they did before the pandemic.
                <br />
                <br />
                As mentioned previously, technology enthusiasts around the globe have had immense issues trying to buy technological components.  Due to the reasons previously mentioned along 
                with the increased time spent at home, it is almost impossible for enthusiasts anywhere on
                the planet to buy computer parts, gaming consoles, or any other technological components.  
            </p>
            <h3>Crypto and GPUs</h3>
            <p>
                Another major factor that has taken society by storm is the increase in the mining of crypto currency.  We 
                have all heard by now the plight that crypto mining has had on the graphics card market.
                The way that mining crypto works is pretty simple.
                Basically, people enlist the use of graphics cards to solve math problems and in turn they are given percentages of coins or money.
                After a short amount of time, the GPUs used for mining are completely worn out and must be discarded.
                This is one of the main reasons the market is suffering so heavily and why the prices are so high; mining is extremely profitable, thus in high demand,
                yet it literally destroys available supply.
                The problem lies in that the average consumer now finds it almost impossible to both find a graphics card and have the expendable income to purchase one.
            </p>
            <p>
                Fortunately, mining becomes less profitable as time goes on, as the math problems get harder and harder to 
                solve. Thus, <a href="https://www.theseus.fi/bitstream/handle/10024/503619/Hajdu_Nandor.pdf?sequence=2">Nándor Hajdu</a> predicts that this crypto problem will be resolved 
                as early as 2023. Unfortunately, until then, it will continue to be a major problem for society.
            </p>
            <div className="imageContentRight">
                <img src={image2} alt="Person looking at prices of cryptocurrency over time" />
                <p>
                    An example of issues that consumers are dealing with is talked about <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3922181">here</a> by Linus Wilson
                    wherein they discuss the most recent release of NVIDIA graphics cards.
                    They talk about how quickly the new cards sold out as "immediately, these GPUs were unavailable at most retailers and were scalped for much more than their launch prices on eBay and Stockx".
                    With bans of mining in China and NVIDIA attempting to catch up, hopefully the market for GPUs will return to normal.
                </p>
            </div>
        </div>
    );
}

export default DeepDive;