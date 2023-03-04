import React from "react";
import {InfoOutlined, PlayArrow} from "@material-ui/icons";
import "./featured.scss"
export default function Featured() {

    return (
        <div>
            <div className="featured">
                <img
                     src="https://images.pexels.com/photos/15521519/pexels-photo-15521519.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                     alt=""/>
                <div className="info">
                    <img src="https://cdn.theplaylist.net/wp-content/uploads/2016/04/03120603/wakanda-forever-black-panther.jpg" alt=""/>
                    <span className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid aperiam cumque dicta dolorum expedita fugit incidunt itaque, laudantium maxime odio praesentium quas quia reiciendis repellat sunt tempora tenetur voluptatum?
                    </span>
                    <div className="buttons">
                        <button className="play"></button>
                        <PlayArrow/>
                        <span>Play</span>
                        <button className="more"></button>
                        <InfoOutlined/>
                        <span>Info</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
