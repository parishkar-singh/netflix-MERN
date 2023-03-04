import "./list.scss"
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@material-ui/icons";
import ListItem from "../listItem/ListItem"
import {useRef, useState} from "react";


export default function List() {
    const[slideNumber,setSlideNumber]=useState(0)
    const[isMoved,setIsMoved]=useState(0);
    const listRef=useRef()
    const handleClick=(direction)=>{
        let distance=listRef.current.getBoundingClientRect().x -50
        setIsMoved(true)
        if(direction==="left"&&slideNumber>0){
            listRef.current.style.transform=`translateX(${230+distance}px)`
            setSlideNumber(slideNumber-1)
        }
        if(direction==="right"&& slideNumber<5) {
            setSlideNumber(slideNumber+1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
            // console.log(distance)
    }
    return (
        <div className="list">
          <span className="listTitle">
              Continue to watch
          </span>
            <div className="wrapper">
                <ArrowBackIosOutlined className="sliderArrow left" style={{display:!isMoved&&"none"}} onClick={()=>handleClick("left")}/>
                <div className="container" ref={listRef}>
                    <ListItem index={0}/>
                    <ListItem index={1}/>
                    <ListItem index={2}/>
                    <ListItem index={3}/>
                    <ListItem index={4}/>
                    <ListItem index={5}/>
                    <ListItem index={6}/>
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right"  onClick={()=>handleClick("right")}/>
            </div>
        </div>
    )
}
