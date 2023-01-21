import React from "react";
import './../styles/loader.css'
import ShimmerSkeleton from "./ShimmerSkeleton";

const Loader = () => {
    return (
        <div className='loader-container'>
            <ShimmerSkeleton />
            <ShimmerSkeleton />
            <ShimmerSkeleton />
            <ShimmerSkeleton />
            <ShimmerSkeleton />
            <ShimmerSkeleton />
            <ShimmerSkeleton />
            <ShimmerSkeleton />
        </div>
    )
}

export default Loader;
