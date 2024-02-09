import parityImage from "../assets/img/parity.png";

export const Parity = (props) => {
  return (
    <div id="parity">
      <div className="row mx-0">
        <div className="col-10 offset-1">
          <div className="row parity-body">
            <div className="col-lg-6">
              <div id="parity-title" className="row">
                <span>{props.data ? props.data.title : "loading"}</span>
              </div>
              <div id="parity-content" className="row">
                <span>{props.data ? props.data.content : "loading"}</span>
              </div>
              <div id="parity-detail-title" className="row">
                <span>{props.data ? props.data.detail_title : "loading"}</span>
              </div>
              <div id="parity-detail" className="row">
                <ul>
                  {props.data ? props.data.detail.map((data, index) => (
                    <li key={`${data}-${index}`}>{data}</li>
                  )) : "loading"}
                </ul>
              </div>
            </div>
            <div id="parity-image" className="col-lg-6 text-center">
              <img className="parity" src={parityImage} alt="Parity" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
