import home_image from "../assets/img/home.png";

export const Home = (props) => {
  return (
    <div id="home">
      <div className="row mx-0">
        <div className="col-lg-11 offset-lg-1">
          <div className="home-body row">
            <div className="col-lg-4 align-self-center">
              <div id="home-content" className="row">
                {props.data ? props.data.content.map((data, index) => (
                  <span key={`${data}-${index}`}>{data}</span>
                )) : "loading"}
              </div>
              <div id="home-detail" className="row">
                <span>{props.data ? props.data.detail : "loading"}</span>
              </div>
              <button type="button" className="btn btn-custom">{props.data ? props.data.button : 'Loading'}</button>
            </div>
            <div id="home-image" className="col-lg-8 text-center align-self-end">
              <img className="brains-group" src={home_image} alt="Brains Group" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
