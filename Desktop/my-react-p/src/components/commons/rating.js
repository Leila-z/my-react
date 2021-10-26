import ReactStars from "react-rating-stars-component";
import React from "react";

export default function rating() {
  return (
    <div>
      <ReactStars
        size={26}
        count={5}
        color="#C4C4C4"
        activeColor="#F5BF75"
        edit={false}
        value={1.5}
        a11y={false}
        isHalf={true}
        emptyIcon={<i className="icon-famous_favorite_featured_star_super_icon" />}
        halfIcon={<i className="icon-star_half_alt_icon" />}
        filledIcon={<i className="icon-famous_favorite_featured_star_super_icon" />}
      />
    </div>
  );
}


