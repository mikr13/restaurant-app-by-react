import React from 'react';

export const Loading = () => {
    return(
        <div className="col-12 load-spin">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary load-spin"></span>
            <h3 align="center">Loading</h3>
        </div>
    );
};