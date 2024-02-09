export const Perks = (props) => {
  return (
    <div id="perks">
      <div className="row mx-0">
        <div className="col-10 offset-1">
          <div className="row">
            <div id="perks-content">
              <span>{props.data ? props.data.title : "loading"}</span>
            </div>
          </div>
          <div id="perks-accordion" className="row">
            <div className="col-lg-6">
              <div className="accordion" id="accordion1">
                {props.data ? props.data.detail1.map((data, index) => (
                  <div key={index} className="accordion-item" >
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button className={index === 0 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                        {data.title}
                      </button>
                    </h2>
                    <div id={`collapse${index}`} className={index === 0 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby={`heading${index}`} data-bs-parent="#accordion1">
                      <div className="accordion-body">
                        {data.content}
                      </div>
                    </div>
                  </div>
                )) : "loading"}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordion" id="accordion2">
                {props.data ? props.data.detail2.map((data, index) => (
                  <div key={index + 5} className="accordion-item" >
                    <h2 className="accordion-header" id={`heading${index + 5}`}>
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index + 5}`} aria-expanded="false" aria-controls={`collapse${index + 5}`}>
                        {data.title}
                      </button>
                    </h2>
                    <div id={`collapse${index + 5}`} className="accordion-collapse collapse" aria-labelledby={`heading${index + 5}`} data-bs-parent="#accordion2">
                      <div className="accordion-body">
                        {data.content}
                      </div>
                    </div>
                  </div>
                )) : "loading"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
