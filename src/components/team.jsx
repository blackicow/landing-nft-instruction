import avatar from "../assets/img/avatar.png"

export const Team = (props) => {
  return (
    <div id="team">
      <div className="row mx-0">
        <div className="col-10 offset-1">
          <div id="team-title" className="row">
            <span>{props.data ? props.data.title : "loading"}</span>
          </div>
          <div className="row">
            <div className="col-lg-8">

              <div className="row phone-align">
                {
                  props.data ? props.data.info.map((data, index) => (
                    <div key={`${data}-${index}`} className="col-lg-4">
                      <div className="card">
                        <img src={avatar} className="card-img-top team-image" alt="Team" />
                        {/* <div className="card-body">
                        <p className="card-text text-center">{data.name}</p>
                      </div> */}
                      </div>
                    </div>
                  )) : "loading"
                }
              </div>
            </div>
            <div className="col-lg-4">
              <div id="team-content" className="row">
                <span>{props.data ? props.data.subtitle : "loading"}</span>
              </div>
              <div className="team-detail">
                <span>{props.data ? props.data.detail : "loading"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
