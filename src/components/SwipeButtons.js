import React from "react";
import "../styles/SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { IconButton } from "@material-ui/core";

export default function SwipeButtons() {
  return (
    <div className="button">
      <IconButton>
        <ReplayIcon fontSize="large" className="button__replay" />
      </IconButton>
      <IconButton>
        <CloseIcon fontSize="large" className="button__close" />
      </IconButton>
      <IconButton>
        <StarRateIcon fontSize="large" className="button__rate" />
      </IconButton>
      <IconButton>
        <FavoriteIcon fontSize="large" className="button__favorite" />
      </IconButton>
      <IconButton>
        <FlashOnIcon fontSize="large" className="button__flash" />
      </IconButton>
    </div>
  );
}
