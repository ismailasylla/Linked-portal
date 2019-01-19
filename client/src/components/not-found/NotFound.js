import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="notfound">
      <div className="landing-inner text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              {/* <p className="lead">
                {' '}
                <h1 className="display-4">Page Not Found</h1>
                <p>Sorry, this page does not exist</p>
              </p> */}
              <hr />
              <Link
                to="/"
                className="btn btn-lg btn btn-outline-warning"
                style={{ marginBottom: '100px', marginRight: '20px' }}
              >
                Go Back to The Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
