
import MovieCard from "./components/MovieCard";
import MyNavbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <MyNavbar />

      <main className="p-3">
        <div className="row">
          <div className="col-4">
            <MovieCard title="Ghilli - (2004)" image="https://assetscdn1.paytm.com/images/cinema/Ghilli--705x750-d432bf10-f7b9-11ee-b91f-b3d5cfcdb1b8.jpg" desc="Velu, an aspiring Kabaddi player, is in Madurai to participate in one of the regional matches when he rescues Dhanalakshmi from Muthupandi, a powerful man keen on marrying the girl against her wishes." />
          </div>
          <div className="col-4">
            <MovieCard title="Dheena - (2001)" image="https://m.media-amazon.com/images/S/pv-target-images/24f562de65ba61e8c0e4f3057f74cf34c068fb9b5f703f6f1ced73d4c1c2ec93.jpg" desc="Dheena, a gangster's confidante, learns that his brother has fallen for the gangster's sister. However, her accidental death leads to a precarious situation after the gangster vows to kill her lover." />
          </div>
          <div className="col-4">
            <MovieCard title="Mankatha - (2011)" image="https://m.media-amazon.com/images/M/MV5BZjEwYjkxZGEtMjZlMy00MDZhLTk0MWYtNDY0NTZiNmZkM2Q4XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg" desc="Inspector Vinayak is suspended after he lets a smuggler escape. He then meets a group of men who plan to whisk away 500 crore belonging to a gangster. He promises to help them for a share in the loot." />
          </div>
        </div>
      </main>

    </div>
  )
}

export default App;
