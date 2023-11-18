import StyledCards from "./DogCards.module.css";
import { DogCard, Ordering, Pagination } from "../index.components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sliceDogs } from "../../redux/actions";
import splashbckg from "../../content/bckgSplash.svg";

export default function DogCards() {
  // LOCAL STATES
  //* The || statement loads sessionStorage info or the default. This so when ppl comes back from detail or create
  //* can return to the page they were.
  const [currentPage, setPage] = useState(
    Number(sessionStorage.getItem("currentPage")) || 1
  );

  const [visiblePosts, setVisiblePosts] = useState(
    Number(sessionStorage.getItem("visiblePosts")) || 8
  );

  // GLOBAL STATES
  const dispatch = useDispatch();
  let dogsToDisplay = useSelector((state) => state.pgDogs);
  let allDogs = useSelector((state) => state.filteredDogs);

  // VARIABLES AND HELPERS

  let totalPages = Math.ceil(allDogs.length / visiblePosts);
  let navbar = document.getElementById("navbar")
    ? document.getElementById("navbar")
    : {};
  let sticky = 315; // Set this to const as when comp reloads offset will be 0 and will keep It sticky.
  window.onscroll = function () {
    if (window.scrollY >= sticky) {
      navbar.className = `${StyledCards.stickyNav}`;
    } else {
      navbar.className = `${StyledCards.pages_order}`;
    }
  };

  // ON MOUNT/DISMOUNT/UPDATE

  useEffect(() => {
    if (currentPage > totalPages) setPage(1);
    dispatch(sliceDogs(currentPage, visiblePosts));
    sessionStorage.setItem("visiblePosts", visiblePosts);
    sessionStorage.setItem("currentPage", currentPage);
  }, [currentPage, visiblePosts, allDogs]);

  // RENDER

  return (
    <div className={StyledCards.CardsContainer}>
      <img src={splashbckg} alt="" className={StyledCards.splashIMG} />
      <div className={StyledCards.pages_order} id="navbar">
        <Ordering />
        <Pagination
          setPage={setPage}
          totalPages={totalPages}
          setVisiblePosts={setVisiblePosts}
          visiblePosts={visiblePosts}
        />
      </div>
      <div className={StyledCards.cardsMain}>
        {dogsToDisplay.map((dog) => (
          <DogCard dog={dog} key={dog.id} />
        ))}
      </div>
    </div>
  );
}
