import image1 from "./Content/Truck-Driving-in-Storm.jpg";
import image2 from "./Content/crypto.jpg";

const DeepDive = () => {
    return (
        <div className="content">
            <h1>Deep Dive</h1>
            <h3>Trucking and the Supply Chain</h3>
            <div className="imageContentLeft">
                <p>
                    Issues with the supply chain due to covid will no doubt have long term affects on society as a whole.
                    Due to a decline in freight drivers and the increase in freight prices, Catherine Macmillan talks about the issues the U.S. is
                    experiencing.  <a href="https://www.smart-trucking.com/truck-driver-shortage/">Here</a> she states that we in the U.S. have experienced a number of missing drivers anywhere from 60,000 to 80,000.
                    Obviously, this is a massive number and such numbers boils down to some simple reasons: low wages, poor working conditions, and the demands of the job.

                </p>
                <img src={image1} alt="Semi-Truck driving through heavy rain" />
            </div>
            <p>
                A lot of companies pay these truck drivers for mileage instead of the time that they invest or the skills that they possess.
                They often find themselves getting nothing but the mileage wage when stuck in a traffic jam or having to travel through difficult weather conditions.
                Truckers also find themselves dealing with losing miles and money due to any kind of delay and being regulated with the amount of hours the driver can be considered "on the clock".
            </p>
            <p>
                With driving these massive, 80,000 pound vehicles of death that can also be up to and over 57 feet of length, there come a lot of risks.
                Often times, they must traverse dangerous roads and in extreme conditions like heavy rains and snow.
                Semi-trucks have large turn radiuses and are much more difficult to drive than smaller vehicles.
                They also require a different kind of license involving a class they must take.
                Not to mention driving long hours to meet deadlines and being completely exhaused while driving these high risk machines.
            </p>
            <p>
                Something else that these drivers must endure is the pain of having to be away from home, friends, and family for days at a time.
                As this is rarely compensated for and can be extremly difficult to deal with, this piles onto just a few of the reasons this job has more risk than reward.
                This makes it easy to see why many people would not begin to consider this job and why many would quit.
            </p>
            <iframe style={{'width': '600px', 'maxWidth': '100%', 'marginBottom': '1.5rem'}} height="315" src="https://www.youtube.com/embed/eR7SvZgytVk" title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h3>What have the major effects been?</h3>
            <p>
                To understand what the effects have been, we must know how the supply chain itself works.
                This living and breathing system is best thought of as a "network of connected and interdependent organizations mutually and co-operatively working together or a system that
                consists of all parties involved, directly or indirectly, in fulfilling a customer request" as explained
                by <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/jscm.12248">Andreas Wieland</a>.
                Thinking about it, this definition makes total sense and must be taken into consideration when the idea of this complex system coined "The Supply Chain" comes to mind.
                <br />
                <br />
                All this being said and taken into consideration, let us address the initial question.
                The Supply Chain itself has grown "vulnerable" as it has developed into a rigid stage where resilience has become low.
                This system often becomes transformed in anticipation of larger developments but due to covid has seen tremendous problems.
                With increased difficulty in getting raw materials, shortage of truck drivers, and decreased work force, manufacturers have been fighting to keep things as normal as possible.
                On the consumer side of things, prices have gone up by substantial amounts with some as much as triple their normal price and dealing with large wait times.
            </p>
            <h3>How widespread are the supply chain issues?</h3>
            <p>
                Believe it or not, supply chain issues have not only been affecting the United States, but they have been taking hold worldwide.
                Due to the pandemic and consumers being mostly restricted to being inside, manufacturers have had great difficulty attempting to maintain the requests.
                With a lack of workers (due to COVID-19 and health issues) and a lack of raw material, companies simply cannot produce as much as they did before the pandemic.
                <br />
                <br />
                Many companies were forced to shutdown as the spread of COVID-19 was at an all time high in 2020.
                This led to a brief period of consumer drought as everyone was spending their time at home but as soon as lockdown was lifted, demand skyrocketed.
                But you may be wondering how the pandemic took its toll on the technology industry.
                <br />
                <br />
                Computer enthusiasts around the globe have been having immense issues trying to get computing parts.
                With the reduction of raw materials as well as the increase of spending time at home and many consumers needing or wanting to get into technology and the hobby that is PC gaming, demand was at an all time high with an all time low of production.
                Another factor that attributed and still has its grasp on this portion of society is the mining of crypto currency.
                This has caused finding a new GPU (or Graphics Processing Unit) incredibly difficult and pricey with regular consumers having to pay double or triple the normal, and already expensive, prices.
            </p>
            <h3>Crypto and GPUs</h3>
            <p>
                We have all heard by now the plight that Crypto mining has had on the graphics card market.
                The way that mining Crypto works is pretty simple.
                Basically, people enlist the use of graphics cards to solve varying problems and in turn they are given percentages of coins or money.
                After a decently short amount of time, these GPUs are basically of no use and will die and they are discarded.
                This is one of the main reasons the market is suffering so heavily and why the prices are so high because people that are mining can afford to buy these overpriced components.
                The problem lies in that the average consumer now finds it difficult to both find a graphics card and to have the expendable income to purchase one.
            </p>
            <p>
                Even though this problem seems to be having a short lifespan, expecting to make a full recovery before 2022-2023 as <a href="https://www.theseus.fi/bitstream/handle/10024/503619/Hajdu_Nandor.pdf?sequence=2">Hajdu</a> says, at the current time it is a massive issue.
            </p>
            <div className="imageContentRight">
                <img src={image2} alt="Person looking at prices of cryptocurrency over time" />
                <p>
                    An example of issues that consumers are dealing with are talked about <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3922181">here</a> by Linus Wilson where they discuss that upon release of the entire 3000 series by NVIDIA.
                    They talk about how quickly the new cards sold out as they were "immediately, these GPUs were unavailable at most retailers and were scalped for much more than their launch prices on eBay and Stockx".
                    With bans of mining in China and NVIDIA attempting to catch up, hopefully by 2022 the market for these powerful and necessary computer components will return back to normal.
                </p>
            </div>
        </div>
    );
}

export default DeepDive;