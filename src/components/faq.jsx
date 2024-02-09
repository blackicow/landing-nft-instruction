export const Faq = (props) => {
  return (
    <div id="faq">
      <div className="row mx-0">
        <div className="col-10 offset-1">
          <div id="faq-title" className="row">
            <span>{props.data ? props.data.title : "loading"}</span>
          </div>
          <div id="faq-accordion" className="row">
            <div className="accordion" id="accordion">
              {props.data ? props.data.content.map((data, index) => (
                <div key={index + 20} className="accordion-item" >
                  <h2 className="accordion-header" id={`heading${index + 20}`}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index + 20}`} aria-expanded="false" aria-controls={`collapse${index + 20}`}>
                      {data.subtitle}
                    </button>
                  </h2>
                  <div id={`collapse${index + 20}`} className="accordion-collapse collapse" aria-labelledby={`heading${index + 20}`} data-bs-parent="#accordion">
                    <div className="accordion-body">
                      {data.detail}
                    </div>
                  </div>
                </div>
              )) : "loading"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
