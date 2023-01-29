import React from "react";

const ShimmerSkeleton = () => {
    return (
        <div className="border-2 rounded-xl h-96 w-72 p-3 m-5 shadow-2xl">
            <div className="h-2/3 bg-gray-200 rounded-lg"/>
            <div className="bg-gray-200 my-3 h-5 rounded-lg" />
            <div className="bg-gray-200 my-3 h-5 w-1/2 rounded-lg" />
            <div className="flex items-center justify-between my-6">
                <div className="bg-gray-200 h-5 w-12 rounded-lg" />
                <div className="text-gray-200">•</div>
                <div className="bg-gray-200 h-5 w-12 rounded-lg" />
                <div className="text-gray-200">•</div>
                <div className="bg-gray-200 h-5 w-12 rounded-lg" />
            </div>
        </div>
    )
}

export default ShimmerSkeleton
