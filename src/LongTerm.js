import stopSpread from './Content/stopSpread.png'
import virus from './Content/virus.jpg'

const LongTerm = () => {
    return (
        <div className="content">
            <h1>Long-Term</h1>
            <h3>How will the supply chain issues end?</h3>
            <p>
                In the article <a href="https://www.nature.com/articles/s41562-020-0896-8">"Global supply-chain
                    effects of COVID-19 control measures"</a>, researchers ponder the various ways to end the supply chain issues.
                There are multiple ways to end the supply chain issues, but none of them are easy.  With regards to computing technologies, they
                are often manufactured in other countries.  Thus, in order to be able to fix their supply chain, global production and shipping
                issues will need to be addressed.  In order to do this, restrictions and lockdowns around the
                world will need to end or be lightened.  This will allow production to ramp up, and shipping
                time to decrease drastically.  Unfortunately, putting an end to these restrictions all at once is not a viable solution.  It could
                lead to unsafe working conditions, and further spikes in Covid, causing the supply chain issues to get even worse.
            </p>

            <div className="imageContentLeft">
                <div>
                    <p>
                        Another option is to drastically tighten restrictions for a short amount of time.  This would definitely hurt
                        the supply chain in the short term.  However, during this time we would (hopefully) be able to get Covid under control,
                        and then be able to remove the restrictions altogether, without risk of reinstating them.  However, this is
                        unlikely to work considering how the public (especially in America) has reacted poorly to lockdowns in the past.
                    </p>
                    <p>
                        Lastly, they ponder the idea of a "go-slow" approach.  In this, restrictions would slowly be lifted over time, until
                        we are back to normal.  The hope for this is that it wouldn't cause any massive spikes in Covid, thus not exacerbating
                        supply chain issues.  As the restrictions are lifted, global production would slowly ramp up and shipping times
                        would continue to decrease.  At the end of the day, the supply chain, especially regarding computing technologies,
                        is an extremely tricky topic that doesn't have an easy fix.
                    </p>
                </div>

                <img src={stopSpread} alt={stopSpread} />
            </div>

            <h3>When can we expect supply chain problems to end?</h3>
            <p>
                Unfortunately, it's almost impossible to tell exactly when the supply chain problems will end.  The shortages are
                intrinsically linked with Covid, so until the global pandemic eases up, we are unlikely to have a fully functioning
                supply chain.  In terms of computing technologies specifically, it is feasible that shortages last until at least 2023, as stated by Intel CEO
                Pat Gelsinger in <a href="https://www.techspot.com/news/91887-intel-ceo-pat-gelsinger-predicts-chip-shortage-last.html">this article</a>.
                All we can do is hope that there are no more setbacks, as this doesn't seem like it will be fixed in the short term.
            </p>
            <h3>Will these supply chain issues reoccur?</h3>
            <div className="imageContentRight">
                <img src={virus} alt={virus} style={{height: '20ch'}}/>
                <p>
                    These supply chain issues will likely ease up within the next couple of years.  What matters most is how we learn from
                    these problems and make sure they don't happen again.  Covid-19 is likely not the last pandemic the world will ever
                    experience.  Thus, when the next pandemic hits, measures need to be in place that ensure the supply chain
                    doesn't fall apart.
                </p>
            </div>
            <p>
                In <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/deci.12468">Pandemics and
                    Supply Chain Management Research: Toward a Theoretical Toolbox</a>, Craighead, Ketchen Jr., and Darby talk
                about the concept of <em>transiliency</em>.  Transiliency is "the ability to simultaneously restore some processes around
                and change - often radically - others."  Essentially, it is the ability to quickly adapt.  When the pandemic first hit,
                people weren't ready for it, so adapting was extremely difficult.  Since the supply chain is a massive, elaborate web
                of manufacturers, sellers, and shipping networks, as soon as some of the parts began to have trouble, the supply chain as
                a whole began to break down as well.  Thus, these issues are likely to reoccur in the future, but if we are proactive in preparing for it,
                we will likely be able to reduce the negative impact. By making our supply chain much more transilient, it will be able to
                easily adapt to any problems, including another pandemic.
            </p>
        </div>
    );
}

export default LongTerm;