import React from "react";

const Icons = ({name}) => {

    function getIcon(name) {


        switch (name) {
            case "star":
                return <svg
                    width="100%"
                    height="40px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"

                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
            case "loadder":
                return <svg
                    id='loadder'
                    width="60" height="60" viewBox="0 0 44 44">
                    <circle cx="22" cy="22" r="20" fill="none" stroke="#E5E7EB" strokeWidth="4"/>
                    <circle cx="22" cy="22" r="20" fill="none" stroke="#3c8445" strokeWidth="4" strokeDasharray="125.6" strokeDashoffset="125.6">
                        <animate attributeName="stroke-dashoffset" values="125.6;0" dur="2s" repeatCount="indefinite"/>
                    </circle>
                </svg>
            case "basket" :
                return <svg width="30px"
                            height="30px"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none">
                    <circle cx="7.5" cy="18.5" r="1.5" />
                    <circle cx="16.5" cy="18.5" r="1.5" />
                    <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h2l.6 3m0 0L7 15h10l2-7H5.6z"/>
                </svg>
            default:
                return null
        }
    }

    return (
        <>
            {getIcon(name)}
        </>
    )
}


export default Icons;