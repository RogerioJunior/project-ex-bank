import hello from '../../assets/img/Bank_72.png'
import './styles.css';

function Home() {

  return (
    
      <div className="home__container">

        <div className="home__title">
          <img src={hello} alt="hello" />
          <div className="home__greeting">
            <h1>Hello Investor</h1>
            <p>Welcome to your Infinity Bank dashboard</p>
          </div>
        </div>

        <div className="cards">
          <div className="cards__left">
            <div className="cards__left__title">
              <div>
                <h1>XSH Stats</h1>
              </div>
              <i className="fa-solid fa-scale-balanced" aria-hidden="true"></i>
            </div>

            <div className="cards__left__cards">
              <div className="card__lef1">
                <h1>Market Cap</h1>
                <p>$268,942.11</p>
              </div>

              <div className="card__lef1">
                <h1>Max Supply</h1>
                <p>$100,000</p>
              </div>

              <div className="card__lef1">
                <h1>Total Minted</h1>
                <p>100,000</p>
              </div>

              <div className="card__lef1">
                <h1>Total Burned</h1>
                <p>6,104</p>
              </div>

              <div className="card__lef1">
                <h1>Total Burned</h1>
                <p>6,104</p>
              </div>

              <div className="card__lef1">
                <h1>Total Burned</h1>
                <p>6,104</p>
              </div>

            </div>

          </div>

          <div className="cards__right">
            <div className="cards__right__title">
              <div>
                <h1>Total Value Locked (TVL)</h1>
                <p>Across all Farms and Pools</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="cards__right__cards">
              <div className="card__right1">
                <h1>$75,300</h1>
              </div>

            </div>
          </div>
        </div>

      </div>
   
  );

};

export default Home;