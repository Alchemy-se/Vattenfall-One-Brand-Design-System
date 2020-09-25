import React, { useState } from 'react';
import styles from "./styles.scss";

const DescriptionItem = ({ description }) => {
  const [displayMore, setDisplayMore] = useState(false)

  if (description) {

    description = description.split(" ");

    if (description.length > 6 && !displayMore) {
      description = description.slice(0, 6).join(" ") + "..."
    } else {
      description = description.join(" ")
    }


    return (

      <td className={styles.desc} colSpan="4">
        {description}
        <span
          onClick={() => setDisplayMore(!displayMore)}>
      {displayMore ? "Read less" : "Read more"}
      </span>
      </td>
    );
  }
  return <td colSpan="4" />
};


export default DescriptionItem;
