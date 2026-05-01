import React from 'react';

const Loading = () => {
    return (
        <div className="flex h-[85vh] items-center justify-center">
            {/* global loading */}
            <span className="loading loading-infinity loading-xl"></span>
        </div>
    );
};

export default Loading;