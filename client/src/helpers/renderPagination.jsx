import style from "../components/Pagination/Pagination.module.css";

export default function renderPagination(
  TotalPages,
  visiblePosts,
  functionClick,
  functionPosted,
  localState
) {
  if (TotalPages > 7) {
    return (
      <div className={style.pageContainer}>
        <p className={style.current}>Page: {localState}</p>
        <div className={style.postSelector}>
          <p>Dogs per page: </p>
          <select
            defaultValue={
              sessionStorage.getItem("visiblePosts") || visiblePosts
            }
            onChange={functionPosted}
          >
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
        <div className={style.Pages}>
          {localState === 1 ? null : (
            <a className={style.prev} onClick={functionClick} id="prev"></a>
          )}
          <button id={style.mainpage} onClick={functionClick}>
            1
          </button>
          {localState < 6 ? (
            <div className={style.middlepages}>
              <button onClick={functionClick}>2</button>
              <button onClick={functionClick}>3</button>
              <button onClick={functionClick}>4</button>
              <button onClick={functionClick}>5</button>
              <button onClick={functionClick}>6</button>
              <p>...</p>
            </div>
          ) : localState < TotalPages - 3 ? (
            <div className={style.middlepages}>
              <p>...</p>
              <button onClick={functionClick}>{localState - 2}</button>
              <button onClick={functionClick}>{localState - 1}</button>
              <button onClick={functionClick}>{localState}</button>
              <button onClick={functionClick}>{localState + 1}</button>
              <button onClick={functionClick}>{localState + 2}</button>
              <p>...</p>
            </div>
          ) : null}

          {localState > TotalPages - 4 ? (
            <div className={style.middlepages}>
              <p>...</p>
              <button onClick={functionClick}>{TotalPages - 4}</button>
              <button onClick={functionClick}>{TotalPages - 3}</button>
              <button onClick={functionClick}>{TotalPages - 2}</button>
              <button onClick={functionClick}>{TotalPages - 1}</button>
            </div>
          ) : null}
          <button onClick={functionClick}>{TotalPages}</button>
          {localState === TotalPages ? null : (
            <a className={style.next} onClick={functionClick} id="next"></a>
          )}
        </div>
      </div>
    );
  }
  if (TotalPages === 7) {
    return (
      <div className={style.pageContainer}>
        <div className={style.postSelector}>
          <p>Dogs per page: </p>
          <select
            defaultValue={
              sessionStorage.getItem("visiblePosts") || visiblePosts
            }
            onChange={functionPosted}
          >
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
        <div className={style.Pages}>
          <button onClick={functionClick}>1</button>
          <button onClick={functionClick}>2</button>
          <button onClick={functionClick}>3</button>
          <button onClick={functionClick}>4</button>
          <button onClick={functionClick}>5</button>
          <button onClick={functionClick}>6</button>
          <button onClick={functionClick}>{TotalPages}</button>
        </div>
      </div>
    );
  }
  if (TotalPages < 7) {
    return (
      <div className={style.pageContainer}>
        <div className={style.postSelector}>
          <p>Dogs per page: </p>
          <select
            defaultValue={
              sessionStorage.getItem("visiblePosts") || visiblePosts
            }
            onChange={functionPosted}
          >
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
        <div className={style.Pages}>
          <button onClick={functionClick}>1</button>
          {TotalPages - 1 > 0 ? (
            <button onClick={functionClick}>2</button>
          ) : null}
          {TotalPages - 2 > 0 ? (
            <button onClick={functionClick}>3</button>
          ) : null}
          {TotalPages - 3 > 0 ? (
            <button onClick={functionClick}>4</button>
          ) : null}
          {TotalPages - 4 > 0 ? (
            <button onClick={functionClick}>5</button>
          ) : null}
          {TotalPages - 5 > 0 ? (
            <button onClick={functionClick}>6</button>
          ) : null}
        </div>
      </div>
    );
  }
}
