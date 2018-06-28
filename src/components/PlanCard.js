import React from 'react';
import uidV4 from 'uuid/v4';
import PropTypes from "prop-types";
import PlanItem from "./PlanItem";

const PlanCard = (props) => {

  let { contents, date } = props;

  return (
      <div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              Component
            </p>
            <a href="#" className="card-header-icon" aria-label="more options">
                  <span className="icon">
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
            </a>
          </header>
          <div className="card-content">
            <div className="content">
              {contents.map((item, id) => {
                <div key={id}>
                  <p>
                    {item.name}
                    <i>{item.status}</i>
                  </p>
                </div>
              })}
              <time dateTime={date}>{date}</time>
            </div>
          </div>
          <footer className="card-footer">
            <a href="#" className="card-footer-item">Save</a>
            <a href="#" className="card-footer-item">Edit</a>
            <a href="#" className="card-footer-item">Delete</a>
          </footer>
        </div>
      </div>
  );
};

PlanCard.propTypes = {
  contents: PropTypes.array.require,
  date: PropTypes.string.require,
};


export default PlanCard;
