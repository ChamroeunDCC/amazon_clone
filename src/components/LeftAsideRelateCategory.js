export default function LeftAsideRelateCategory() {
  return (
    <div className="left_aside_relate_category d-none d-lg-block mt-3">
      <div className="inner_left_aside container">
        <h6 className="fw-bold">Department</h6>
        <ul>
          <li>
            <div>Toys & Games</div>
          </li>
          <li>
            <div>Baby & Crafts Supplies</div>
          </li>
          <li>
            <div>Building Toys</div>
          </li>
          <li>
            <div>Dolls & Accessories</div>
          </li>
          <li>
            <div>Kid's Dress Up & Pretend Play</div>
          </li>
          <li>
            <div>Games & Acessories</div>
          </li>
          <li>
            <div>Kid's Electronics</div>
          </li>
          <li>
            <div>Learning & Education Toys</div>
          </li>
          <li>
            <div>Novelty Toys & Amusements</div>
          </li>
          <li>
            <div>Kid's Party Supplies</div>
          </li>
          <li>
            <div>Puppets & Puppet Theaters</div>
          </li>
          <li>
            <div>Puzzles</div>
          </li>
          <li>
            <div>Hobby remote & App Controlled</div>
          </li>
          <li>
            <div>Sports & Outdoor Play Toys</div>
          </li>
          <li>
            <div>Toy Figures & Playsets</div>
          </li>
          <li>
            <div>Tricycles, Scooters & Wagons</div>
          </li>
        </ul>

        <h6 className="fw-bold">Feature Characters & Brands</h6>
        <ul>
          <li>
            <div>Barbie</div>
          </li>
          <li>
            <div>Star wars</div>
          </li>
          <li>
            <div>Marvel</div>
          </li>
          <li>
            <div>Pokemon</div>
          </li>
          <li>
            <div>Disney Princess</div>
          </li>
          <li>
            <div>Little People</div>
          </li>
          <li>
            <div>Lego Minifigures</div>
          </li>
        </ul>

        <h6 className="fw-bold">Customer Reviews</h6>
        <div className="star_rate">
          <div className="ms-4">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <label style={{ fontSize: "12px", marginLeft: "5px" }}> & Up</label>
          </div>
        </div>
        <div className="star_rate">
          <div className="ms-4">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <label style={{ fontSize: "12px", marginLeft: "5px" }}> & Up</label>
          </div>
        </div>
        <div className="star_rate">
          <div className="ms-4">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <label style={{ fontSize: "12px", marginLeft: "5px" }}> & Up</label>
          </div>
        </div>
        <div className="star_rate">
          <div className="ms-4">
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <label style={{ fontSize: "12px", marginLeft: "5px" }}> & Up</label>
          </div>
        </div>

        <h6 className="fw-bold mt-2">Price</h6>
        <ul>
          <li>
            <div>Under 25$</div>
          </li>
          <li>
            <div>25$ - 50$</div>
          </li>
          <li>
            <div>50$ - 100$</div>
          </li>
          <li>
            <div>100 - 200$</div>
          </li>
          <li>
            <div>200 - Above</div>
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
