const NavGroupCategory = () => {
  const items = [
    "Toys & Game",
    "Kids Gift Guide",
    "Shop Toys by Character",
    "Shop Best Selling Toys",
    "Shop Newly Released Toys",
    "Shop Toy Deals",
    "Create a Gift List",
  ];

  return (
    <nav className="nav_group bg-white border-bottom shadow-sm scroll">
      <ul className="nav flex-row flex-nowrap">
        {items.map((item, idx) => (
          <li className="nav-item" key={idx}>
            <a
              href="#"
              className="nav-link text-muted px-3"
              style={{ whiteSpace: "nowrap" }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavGroupCategory;
