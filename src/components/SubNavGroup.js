import { t } from "i18next";

const SubNavGroup = () => {
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
      <ul className="nav d-flex flex-nowrap">
        {items.map((item, idx) => (
          <li className="nav-item" key={idx}>
            <span
              className="nav-link text-muted px-3"
              style={{ whiteSpace: "nowrap" }}
            >
              {t(`${item}`)}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SubNavGroup;
