import Carousel from './Carousel'

const Home = () => {
    return (
        <div className="content">
            <h1>The Supply Chain and its Downfall</h1>
            <Carousel />
            <h2>Summary</h2>
            <p>
                Modern society relies on the convenience provided by the well-oiled machine that is the supply chain.
                Feeling the impact of COVID-19, the supply chain has experienced massive detrimental effects, especially with regards to technological components.  
                Thus, many companies, manufacturers, and consumers that rely on computing technologies have suffered.  
                They have faced extreme difficulties when attempting to replace or upgrade any technological components.  
                In this project, we will investigate the reasons behind these complications and how this will affect society long-term.
            </p>
        </div>
    );
}

export default Home;