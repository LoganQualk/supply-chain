import image2 from "./Content/Logan-surprised.jpg";

const About = () => {
    return (
        <div className="content">
            <h1>About</h1>
            <h2>Contact Us</h2>
            <h3>Simon Post - <a href='mail&#116;o&#58;&#37;7&#48;%6&#70;&#37;73tse%&#52;&#48;liv%65&#46;%75%&#54;&#69;&#99;&#46;%65d%75'>post&#115;e&#64;l&#105;ve&#46;&#117;n&#99;&#46;e&#100;u</a></h3>
            <p>
                Hey everyone, I'm Simon.  I am a senior majoring in Computer Science and Information and Library Science.  All my life, my favorite
                hobbies have been computers and technology.  From a young age, I've built computers and played games on them, so they're a huge
                part of my life.  This project appealed to me because I find the supply chain issues we've had recently to be both very interesting
                and also extremely annoying.  It has made my hobbies much more difficult to enjoy and get into.  It was my goal with this project
                to learn more about the supply chain myself and to teach others as well.  I hope you enjoy it and learn something new!
            </p>
            <h3>Logan Qualkenbush - <a href='mai&#108;t&#111;&#58;&#108;%6Fg&#97;%6&#69;%71&#64;li&#37;76e&#46;%7&#53;%&#54;E%&#54;&#51;%2E%6&#53;d%75'>lo&#103;anq&#64;&#108;ive&#46;&#117;nc&#46;&#101;du</a></h3>
            <div className="imageContentLeft">

                <p>
                    Hello! My name is Logan Qualkenbush and I am a senior majoring in Computer Science and Information and Library Science with a minor in Cognitive Science.
                    As someone with their main hobby being PC gaming, I have greatly felt the effects of the supply chain first hand.
                    Last year in December of 2020, I decided it was time to replace my 2012 desktop (out-dated, I know!) and build a new custom one.
                    As of today, I still have not been able to find a new graphics card :( and am still on the market for one.
                    My main hobbies include PC games (CS:GO, Valorant, and Teamfight Tactics), golf (I'm awful and Simon is helping me to get better), and music with my recent obsession being Mac Miller.
                    Follow me on Instagram @Logan_Qualkenbush!
                </p>
                <img src={image2} style={{height: '30ch'}} alt="Logan surprised that he is being photographed" />
            </div>

            <h2>Our Sources</h2>
            <h3>Non-Scholarly</h3>
            <p className="source"><a href="https://www.techspot.com/news/91887-intel-ceo-pat-gelsinger-predicts-chip-shortage-last.html">Chip Shortage</a></p>
            <p className="source"><a href="https://www.smart-trucking.com/truck-driver-shortage/">Truck Driver Shortage</a></p>
            <p className="source"><a href="https://www.cnbc.com/2021/11/10/big-business-bosses-are-warning-that-supply-chain-issues-and-inflation-are-here-to-stay.html">Supply Chain Issues and Inflation</a></p>
            <h3>Scholarly</h3>
            <p className="source"><a href="https://www.nature.com/articles/s41562-020-0896-8">Global Supply Chain Effects of COVID-19</a></p>
            <p className="source"><a href="https://onlinelibrary.wiley.com/doi/full/10.1111/deci.12468">Pandemics and Supply Chain Management Research</a></p>
            <p className="source"><a href="https://onlinelibrary.wiley.com/doi/full/10.1111/jscm.12248">Dancing the Supply Chain</a></p>
            <p className="source"><a href="https://www.theseus.fi/bitstream/handle/10024/503619/Hajdu_Nandor.pdf?sequence=2">COVID-19 and Managing Supply Chain Risks: NVIDIA's GPU shortages</a></p>
            <p className="source"><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3922181">GPU Prices and Cryptocurrency</a></p>
            <h3>Images</h3>
            <p className="source"><a href="https://insights.sap.com/what-is-supply-chain-management-scm/">https://insights.sap.com/what-is-supply-chain-management-scm/</a></p>
            <p className="source"><a href="https://www.smart-trucking.com/truck-driver-shortage/">https://www.smart-trucking.com/truck-driver-shortage/</a></p>
            <p className="source"><a href="https://unsplash.com/photos/gKo1LhXErak">https://unsplash.com/photos/gKo1LhXErak</a></p>
            <p className="source"><a href="https://unsplash.com/">https://unsplash.com/</a></p>
            <p className="source"><a href="https://unsplash.com/s/photos/cpu">https://unsplash.com/s/photos/cpu</a></p>
            <p className="source"><a href="https://unsplash.com/photos/9opiHRPIvR0">https://unsplash.com/photos/9opiHRPIvR0</a></p>
            <p className="source"><a href="https://unsplash.com/photos/JKT_bM_iQxs">https://unsplash.com/photos/JKT_bM_iQxs</a></p>
            <p className="source"><a href="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Producer_Price_Index.svg/1280px-Producer_Price_Index.svg.png">https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Producer_Price_Index.svg/1280px-Producer_Price_Index.svg.png</a></p>
            <p className="source"><a href="https://www.co.shasta.ca.us/images/libraries/hhsa-images/covid/stop-spread-of-germs-that-make-people-sick.tmb-small.png?sfvrsn=dbb8f589_2">https://www.co.shasta.ca.us/images/libraries/hhsa-images/covid/stop-spread-of-germs-that-make-people-sick.tmb-small.png?sfvrsn=dbb8f589_2</a></p>
            <p className="source"><a href="https://media.nationalgeographic.org/assets/photos/569/648/2adb092b-1726-4e56-a0dd-30056756ddae.jpg">https://media.nationalgeographic.org/assets/photos/569/648/2adb092b-1726-4e56-a0dd-30056756ddae.jpg</a></p>
        </div>
    );
}

export default About;