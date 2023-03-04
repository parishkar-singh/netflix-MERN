import React from "react";
import {InfoOutlined, PlayArrow} from "@material-ui/icons";
import "./featured.scss"

export default function Featured({type}) {

    return (
        <div>
            <div className="featured">
                {type&&(
                    <div className="category">
                        <span>{type==="movie"?"Movies":"Series"}</span>
                        <select name="genre" id="genre">
                            <option>Genre</option>
                            <option value="adventure" >Adventure</option>
                            <option value="comedy" >comedy</option>
                            <option value="crime" >crime</option>
                            <option value="fantasy" >fantasy</option>
                            <option value="historical" >historical</option>
                            <option value="horror" >horror</option>
                            <option value="sci-fi" >sci-fi</option>
                            <option value="drama" >drama</option>
                        </select>
                    </div>
                )}
                <img
                    src="https://images.pexels.com/photos/15521519/pexels-photo-15521519.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                    alt=""/>
                <div className="info">
                    <img
                        src="https://cdn.theplaylist.net/wp-content/uploads/2016/04/03120603/wakanda-forever-black-panther.jpg"
                        alt=""/>
                    <span className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid aperiam cumque dicta dolorum expedita fugit incidunt itaque, laudantium maxime odio praesentium quas quia reiciendis repellat sunt tempora tenetur voluptatum?
                    </span>
                    <div className="buttons">
                        <button className="play">
                            <PlayArrow/>
                            <span>Play</span>
                        </button>
                        <button className="more">

                            <InfoOutlined/>
                            <span>Info</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
