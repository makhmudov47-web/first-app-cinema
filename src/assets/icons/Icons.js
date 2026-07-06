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
                    <circle cx="22" cy="22" r="20" fill="none" stroke="#3c8445" strokeWidth="4" strokeDasharray="125.6"
                            strokeDashoffset="125.6">
                        <animate attributeName="stroke-dashoffset" values="125.6;0" dur="2s" repeatCount="indefinite"/>
                    </circle>
                </svg>
            case "basket" :
                return <svg width="30px"
                            height="30px"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none">
                    <circle cx="7.5" cy="18.5" r="1.5"/>
                    <circle cx="16.5" cy="18.5" r="1.5"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M3 5h2l.6 3m0 0L7 15h10l2-7H5.6z"/>
                </svg>
            case "remover" :
                return <svg width="35px"
                            height="35px"
                            viewBox="0 0 128 128"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true" role="img"
                            className="iconify iconify--noto"
                            preserveAspectRatio="xMidYMid meet">

                    <path
                        d="M58.9 78.6l-41.3 41.9c-1.5 1.5-3.2 2.5-5 3c4.1 1.2 8.6.2 11.8-3l38.2-38.1c.8-.8 2.1-.8 2.8 0l-3.7-3.8c-.7-.8-2-.8-2.8 0z"
                        fill="#c33">

                    </path>

                    <path
                        d="M82.3 65.4c-.8-.8-.8-2 0-2.8l38.2-38.1c4.7-4.7 4.7-12.3 0-17s-12.2-4.7-16.9 0L65.4 45.6c-.8.8-2 .8-2.8 0L24.5 7.5c-4.7-4.7-12.3-4.7-17 0c-.4.4-.7.8-1 1.2c.2-.3.4-.5.6-.7c4.7-4.6 10.1-2.5 14.8 2.2l37.6 38.5c.8.8 2 .8 2.8 0l39.3-39.2c4.7-4.7 9.4-5.1 14.1-.4s3.9 9.6-.8 14.3L75.6 62.6c-.8.8-.8 2 0 2.8c0 0 38.1 38.2 38 38.2c4.7 4.7 6.5 10 1.8 14.7s-10.6 3.5-15.3-1.1l3.4 3.4c4.7 4.7 12.3 4.7 17 0s4.7-12.2 0-16.9c0-.1-38.2-38.3-38.2-38.3z"
                        fill="#c33">

                    </path>

                    <path
                        d="M115.4 118.3c4.7-4.7 2.9-10-1.8-14.7c.1 0-38-38.2-38-38.2c-.8-.8-.8-2 0-2.8l39.3-39.2c4.7-4.7 5.5-9.6.8-14.3s-9.4-4.3-14.1.4L62.3 48.7c-.8.8-2 .8-2.8 0L21.9 10.2C17.2 5.5 11.8 3.4 7.1 8c-.2.2-.4.4-.6.7c-3.7 4.7-3.3 11.4 1 15.7l38.1 38.2c.8.8.8 2.1 0 2.8L7.5 103.5c-4.7 4.7-4.7 12.3 0 17c1.5 1.5 3.2 2.5 5 3c1.8-.6 3.6-1.6 5-3l41.3-41.9c.8-.8 2.1-.8 2.8 0l3.7 3.8l34.7 34.8c4.8 4.6 10.7 5.8 15.4 1.1z"
                        fill="#f44336">

                    </path>

                    <g fill="#ffffff">

                        <path
                            d="M55 56.4c-1.1-1.6-32.3-33.1-32.3-33.1s-2.3-2.6-4.7-.8c-2.2 1.7-1.1 4.3.1 5.6s29 29.7 30.4 30.9c1.3 1.2 3.9 1.4 5.5.6s1.8-2.1 1-3.2z"
                            opacity=".2">

                        </path>

                        <circle cx="12.2" cy="19" r="3.3" opacity=".2">

                        </circle>

                    </g>

                    <path
                        d="M72.1 81.8c1.1 1.6 32.8 32.6 32.8 32.6s2.3 2.6 4.7.7c2.2-1.7 1-4.3-.2-5.6c-1.2-1.3-29.4-29.3-30.8-30.5c-1.3-1.2-3.9-1.3-5.5-.5s-1.8 2.2-1 3.3z"
                        opacity=".2" fill="#ffffff">

                    </path>

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