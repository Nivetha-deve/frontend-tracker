// import styled from "styled-components";


// export const AppAlignment = styled.div`
//   text-align: center;
// `


// export const Maindivline = styled.div`
//   display: flex;
//   margin-left: 5%;
//   font-family: sans-serif;
// `;

// export const Signbutt = styled.button`
//   height: 2%;
//   width: 10%;
//   border-radius:8px;
//   margin-top: 30px;
//   padding: 10px;
//   margin-left: 3%;
//   border-color: #03a9f4;
//   border: 1px solid #03a9f4;
//   background-color: #f8fdff;
//   color: #03a9f4;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: clip;
//   &:hover {
//     background-color: #03a9f4;
//     color: white;
//     .Plinthird {
//       color: white;
//     }
//   }
// `;

// export const Plinthird = styled.a`
//   color: #white;
  
  
//   &:hover {
//     color: white;
//   }
// `;

// export const Plinkone = styled.p`
//   margin-top: 41px;
//   color: #5a6b7b;
//   font-size: 15.8px;
//   &:hover {
//     color: #03a9f4;
//   }
// `;

// export const Plinksecond = styled.p`
//   margin-top: 41px;
//   color: #5a6b7b;
//   font-size: 15.8px;
//   &:hover {
//     color: #03a9f4;
//   }
// `;

import { Link } from "react-router-dom";

const AppAlignment = () => (
  <div className="text-center">
    {/* Content goes here */}
  </div>
);

const Maindivline = () => (
  <div className="flex ml-5 font-sans">
    {/* Content goes here */}
  </div>
);

const Signbutt = () => (
  <button className="h-8 w-24 rounded-md mt-8 px-4 ml-3 border border-blue-500 bg-blue-50 text-blue-500 whitespace-nowrap overflow-hidden text-clip hover:bg-blue-500 hover:text-white">
    <span className="Plinthird">Button Text</span>
  </button>
);

const Plinthird = () => (
  <a className="text-white hover:text-white">
    {/* Link text */}
  </a>
);

const Plinkone = () => (
  <p className="mt-10 text-gray-500 text-sm hover:text-blue-500">
    {/* Paragraph text */}
  </p>
);

const Plinksecond = () => (
  <p className="mt-10 text-gray-500 text-sm hover:text-blue-500">
    {/* Paragraph text */}
  </p>
);

export { AppAlignment, Maindivline, Signbutt, Plinthird, Plinkone, Plinksecond };
