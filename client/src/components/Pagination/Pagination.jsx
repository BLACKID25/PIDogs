import { renderPagination } from "../../helpers";
import { useEffect, useState } from "react";

export default function Pagination(props) {
  // LOCAL STATES
  const [currentButton, setButton] = useState(
    Number(sessionStorage.getItem("currentPage") || 1)
  );
  const { totalPages } = props;

  useEffect(() => {
    if (totalPages < currentButton) setButton(1);
  }, [currentButton, totalPages]);

  // HANDLERS

  function handleClick(event) {
    if (event.target.innerHTML) {
      props.setPage(Number(event.target.innerHTML));
      setButton(Number(event.target.innerHTML));
    } else {
      if (event.target.id === "next") {
        props.setPage(Number(sessionStorage.getItem("currentPage")) + 1);
        setButton(Number(sessionStorage.getItem("currentPage")) + 1);
      } else {
        props.setPage(Number(sessionStorage.getItem("currentPage")) - 1);
        setButton(Number(sessionStorage.getItem("currentPage")) - 1);
      }
    }
  }

  function handleAmmountPosted(event) {
    props.setVisiblePosts(Number(event.target.value));
  }

  // RENDER

  return renderPagination(
    totalPages,
    props.setVisiblePosts,
    handleClick,
    handleAmmountPosted,
    currentButton
  );
}
