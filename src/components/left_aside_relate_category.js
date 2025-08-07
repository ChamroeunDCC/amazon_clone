export default function LeftAsideRelateCategory() {
  return (
    <div className="left_aside_relate_category">
      <div className="inner_left_aside container">
        <h6 className="fw-bold">Department</h6>
        <ul>
          <li>
            <a href="">Toys & Games</a>
          </li>
          <li>
            <a href="">Baby & Crafts Supplies</a>
          </li>
          <li>
            <a href="">Building Toys</a>
          </li>
          <li>
            <a href="">Dolls & Accessories</a>
          </li>
          <li>
            <a href="">Kid's Dress Up & Pretend Play</a>
          </li>
          <li>
            <a href="">Games & Acessories</a>
          </li>
          <li>
            <a href="">Kid's Electronics</a>
          </li>
          <li>
            <a href="">Learning & Education Toys</a>
          </li>
          <li>
            <a href="">Novelty Toys & Amusements</a>
          </li>
          <li>
            <a href="">Kid's Party Supplies</a>
          </li>
          <li>
            <a href="">Puppets & Puppet Theaters</a>
          </li>
          <li>
            <a href="">Puzzles</a>
          </li>
          <li>
            <a href="">Hobby remote & App Controlled</a>
          </li>
          <li>
            <a href="">Sports & Outdoor Play Toys</a>
          </li>
          <li>
            <a href="">Toy Figures & Playsets</a>
          </li>
          <li>
            <a href="">Tricycles, Scooters & Wagons</a>
          </li>
        </ul>

        <h6 className="fw-bold">Feature Characters & Brands</h6>
        <ul>
          <li>
            <a href="">Barbie</a>
          </li>
          <li>
            <a href="">Star wars</a>
          </li>
          <li>
            <a href="">Marvel</a>
          </li>
          <li>
            <a href="">Pokemon</a>
          </li>
          <li>
            <a href="">Disney Princess</a>
          </li>
          <li>
            <a href="">Little People</a>
          </li>
          <li>
            <a href="">Lego Minifigures</a>
          </li>
        </ul>

        <h6 className="fw-bold">Customer Reviews</h6>
        <div className="star_rate">
          <a className="ms-4" href="#">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <label style={{ fontSize: "12px", marginLeft: "5px" }}> & Up</label>
          </a>
        </div>
        <div className="star_rate">
          <a className="ms-4" href="#">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <label style={{ fontSize: "12px", marginLeft: "5px" }}> & Up</label>
          </a>
        </div>
        <div className="star_rate">
          <a className="ms-4" href="#">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <label style={{ fontSize: "12px", marginLeft: "5px" }}> & Up</label>
          </a>
        </div>
        <div className="star_rate">
          <a className="ms-4" href="#">
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <label style={{ fontSize: "12px", marginLeft: "5px" }}> & Up</label>
          </a>
        </div>

        <h6 className="fw-bold mt-2">Price</h6>
        <ul>
          <li>
            <a href="">Under 25$</a>
          </li>
          <li>
            <a href="">25$ - 50$</a>
          </li>
          <li>
            <a href="">50$ - 100$</a>
          </li>
          <li>
            <a href="">100 - 200$</a>
          </li>
          <li>
            <a href="">200 - Above</a>
          </li>
        </ul>
        <div>
          <form className="d-flex">
            <input
              className="rounded ps-2"
              style={{ width: "80px", fontSize: "14px" }}
              type="text"
              placeholder=" $Min"
            />
            <input
              className="rounded ps-2 ms-1"
              style={{ width: "80px", fontSize: "14px" }}
              type="text"
              placeholder=" $Max"
            />
            <button
              type="button"
              style={{ fontSize: "10px" }}
              className="btn btn-info rounded ps-2 pe-2 ms-2"
            >
              Go
            </button>
          </form>
        </div>

        <h6 className="fw-bold mt-4">Interest</h6>
        <div className="ms-3">
          <div className="d-flex align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkboxNoLabel"
              value=""
              aria-label="..."
            />
            <label style={{ marginTop: "5px" }}>Animals & Nature</label>
          </div>
          <div className="d-flex align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkboxNoLabel"
              value=""
              aria-label="..."
            />
            <label style={{ marginTop: "5px" }}>Anime & Manga</label>
          </div>
          <div className="d-flex align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkboxNoLabel"
              value=""
              aria-label="..."
            />
            <label style={{ marginTop: "5px" }}>Comics</label>
          </div>
          <div className="d-flex align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkboxNoLabel"
              value=""
              aria-label="..."
            />
            <label style={{ marginTop: "5px" }}>Fantasy & Sci-Fi</label>
          </div>
          <div className="d-flex align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkboxNoLabel"
              value=""
              aria-label="..."
            />
            <label style={{ marginTop: "5px" }}>Fashion</label>
          </div>
          <div className="d-flex align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkboxNoLabel"
              value=""
              aria-label="..."
            />
            <label style={{ marginTop: "5px" }}>Learning</label>
          </div>
          <div className="d-flex align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkboxNoLabel"
              value=""
              aria-label="..."
            />
            <label style={{ marginTop: "5px" }}>Music</label>
          </div>
          <div className="d-flex align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkboxNoLabel"
              value=""
              aria-label="..."
            />
            <label style={{ marginTop: "5px" }}>Occupations</label>
          </div>
          <div className="d-flex align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkboxNoLabel"
              value=""
              aria-label="..."
            />
            <label style={{ marginTop: "5px" }}>Sports</label>
          </div>
          <div className="d-flex align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkboxNoLabel"
              value=""
              aria-label="..."
            />
            <label style={{ marginTop: "5px" }}>TV & Movies</label>
          </div>
          <div className="d-flex align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkboxNoLabel"
              value=""
              aria-label="..."
            />
            <label style={{ marginTop: "5px" }}>Transportation</label>
          </div>
          <div className="d-flex align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkboxNoLabel"
              value=""
              aria-label="..."
            />
            <label style={{ marginTop: "5px" }}>Video Games</label>
          </div>
        </div>
      </div>
    </div>
  );
}
