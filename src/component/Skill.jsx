import React from 'react';

const Skill = () => {
    return (
        <>
         {/* skill section */}
      <div className="conatainer bg-gray txtc-blue">
        <p className="skill-title "> My Skill</p>

        <div className="row">
          <div className="col-33 p-20">
            <p className="skill-text">React js</p>
            <p className="skill-sub-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
              nesciunt.
            </p>
          </div>
          <div className="col-33 p-20">
            <p className="skill-text"> HTML</p>
            <p className="skill-sub-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, ducimus
            </p>
          </div>
          <div className="col-33 p-20">
            <p className="skill-text">CSS</p>
            <p className="skill-sub-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              consequatur
            </p>
          </div>
        </div>
      </div>
      {/* End skill section */}
        </>
    );
};

export default Skill;