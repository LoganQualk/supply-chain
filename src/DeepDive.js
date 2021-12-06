import image1 from "./Content/Truck-Driving-in-Storm.jpg";

const DeepDive = () => {
    return (
        <div className="container">
            <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/jscm.12248">SUPPLY CHAIN MANAGEMENT</a>
            <br />
            <a href="https://www.smart-trucking.com/truck-driver-shortage/">TRUCKER PEOPLE</a>
            <h1>Deep Dive</h1>
            <h3>What caused the downfall of the supply chain?</h3>
            <p className="centerText">
                Issues with the supply chain due to covid will no doubt have long term affects on society as a whole.
                Due to a decline in freight drivers and the increase in freight prices, Catherine Macmillan talks about the issues the U.S. is
                experiencing.  <a href="https://www.smart-trucking.com/truck-driver-shortage/">Here</a> she states that we in the U.S. have experienced a number of missing drivers anywhere from 60,000 to 80,000.
                Obviously, this is a massive number and such numbers boils down to some simple reasons: low wages, poor working conditions, and the demands of the job.
                <br />
                <br />
                A lot of companies pay these truck drivers for mileage instead of the time that they invest or the skills that they possess.
                They often find themselves getting nothing but the mileage wage when stuck in a traffic jam or having to travel through difficult weather conditions.
                Truckers also find themselves dealing with losing miles and money due to any kind of delay and being regulated with the amount of hours the driver can be considered "on the clock".
                <br />
                <br />
                With driving these massive, 80,000 pound vehicles of death that can also be up to and over 57 feet of length, there come a lot of risks.
                Often times, they must traverse dangerous roads and in extreme conditions like heavy rains and snow.
                Semi-trucks have large turn radiuses and are much more difficult to drive than smaller vehicles.
                They also require a different kind of license involving a class they must take.
                Not to mention driving long hours to meet deadlines and being completely exhaused while driving these high risk machines.
                <br />
                <br />
                Something else that these drivers must endure is the pain of having to be away from home, friends, and family for days at a time.
                As this is rarely compensated for and can be extremly difficult to deal with, this piles onto just a few of the reasons this job has more risk than reward.
                This makes it easy to see why many people would not begin to consider this job and why many would quit.
                <br />
                <br />
                <div>
                    <img src={image1} alt="Semi-Truck driving through heavy rain" />
                </div>
            </p>
            <h3>What have the major effects been?</h3>
            <p>
                To understand what the effects have been, we must know how the supply chain itself works.
                This living and breathing system is best thought of as a "newtork of connected and interdependent organizations mutually and co-operatively working together or a system that
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

        </div>
    );
}

export default DeepDive;