import oneHead from "../assets/img/about_small.png";
import discord from "../assets/img/discord1.png"
export const About = (props) => {
  return (
    <div id="about">
      <div className="row mx-0">
        <div className="col-10 offset-1">
          <div className="row about-body">
            <div className="col-lg-6 align-self-center">
              <div id="about-content" className="row">
                {props.data ? props.data.content.map((data, index) => (
                  <span key={`${data}-${index}`}>{data}</span>
                )) : "loading"}
              </div>
              <div id="about-detail" className="row">
                <div className="col-lg-10 me-auto">
                  <span>{props.data ? props.data.detail : "loading"}</span>
                </div>
              </div>
              <div id="about-button" className="d-flex justify-content-start">
                <img className="discord" src={discord} alt="discord" width="6%" />
                <button type="button" className="btn btn-custom ms-end">{props.data ? props.data.button : 'Loading'}</button>
              </div>
            </div>
            <div id="about-images" className="col-lg-6 align-self-center">
              <img className="oneHead" src={oneHead} alt="oneHead" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
