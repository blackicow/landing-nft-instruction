import { useState } from "react";

export const Roadmap = (props) => {
  const [category, setCategory] = useState(5);
  return (
    <div id="roadmap">
      <div className="row mx-0">
        <div className="col-10 offset-1">
          <div className="row">
            <div id="roadmap-title" className="row">
              <span>{props.data ? props.data.title : "loading"}</span>
            </div>

            <div className="row" >
              <div className="col-lg-6">
                <div id="roadmap-phase" className="row">
                  <span>{props.data ? props.data.phase1 : "loading"}</span>
                </div>
                <div className="timeline">
                  <div className="container right">
                    <div className="content">
                      <h2 onClick={() => setCategory(0)} className={category === 0 ? "active" : ""}>Pre Launch</h2>
                    </div>
                  </div>
                  <div className="container right">
                    <div className="content">
                      <h2 onClick={() => setCategory(1)} className={(category === 1 || category === 2 || category === 3 || category === 4 || category === 5) ? "active" : ""}>Launch</h2>
                      <ul className="list-group list-group-horizontal">
                        <li className={category === 2 ? "active list-group-item" : "list-group-item"} onClick={() => setCategory(2)}>25% SOLD</li>
                        <li className={category === 3 ? "active list-group-item" : "list-group-item"} onClick={() => setCategory(3)}>50% SOLD</li>
                        <li className={category === 4 ? "active list-group-item" : "list-group-item"} onClick={() => setCategory(4)}>75% SOLD</li>
                        <li className={category === 5 ? "active list-group-item" : "list-group-item"} onClick={() => setCategory(5)}>100% SOLD</li>
                      </ul>
                    </div>
                  </div>
                  <div className="container right">
                    <div className="content">
                      <h2 onClick={() => setCategory(6)} className={category === 6 ? "active" : ""}>Development</h2>
                    </div>
                  </div>
                </div>
                <div id="roadmap-phase" className="row">
                  <span>{props.data ? props.data.phase2 : "loading"}</span>
                </div>
                <div className="timeline">
                  <div className="container right">
                    <div className="content">
                      <h2 onClick={() => setCategory(7)} className={category === 7 ? "active" : ""}>Integration</h2>
                    </div>
                  </div>
                </div>
                <div id="roadmap-phase" className="row">
                  <span>{props.data ? props.data.phase3 : "loading"}</span>
                </div>
                <div className="timeline">
                  <div className="container right">
                    <div className="content">
                      <h2 onClick={() => setCategory(8)} className={category === 8 ? "active" : ""}>Expansion</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="roadmap-content row">
                  <span>{props.data ? props.data.subtitles[category] : "loading"}</span>
                  {props.data ? props.data.contents[category].map((data, index) => (
                    <div key={`${data}-${index}`}>
                      <span>- {data.subtitle}</span>
                      <ul>
                        {data.detail
                          ? data.detail.map((data, index) => (
                            <li key={`${data}-${index}`}>{data}</li>
                          ))
                          : "loading"}
                      </ul>
                    </div>
                  )) : "loading"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
