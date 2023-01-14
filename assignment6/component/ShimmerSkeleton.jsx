import React from "react";
import './../styles/shimmerLoader.css';

const ShimmerSkeleton = () => {
    return (
        <div className="shimmer-restaurant-container">
            <div className="shimmer-image-background"/>
            <div className="shimmer-content" />
            <div className="shimmer-content" />
            <div className="shimmer-restaurant-info-container">
                <div className="shimmer-sub-content" />
                <div className="shimmer-separator">•</div>
                <div className="shimmer-sub-content" />
                <div className="shimmer-separator">•</div>
                <div className="shimmer-sub-content" />
            </div>
        </div>
    )
}

export default ShimmerSkeleton
