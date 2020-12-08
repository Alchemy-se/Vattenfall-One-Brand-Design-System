import React from "react";
import iconsStyles from './Icons.scss';

const SquareIconBlock = ({title, text, iconToolTip, pinkBg, bgImg}) => {
  return (
    <div className={`vf-col ${iconsStyles.iconGuidelineLargeIconContainer}`}>
      <span 
        className={iconToolTip ? `p-1 vf-tooltip vf-tooltip--blue-solid ${iconToolTip} ${iconsStyles.iconGuidelineLargeIcon} ${pinkBg && iconsStyles.iconGuidelinePinkBG}` : `${iconsStyles.iconGuidelineLargeIcon} ${iconsStyles.iconGuidelinesSmallIcons}`} 
        data-tooltip={iconToolTip}
        style={bgImg && {backgroundImage:`url(${bgImg})`, backgroundPosition: 'center',backgroundSize: 'cover', color: '#ffffff'}}
      />
      {title && 
        <h4>{title}</h4>
      }
      <p>{text}</p>     
    </div>
  );
};

export default SquareIconBlock;