import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AmazonContext from "../Context/AmazonCloneContext";
const NavBarProdCat = (props) => {
  // const { productCategory } = useContext(AmazonContext);

  return (
    <div>
      <Link className="navbar__link" to={"/product_category/" + props.id +"/products"}>
        <div className="navbar__options">
          <span>{props.categoryName}</span>
        </div>
      </Link>
    </div>
  );
};

export default NavBarProdCat;
