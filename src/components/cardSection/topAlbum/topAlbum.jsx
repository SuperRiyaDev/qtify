import React, { useEffect, useState } from "react";
import Collapse from '@mui/material/Collapse';
import Card from "../card/card";
import "./topAlbum.css";
import axios from "axios";


const TopAlbum = () => {
  const [album, setAlbum] = useState([]);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const fetchVid = async () => {
    const vid = await axios.get(
      `https://qtify-backend-labs.crio.do/albums/top`
    );
    console.log(vid.data.length, "from top");
    setAlbum(vid.data);
    // return vid.data
  };
  useEffect(() => {
    fetchVid();
  }, []);

  return (
    <div>
      <div className="flex-one">
        <div>Top Album</div>
        <div className="show-all-btn">
        
          <button
          id='feed-button'
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          >{expanded? "collapse":"show all"}</button>
          
        </div>
      </div>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
      <div
        className="topAlbum" >
        {album.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
     </Collapse>
    </div>
  );
};

export default TopAlbum;
