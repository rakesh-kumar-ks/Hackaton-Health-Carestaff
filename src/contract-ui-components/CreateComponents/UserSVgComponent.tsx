import React from "react";

const UserSVgComponent:React.FC=()=>{

    return(
        <svg fill="#f0f0f0" viewBox="-3.2 -3.2 38.40 38.40" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
              <linearGradient id="colorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#c0c7c9" />
                    <stop offset="50%" stop-color="#a6adb0" />
                    <stop offset="100%" stop-color="#c0c7c9" />
              </linearGradient>
        </defs>
        <g id="SVGRepo_bgCarrier" stroke-width="0">
              <rect x="-3.2" y="-3.2" width="38.40" height="38.40" rx="19.2" fill="url(#colorGradient)" strokewidth="0">
                    <animate attributeName="fill" values="#c0c7c9; #a6adb0; #c0c7c9" dur="3s" repeatCount="indefinite" />
              </rect>
        </g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
              <title>plus-user-profile</title>
              <path
                    d="M2.016 26.016q0 2.496 1.728 4.224t4.256 1.76h10.016v-2.336q-1.28-0.48-2.368-1.664h-7.648q-0.832 0-1.408-0.576t-0.576-1.408q0.672-2.592 2.944-4.288t5.056-1.728q0.736 0 1.44 0.16 1.184-1.376 2.816-1.856 0.384-1.248 1.248-2.24t2.016-1.504q0.48-1.28 0.48-2.56v-4q0-3.296-2.368-5.632t-5.632-2.368-5.664 2.368-2.336 5.632v4q0 3.168 2.208 5.536-2.4 1.344-4.096 3.552t-2.112 4.928zM10.016 12v-4q0-1.632 1.152-2.816t2.848-1.184 2.816 1.184 1.184 2.816v4q0 1.664-1.184 2.848t-2.816 1.152-2.848-1.152-1.152-2.848zM18.016 24q0 0.832 0.576 1.44t1.408 0.576h2.016v1.984q0 0.832 0.576 1.44t1.408 0.576 1.408-0.576 0.608-1.44v-1.984h1.984q0.832 0 1.408-0.576t0.608-1.44-0.608-1.408-1.408-0.576h-1.984v-2.016q0-0.832-0.608-1.408t-1.408-0.576-1.408 0.576-0.576 1.408v2.016h-2.016q-0.832 0-1.408 0.576t-0.576 1.408z"
                    fill="#f0f0f0"
                    id="userPath"
              >
                    <animateTransform
                          attributeName="transform"
                          attributeType="XML"
                          type="scale"
                          values="1; 1.05; 1"
                          dur="1.5s"
                          repeatCount="indefinite"
                          additive="sum"
                    />
              </path>
              <path
                    d="M18.016 24q0 0.832 0.576 1.44t1.408 0.576h2.016v1.984q0 0.832 0.576 1.44t1.408 0.576 1.408-0.576 0.608-1.44v-1.984h1.984q0.832 0 1.408-0.576t0.608-1.44-0.608-1.408-1.408-0.576h-1.984v-2.016q0-0.832-0.608-1.408t-1.408-0.576-1.408 0.576-0.576 1.408v2.016h-2.016q-0.832 0-1.408 0.576t-0.576 1.408z"
                    fill="#808080"
                    id="plusPath"
              >
                    <animateTransform
                          attributeName="transform"
                          attributeType="XML"
                          type="scale"
                          values="1; 1.1; 1"
                          dur="1s"
                          repeatCount="indefinite"
                          additive="sum"
                    />
              </path>
        </g>
  </svg>

    )


}
export default UserSVgComponent;