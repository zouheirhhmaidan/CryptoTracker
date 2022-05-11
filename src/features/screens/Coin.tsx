import "../style/Coins.css";
import "../style/Coin_1145.css";
import "../style/Coin_700.css";
import "../style/Coin_400.css";
import "../style/Coin_375.css";
const Coin = ({
  name,
  image,
  symbol,
  marketcap,
  price,
  volume,
  priceChange,
}: any) => {
  return (
    <table className="Container">
      <tr className="row">
        <td className="row-image">
          <img src={image} className="img" alt="" />
          <h1 className="h1">{name}</h1>
        </td>
        <td className="symbol">{symbol}</td>
        <td className="symbol price">${price}</td>
        <td className="symbol">${volume.toLocaleString()}</td>
        {priceChange < 0 ? (
          <td className="symbol red">{priceChange.toFixed(2)}</td>
        ) : (
          <td className="symbol">
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          </td>
        )}

        <td className="symbol">
          <p className="coin-marketcap">
            MKT Cap: ${marketcap.toLocaleString()}
          </p>
        </td>
      </tr>
    </table>

    // <div className="coin-container">
    //   <div className="coin-row">
    //     <div className="coin">
    //       <img src={image} alt="crypto" className="img" />
    //       <h1 className="h1">{name}</h1>
    //     </div>
    //     <p className="coin-symbol">{symbol}</p>
    //     <p className="coin-price">${price}</p>
    //     <p className="coin-volume">${volume.toLocaleString()}</p>
    //     {priceChange < 0 ? (
    //       <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
    //     ) : (
    //       <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
    //     )}
    //     <p className="coin-marketcap">MKT Cap: ${marketcap.toLocaleString()}</p>
    //   </div>
    // </div>
  );
};

export default Coin;
