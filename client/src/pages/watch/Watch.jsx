import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video
                className="video"
                autoPlay
                progress
                controls
                src="https://file-examples.com/storage/fe7e2bfeed6401e75b22832/2017/04/file_example_MP4_1280_10MG.mp4"
            />
        </div>
    );
}
