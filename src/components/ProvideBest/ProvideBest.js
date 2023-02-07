import React from 'react';

const ProvideBest = () => {
    return (
        <section className="provide_best">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="img image">
                <img
                  className="img-fluid"
                  src={require("./../../assets/images/about/provide-furniture.png")}
                  alt=""
                />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="provide_best_desc">
                <h4>Provide the best</h4>
                <h2>Furniture For You</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <p>
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ProvideBest;