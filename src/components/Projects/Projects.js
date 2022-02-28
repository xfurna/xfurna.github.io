import React, { useEffect } from 'react';
import Nav from '../Nav/Nav';
import './Projects.css';
import { Link } from 'react-router-dom'
import { projects, presently, betarteeb } from '../../Data'

const Buttons = (props) => {
    // const { href, to, content, svg } = props;
    const SVG = (props.svg === 'github')
        ? (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff91ec" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M9.6533203,20.8652344c-0.0001831-0.1481934-0.065979-0.2887573-0.1796875-0.3837891c-0.114624-0.093689-0.2642212-0.1332397-0.4101562-0.1083984c-1.5908203,0.2949219-3.6083984,0.2988281-4.1943359-1.3466797c-0.3604126-0.8795166-0.9379883-1.6533203-1.6787109-2.2490234c-0.1533203-0.0786133-0.2915039-0.1837158-0.4082031-0.3104858c-0.0394287-0.2409058-0.2471313-0.4180298-0.4912109-0.4190063H2.2890015c-0.2753296,0-0.4989014,0.2226562-0.5,0.4980469c-0.0029297,0.5703125,0.7109375,0.9970703,0.921875,1.109375c0.5300293,0.4760742,0.9473267,1.06427,1.2217407,1.7217407C4.28125,20.3565063,5.34375,21.8721313,8.6552734,21.4492798c0.0029297,0.3642578,0.0078125,0.5527344,0.0117188,0.6962891l0.0048828,0.2949219c0,0.276123,0.223877,0.5,0.5,0.5s0.5-0.223877,0.5-0.5l-0.0048828-0.3223267C9.6611328,21.9169922,9.6533203,21.6270142,9.6533203,20.8652344z M20.9208984,5.2236328c-0.0302734-0.0380859-0.0625-0.078125-0.0957031-0.1181641c0.0671387-0.2113647,0.1199341-0.427002,0.1582031-0.6454468c0.1547852-1.0731812,0.0175171-2.1682739-0.3974609-3.1700439C20.53125,1.1523438,20.4181519,1.0460815,20.2773438,1c-0.1416016-0.046875-1.4335938-0.3945312-4.1298828,1.3818359c-2.2589722-0.5742188-4.6257324-0.5742188-6.8847656,0C6.5673828,0.6259766,5.2832031,0.9550781,5.140625,0.9970703C4.9971313,1.0423584,4.8814087,1.1494751,4.8251953,1.2890625c-0.4225464,1.0169067-0.55896,2.1299438-0.3945312,3.21875c0.038269,0.199646,0.086853,0.3971558,0.1455078,0.5917969C4.5410156,5.1426392,4.5078125,5.1855469,4.4765625,5.2275391C3.6300049,6.3015747,3.1795654,7.6346436,3.2011719,9.0020142C3.1987305,9.3121338,3.2130737,9.6221313,3.2441406,9.9307251c0.3398438,4.6640625,3.3486328,5.9619141,5.9473267,6.4052734c-0.1692505,0.3034058-0.2957764,0.6287231-0.3760376,0.9667969c-0.0657959,0.2680054,0.0981445,0.5386963,0.3662109,0.6044922s0.5386963-0.0981445,0.6044922-0.3662109c0.0925293-0.4596558,0.3247681-0.8795166,0.664978-1.2021484c0.2080688-0.1820068,0.229248-0.49823,0.0472412-0.7062988c-0.0820312-0.093689-0.1959839-0.1535034-0.3197021-0.1677246c-2.7567749-0.3125-5.618103-1.2236328-5.9384766-5.625C4.2119141,9.5615234,4.1989136,9.2817993,4.2011719,9.0020142C4.182312,7.854248,4.5603638,6.7351685,5.2714844,5.8339844c0.0751953-0.1015625,0.1591797-0.1943359,0.2421875-0.2861328c0.12677-0.1398926,0.1641846-0.3392334,0.0966797-0.515625C5.5250244,4.8067017,5.4599609,4.5740356,5.4160156,4.3369141c-0.119751-0.803894-0.039917-1.6248779,0.2324219-2.390625c1.187561,0.1653442,2.309082,0.645874,3.2479858,1.3916016c0.1212158,0.0817871,0.2723389,0.1060791,0.4130859,0.0664062c2.2244263-0.6035156,4.569519-0.6035156,6.7939453,0c0.1415405,0.0395508,0.2932739,0.0148926,0.414978-0.0673828c0.932312-0.753418,2.0534058-1.2368164,3.241272-1.3974609c0.269165,0.7542114,0.3505859,1.5626831,0.2373047,2.3554688c-0.0441895,0.2519531-0.1132202,0.4989624-0.2060547,0.7373047c-0.0675049,0.1763916-0.0301514,0.3756714,0.0966797,0.515625c0.0878906,0.0966797,0.1757812,0.2050781,0.2528687,0.3017578c0.7128296,0.8942261,1.0913696,2.0090332,1.0704346,3.1524048c0.0023193,0.2860107-0.0117188,0.5719604-0.0419922,0.8564453c-0.3173828,4.3808594-3.1894531,5.2919922-5.9570312,5.6064453c-0.2745972,0.0314941-0.4716797,0.2797241-0.4401245,0.5543823c0.0142212,0.1236572,0.0739746,0.2376099,0.1676636,0.3195801c0.3447266,0.3249512,0.5755615,0.7523193,0.6582642,1.21875c0.0852051,0.3293457,0.124939,0.6687622,0.118103,1.0087891v2.4590454c-0.0106812,0.6757812-0.0106812,1.1826172-0.0106812,1.414978c0.0003662,0.276123,0.2245483,0.4996948,0.5006714,0.4993286c0.2755737-0.0004272,0.4989014-0.2237549,0.4993286-0.4993286c0-0.2304688,0-0.7314453,0.0106812-1.4072266v-2.4667969c0.0078735-0.4234619-0.0424194-0.8460083-0.149353-1.2558594c-0.0752563-0.3407593-0.1988525-0.6689453-0.3671875-0.9746094c2.6083984-0.4423828,5.6288452-1.7392578,5.9658203-6.3847656c0.0330811-0.3153076,0.0484009-0.6322021,0.0458984-0.9492188C22.2337646,7.6307373,21.7775269,6.2945557,20.9208984,5.2236328z" /></svg>)
        : (props.svg === 'e1ixir')
            ? (<svg width="59" height="19" viewBox="0 0 59 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.46 13.984C9.724 13.768 9.955 13.681 10.153 13.723C10.351 13.765 10.45 13.954 10.45 14.29C10.462 14.398 10.441 14.506 10.387 14.614C10.333 14.722 10.276 14.815 10.216 14.893C10.156 14.971 10.069 15.058 9.955 15.154C9.841 15.25 9.748 15.322 9.676 15.37C9.604 15.418 9.499 15.487 9.361 15.577C9.223 15.667 9.142 15.724 9.118 15.748C8.83 15.94 8.536 16.102 8.236 16.234C8.212 16.246 8.179 16.261 8.137 16.279C8.095 16.297 8.05 16.315 8.002 16.333C7.954 16.351 7.906 16.369 7.858 16.387C7.81 16.405 7.771 16.42 7.741 16.432L7.696 16.45C6.964 16.75 6.178 16.924 5.338 16.972C4.474 17.02 3.844 16.942 3.448 16.738C3.4 16.714 3.208 16.63 2.872 16.486C2.536 16.342 2.296 16.216 2.152 16.108C1.876 15.928 1.612 15.538 1.36 14.938C0.892 13.858 0.658 12.904 0.658 12.076C0.658 11.572 0.748 10.912 0.928 10.096C0.94 10.048 0.961 9.946 0.991 9.79C1.021 9.634 1.048 9.517 1.072 9.439C1.096 9.361 1.126 9.253 1.162 9.115C1.198 8.977 1.234 8.86 1.27 8.764C1.306 8.668 1.348 8.569 1.396 8.467C1.444 8.365 1.492 8.272 1.54 8.188C1.792 7.84 1.996 7.588 2.152 7.432C2.8 6.76 3.622 6.46 4.618 6.532C5.65 6.616 6.208 6.958 6.292 7.558C6.364 8.026 6.337 8.509 6.211 9.007C6.085 9.505 5.929 9.916 5.743 10.24C5.557 10.564 5.299 10.984 4.969 11.5C4.639 12.016 4.402 12.412 4.258 12.688C3.73 13.684 3.466 14.278 3.466 14.47C3.466 14.626 3.616 14.848 3.916 15.136C4.108 15.316 4.279 15.424 4.429 15.46C4.579 15.496 4.852 15.478 5.248 15.406C5.872 15.322 6.55 15.172 7.282 14.956C7.558 14.86 7.96 14.698 8.488 14.47C9.016 14.242 9.34 14.08 9.46 13.984ZM2.476 12.706C2.584 12.706 2.884 12.238 3.376 11.302C3.856 10.366 4.096 9.802 4.096 9.61C4.096 9.382 3.973 9.235 3.727 9.169C3.481 9.103 3.286 9.16 3.142 9.34C3.022 9.484 2.902 9.7 2.782 9.988C2.662 10.276 2.566 10.57 2.494 10.87C2.434 11.17 2.38 11.458 2.332 11.734C2.284 12.01 2.272 12.241 2.296 12.427C2.32 12.613 2.38 12.706 2.476 12.706ZM12.2715 1.888L13.1175 1.618C14.5455 1.198 15.6315 0.831999 16.3755 0.52C16.3875 0.771999 16.4115 0.999999 16.4475 1.204C16.4835 1.408 16.5195 1.615 16.5555 1.825C16.5915 2.035 16.6155 2.266 16.6275 2.518C16.6275 2.89 16.5735 3.358 16.4655 3.922C16.3575 4.486 16.2465 4.954 16.1325 5.326C16.0185 5.698 15.8505 6.226 15.6285 6.91C15.4065 7.594 15.2775 7.996 15.2415 8.116C15.1935 8.26 15.0105 8.752 14.6925 9.592C14.3745 10.432 14.1795 11.08 14.1075 11.536C14.1075 11.56 14.1045 11.599 14.0985 11.653C14.0925 11.707 14.0865 11.752 14.0805 11.788C14.0745 11.824 14.0655 11.872 14.0535 11.932C14.0415 11.992 14.0295 12.043 14.0175 12.085C14.0055 12.127 13.9905 12.169 13.9725 12.211C13.9545 12.253 13.9335 12.289 13.9095 12.319C13.8855 12.349 13.8585 12.373 13.8285 12.391C13.7985 12.409 13.7625 12.418 13.7205 12.418C13.6785 12.418 13.6335 12.406 13.5855 12.382C13.3695 12.91 13.2495 13.216 13.2255 13.3C12.9855 13.984 12.6795 14.89 12.3075 16.018C12.2835 16.102 12.2475 16.222 12.1995 16.378C12.1515 16.534 12.1065 16.678 12.0645 16.81C12.0225 16.942 11.9775 17.062 11.9295 17.17C11.8695 17.35 11.7495 17.464 11.5695 17.512C11.3895 17.56 11.2185 17.569 11.0565 17.539C10.8945 17.509 10.6785 17.455 10.4085 17.377C10.1385 17.299 9.96152 17.248 9.87752 17.224C9.97352 16.888 10.1145 16.414 10.3005 15.802C10.4865 15.19 10.6215 14.752 10.7055 14.488C11.0415 13.348 11.6805 11.494 12.6225 8.926C13.5645 6.358 14.1975 4.522 14.5215 3.418C13.4175 3.886 12.7575 4.126 12.5415 4.138C12.4575 4.138 12.2895 4.219 12.0375 4.381C11.7855 4.543 11.5995 4.594 11.4795 4.534C11.4675 4.474 11.4495 4.369 11.4255 4.219C11.4015 4.069 11.3865 3.958 11.3805 3.886C11.3745 3.814 11.3775 3.724 11.3895 3.616C11.4015 3.508 11.4315 3.412 11.4795 3.328C11.5515 3.196 11.6715 3.061 11.8395 2.923C12.0075 2.785 12.1335 2.641 12.2175 2.491C12.3015 2.341 12.3195 2.14 12.2715 1.888ZM21.7024 5.074C21.3664 5.158 21.0364 5.038 20.7124 4.714C20.4844 4.486 20.3644 4.336 20.3524 4.264C20.3404 4.192 20.4244 4.084 20.6044 3.94C20.8564 3.76 21.1774 3.67 21.5674 3.67C21.9574 3.67 22.2244 3.76 22.3684 3.94C22.5244 4.144 22.5334 4.366 22.3954 4.606C22.2574 4.846 22.0264 5.002 21.7024 5.074ZM24.9064 13.696C24.9904 13.84 24.9934 13.978 24.9154 14.11C24.8374 14.242 24.6184 14.458 24.2584 14.758C23.6944 15.238 23.0284 15.676 22.2604 16.072C21.6844 16.36 21.0874 16.477 20.4694 16.423C19.8514 16.369 19.2694 16.192 18.7234 15.892C18.1774 15.592 17.7064 15.202 17.3104 14.722C16.7464 14.05 16.5784 13.156 16.8064 12.04C16.8304 11.956 16.8784 11.668 16.9504 11.176C17.0224 10.684 17.0974 10.249 17.1754 9.871C17.2534 9.493 17.3404 9.244 17.4364 9.124C17.5444 8.992 17.7214 8.902 17.9674 8.854C18.2134 8.806 18.4684 8.803 18.7324 8.845C18.9964 8.887 19.2484 8.965 19.4884 9.079C19.7284 9.193 19.8934 9.346 19.9834 9.538C20.0734 9.73 20.0704 9.946 19.9744 10.186C19.6984 10.762 19.5604 11.164 19.5604 11.392C19.5604 11.608 19.4404 11.878 19.2004 12.202C18.9964 12.442 18.8734 12.733 18.8314 13.075C18.7894 13.417 18.8464 13.642 19.0024 13.75C19.1344 13.798 19.2004 13.948 19.2004 14.2C19.2004 14.416 19.3564 14.662 19.6684 14.938C19.8844 15.142 20.0554 15.256 20.1814 15.28C20.3074 15.304 20.5384 15.274 20.8744 15.19C21.3664 15.01 21.9964 14.644 22.7644 14.092C23.3764 13.648 23.8414 13.396 24.1594 13.336C24.4774 13.276 24.7264 13.396 24.9064 13.696ZM40.0621 12.904C40.3261 12.688 40.5541 12.601 40.7461 12.643C40.9381 12.685 41.0401 12.874 41.0521 13.21C41.0521 13.318 41.0281 13.426 40.9801 13.534C40.9321 13.642 40.8781 13.735 40.8181 13.813C40.7581 13.891 40.6681 13.978 40.5481 14.074C40.4281 14.17 40.3351 14.242 40.2691 14.29C40.2031 14.338 40.1011 14.41 39.9631 14.506C39.8251 14.602 39.7381 14.656 39.7021 14.668C39.4141 14.872 39.1201 15.034 38.8201 15.154C38.7721 15.178 38.6581 15.238 38.4781 15.334C38.2981 15.538 37.9801 15.706 37.5241 15.838C37.1161 16.018 36.4321 16.084 35.4721 16.036C34.4521 15.976 33.6601 15.646 33.0961 15.046C32.7841 14.722 32.5501 14.56 32.3941 14.56C32.2501 14.56 31.5061 15.286 30.1621 16.738C28.7821 18.178 28.0141 18.898 27.8581 18.898C27.7621 18.898 27.6211 18.823 27.4351 18.673C27.2491 18.523 27.0781 18.358 26.9221 18.178C26.7661 17.998 26.6881 17.86 26.6881 17.764C26.6881 17.632 27.4261 16.816 28.9021 15.316C30.3781 13.804 31.1701 12.946 31.2781 12.742C31.3981 12.514 31.4011 12.058 31.2871 11.374C31.1731 10.69 30.9631 10.216 30.6571 9.952C30.3511 9.688 29.9731 9.646 29.5231 9.826C29.0731 10.006 28.6411 10.225 28.2271 10.483C27.8131 10.741 27.3451 11.14 26.8231 11.68C26.3011 12.22 25.9201 12.622 25.6801 12.886C25.4401 13.15 25.1701 13.468 24.8701 13.84H24.8521C24.5401 14.212 24.2641 14.356 24.0241 14.272C23.9281 14.236 23.8141 14.14 23.6821 13.984C23.5621 13.864 23.4961 13.762 23.4841 13.678C23.4721 13.546 23.5501 13.384 23.7181 13.192C23.8381 13.06 24.0511 12.811 24.3571 12.445C24.6631 12.079 24.8911 11.812 25.0411 11.644C25.1911 11.476 25.4161 11.23 25.7161 10.906C26.0161 10.582 26.2621 10.336 26.4541 10.168C26.6461 10 26.8921 9.784 27.1921 9.52C27.4921 9.256 27.7681 9.052 28.0201 8.908C28.2721 8.764 28.5571 8.611 28.8751 8.449C29.1931 8.287 29.5141 8.161 29.8381 8.071C30.1621 7.981 30.4981 7.912 30.8461 7.864C31.3141 7.828 31.6411 7.837 31.8271 7.891C32.0131 7.945 32.2321 8.068 32.4841 8.26C32.8561 8.584 33.1021 8.974 33.2221 9.43C33.3061 9.886 33.4561 10.15 33.6721 10.222C33.6601 10.21 33.9031 9.985 34.4011 9.547C34.8991 9.109 35.4271 8.659 35.9851 8.197C36.5431 7.735 36.8761 7.474 36.9841 7.414C37.0321 7.39 37.0951 7.354 37.1731 7.306C37.2511 7.258 37.3171 7.219 37.3711 7.189C37.4251 7.159 37.4881 7.129 37.5601 7.099C37.6321 7.069 37.6981 7.054 37.7581 7.054C37.9261 7.054 38.1301 7.159 38.3701 7.369C38.6101 7.579 38.7301 7.75 38.7301 7.882C38.7301 8.062 38.4661 8.437 37.9381 9.007C37.4101 9.577 37.0681 9.862 36.9121 9.862C36.8161 9.862 36.6091 9.997 36.2911 10.267C35.9731 10.537 35.6461 10.846 35.3101 11.194L33.9781 12.544L34.1941 13.264C34.3261 13.744 34.6141 14.116 35.0581 14.38C35.3701 14.572 35.6041 14.677 35.7601 14.695C35.9161 14.713 36.1921 14.668 36.5881 14.56C36.6481 14.548 36.7741 14.509 36.9661 14.443C37.1581 14.377 37.3411 14.32 37.5151 14.272C37.6891 14.224 37.8421 14.2 37.9741 14.2C38.8501 13.744 39.5461 13.312 40.0621 12.904ZM43.8684 5.074C43.5324 5.158 43.2024 5.038 42.8784 4.714C42.6504 4.486 42.5304 4.336 42.5184 4.264C42.5064 4.192 42.5904 4.084 42.7704 3.94C43.0224 3.76 43.3434 3.67 43.7334 3.67C44.1234 3.67 44.3904 3.76 44.5344 3.94C44.6904 4.144 44.6994 4.366 44.5614 4.606C44.4234 4.846 44.1924 5.002 43.8684 5.074ZM47.0724 13.696C47.1564 13.84 47.1594 13.978 47.0814 14.11C47.0034 14.242 46.7844 14.458 46.4244 14.758C45.8604 15.238 45.1944 15.676 44.4264 16.072C43.8504 16.36 43.2534 16.477 42.6354 16.423C42.0174 16.369 41.4354 16.192 40.8894 15.892C40.3434 15.592 39.8724 15.202 39.4764 14.722C38.9124 14.05 38.7444 13.156 38.9724 12.04C38.9964 11.956 39.0444 11.668 39.1164 11.176C39.1884 10.684 39.2634 10.249 39.3414 9.871C39.4194 9.493 39.5064 9.244 39.6024 9.124C39.7104 8.992 39.8874 8.902 40.1334 8.854C40.3794 8.806 40.6344 8.803 40.8984 8.845C41.1624 8.887 41.4144 8.965 41.6544 9.079C41.8944 9.193 42.0594 9.346 42.1494 9.538C42.2394 9.73 42.2364 9.946 42.1404 10.186C41.8644 10.762 41.7264 11.164 41.7264 11.392C41.7264 11.608 41.6064 11.878 41.3664 12.202C41.1624 12.442 41.0394 12.733 40.9974 13.075C40.9554 13.417 41.0124 13.642 41.1684 13.75C41.3004 13.798 41.3664 13.948 41.3664 14.2C41.3664 14.416 41.5224 14.662 41.8344 14.938C42.0504 15.142 42.2214 15.256 42.3474 15.28C42.4734 15.304 42.7044 15.274 43.0404 15.19C43.5324 15.01 44.1624 14.644 44.9304 14.092C45.5424 13.648 46.0074 13.396 46.3254 13.336C46.6434 13.276 46.8924 13.396 47.0724 13.696ZM57.0981 13.084C57.3501 12.856 57.5751 12.763 57.7731 12.805C57.9711 12.847 58.0761 13.036 58.0881 13.372C58.0881 13.468 58.0731 13.561 58.0431 13.651C58.0131 13.741 57.9651 13.825 57.8991 13.903C57.8331 13.981 57.7671 14.056 57.7011 14.128C57.6351 14.2 57.5541 14.272 57.4581 14.344C57.3621 14.416 57.2811 14.476 57.2151 14.524C57.1491 14.572 57.0621 14.629 56.9541 14.695C56.8461 14.761 56.7741 14.812 56.7381 14.848C56.4501 15.04 56.1561 15.196 55.8561 15.316C55.8321 15.328 55.7961 15.346 55.7481 15.37C55.7241 15.43 55.6761 15.478 55.6041 15.514C55.5321 15.55 55.4241 15.586 55.2801 15.622C55.0041 15.778 54.5961 15.886 54.0561 15.946C53.5161 16.006 53.0241 16.021 52.5801 15.991C52.1361 15.961 51.8481 15.91 51.7161 15.838C51.6081 15.766 51.4881 15.616 51.3561 15.388C51.2241 15.16 51.1101 14.932 51.0141 14.704C50.9181 14.476 50.8581 14.302 50.8341 14.182C50.7501 13.834 50.7201 13.462 50.7441 13.066C50.7801 12.658 50.8461 12.022 50.9421 11.158V10.906C50.9421 10.846 50.9211 10.801 50.8791 10.771C50.8371 10.741 50.7801 10.72 50.7081 10.708C50.6361 10.708 50.5401 10.708 50.4201 10.708C50.2761 10.708 50.1141 10.684 49.9341 10.636C49.7541 10.588 49.5771 10.543 49.4031 10.501C49.2291 10.459 49.0761 10.438 48.9441 10.438C48.9561 10.438 48.9141 10.627 48.8181 11.005C48.7221 11.383 48.5991 11.782 48.4491 12.202C48.2991 12.622 48.1641 12.868 48.0441 12.94C47.6121 13.192 47.1561 13.372 46.6761 13.48C46.0521 13.624 46.3341 12.262 47.5221 9.394C47.5461 9.322 47.6061 9.172 47.7021 8.944C47.7981 8.716 47.8641 8.557 47.9001 8.467C47.9361 8.377 47.9931 8.233 48.0711 8.035C48.1491 7.837 48.2061 7.675 48.2421 7.549C48.2781 7.423 48.3171 7.27 48.3591 7.09C48.4011 6.91 48.4311 6.739 48.4491 6.577C48.4671 6.415 48.4761 6.25 48.4761 6.082C48.4761 5.89 48.5991 5.548 48.8451 5.056C49.0911 4.564 49.2861 4.264 49.4301 4.156C49.6221 4.048 49.8831 4.009 50.2131 4.039C50.5431 4.069 50.7621 4.144 50.8701 4.264C51.0141 4.444 51.0141 5.14 50.8701 6.352C50.7621 7.144 50.7141 7.654 50.7261 7.882C50.7381 8.122 50.8041 8.314 50.9241 8.458C51.0681 8.578 51.1941 8.635 51.3021 8.629C51.4101 8.623 51.6141 8.53 51.9141 8.35C52.3581 8.098 52.6791 7.978 52.8771 7.99C53.0751 8.002 53.2581 8.14 53.4261 8.404C53.5581 8.596 53.6181 8.77 53.6061 8.926C53.5941 9.082 53.5041 9.382 53.3361 9.826C53.0961 10.462 52.8801 11.188 52.6881 12.004C52.5441 12.652 52.4991 13.132 52.5531 13.444C52.6071 13.756 52.8021 14.122 53.1381 14.542C53.2821 14.746 53.3961 14.86 53.4801 14.884C53.5161 14.896 53.5791 14.887 53.6691 14.857C53.7591 14.827 53.8551 14.791 53.9571 14.749C54.0591 14.707 54.1281 14.68 54.1641 14.668C54.5361 14.572 54.7821 14.494 54.9021 14.434C55.8261 13.954 56.5581 13.504 57.0981 13.084Z" fill="#FF91EC" />
            </svg>)
            : (props.svg==='pypi')
            ? (                        <svg 
                viewBox="0 0 512 512" width="24" height="24" fill="#780060" stroke="#ff91ec" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" >
               <path d="M510.3,289.7v83.5l-71.9,26.2l-1.7,1.2l1.1,0.8l73.6-26.8l0.6-0.8v-85.3l-1.2-0.8L510.3,289.7z M503.9,119.8l-64.8,23.7
                   v83.4l71.3-25.9v-83.5L503.9,119.8z M510.3,287.1v-83.5l-71.2,25.9V313L510.3,287.1z M436.7,313.9v-83.4L366.3,256v83.5
                   L436.7,313.9z M363.4,426.6v-83.4l-70.7,25.7v83.5L363.4,426.6z M366.3,342.6v82.5l70.7-25.7v-82.5L366.3,342.6L366.3,342.6z
                    M410.9,382.7c-7.8,2.9-14.1-1.6-14.1-9.8c0-8.3,6.3-17.4,14.1-20.3c7.8-2.8,14.2,1.7,14.2,9.9
                   C425.1,370.8,418.8,379.9,410.9,382.7L410.9,382.7z M282.2,198.7l7.7-2.8l-70.1-25.6l-70.9,25.8l2.3,0.8l67.9,24.8L282.2,198.7z
                    M437.5,227.5V144l-71.2,25.9v83.5L437.5,227.5z M363.9,254.3v-83.5l-70.4,25.7v83.4L363.9,254.3z M291.1,197.3l-71.2,25.9v83.5
                   l71.2-25.9V197.3z M147.3,280.8l70.9,25.8v-83.5l-70.9-25.8V280.8z M220.6,167.9l70,25.5v-82.5l-70-25.5V167.9z M437.5,57.9
                   l-70.8,25.7v83.5l70.8-25.8V57.9z M361.6,83.3l-68.8-25L223,83.7l68.9,25L361.6,83.3z M327.7,98.3l-34.6,12.7v82.5l70.8-25.7V85.2
                   L327.7,98.3z M319.4,157.5c-7.9,2.9-14.1-1.6-14.1-9.8c0-8.3,6.3-17.4,14.1-20.2c7.8-2.8,14.2,1.6,14.2,9.9
                   C333.6,145.7,327.3,154.7,319.4,157.5z M218.2,392.8v-83.5l-70.9-25.8v83.5L218.2,392.8z M291.8,366.6v-83.5l-71.9,26.2v83.5
                   L291.8,366.6z M293.5,365.9l70.3-25.6v-83.5l-70.3,25.6V365.9z M291.8,452.7l-71.9,26.2v-83.5h-1.7v83.5L147.3,453v-83.5l-1.1-1.1
                   l-0.6-1.3l-71.2-25.8V257l0.8,0.3l70.1,25.5l0.3-1.7l-69.6-25.3l69.6-25.2v-2.4l-69.5-25.3l69.5-25.3v18.7l1.7-1.1v-50.6l69.5,25.2
                   l1.3-1.2L151.2,144l-2.3-0.8l69.2-25.2v-1.8l-71.9,26.2v0.4l-0.6,0.4v32.4L73.4,202v0.4l-0.6,0.4v85.5L0.5,314.6v0.4L0,315.4v85.2
                   l0.5,0.8l72.6,26.4l0.2-0.2l0.1,0.3l72.5,26.4l0.2-0.2l0.1,0.3l72.5,26.3l0.3-0.2l0.2,0.2l73.6-26.8l0.6-0.8L291.8,452.7z
                    M74.5,204l69.5,25.3l-69.5,25.3V204z M72.5,425.9L1.7,400.1v-83.5l70.8,25.7V425.9z M72.8,340.7L3.3,315.4l69.6-25.3V340.7
                   L72.8,340.7z M145.3,452.3l-70.8-25.7V343l70.8,25.8V452.3z M507.5,115.9L439.1,91v49.8L507.5,115.9z M434.9,56.4l-69.1-25.2
                   l-69.7,25.3l69.3,25.3L434.9,56.4z"/>
           </svg>)
           : (props.svg === 'link')
            ?(<svg fill="#ff91ec" stroke="#ff91ec" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" viewBox="0 0 24 24"><path d="M21.337.458l-3.937 3.936c-2.449-1.466-5.67-1.144-7.78.966l-4.261 4.262c-2.11 2.11-2.433 5.331-.968 7.78l-3.935 3.935c-.609.609-.609 1.597 0 2.207s1.598.609 2.207 0l3.935-3.935c2.449 1.465 5.67 1.144 7.78-.967l4.261-4.261c2.11-2.11 2.433-5.331.968-7.781l3.936-3.936c.609-.609.609-1.597 0-2.207s-1.597-.609-2.206.001zm-4.862 11.757l-4.261 4.261c-.895.894-2.176 1.169-3.31.827l1.632-1.632c.609-.609.609-1.597 0-2.207s-1.598-.609-2.207 0l-1.631 1.632c-.343-1.133-.067-2.415.826-3.309l4.261-4.261c.895-.894 2.176-1.169 3.31-.827l-1.631 1.63c-.609.609-.609 1.597 0 2.207s1.598.609 2.207 0l1.63-1.63c.343 1.133.067 2.415-.826 3.309z"/></svg>)
            : (props.svg === 'publication')
                ? (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff91ec" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21.155 8.64c-.909 1.519-2.327 3.067-4.097 3.004-.413.706-.852 1.677-1.339 2.803l-1.312.553c.936-2.343 2.231-4.961 3.698-6.994-.67.529-1.746 1.637-2.662 2.783-1.098-1.828-.3-3.691.973-5.179.021.641.359 1.196.601 1.475-.087-.53-.114-1.489.195-2.351.718-.732 1.364-1.271 2.113-1.76-.083.478.08 1.026.262 1.361.024-.49.224-1.43.521-1.84.924-.727 2.332-1.373 3.892-1.495-.081.973-.436 2.575-1.024 3.604-.515.404-1.221.68-1.791.833.493.089 1.031.077 1.494-.001-.269.743-.552 1.428-.998 2.276-.679.468-1.578.732-2.203.825.46.187 1.272.245 1.677.103zm-13.841 3.805l.645.781 4.773-2.791-.668-.768-4.75 2.778zm6.96-.238l-.668-.767-4.805 2.808.645.781 4.828-2.822zm4.679.007c-.421.203-.851.341-1.286.398-.12.231-.246.494-.377.773l.298.342c.623.692.459 1.704-.376 2.239-.773.497-5.341 3.376-6.386 4.035-.074-.721-.358-1.391-.826-1.948-.469-.557-6.115-7.376-7.523-9.178-.469-.6-.575-1.245-.295-1.816.268-.549.842-.918 1.43-.918.919 0 1.408.655 1.549 1.215.16.641-.035 1.231-.623 1.685l1.329 1.624 7.796-4.446c1.422-1.051 1.822-2.991.93-4.513-.618-1.053-1.759-1.706-2.978-1.706-1.188 0-.793-.016-9.565 4.475-1.234.591-2.05 1.787-2.05 3.202 0 .87.308 1.756.889 2.487 1.427 1.794 7.561 9.185 7.616 9.257.371.493.427 1.119.15 1.673-.277.555-.812.886-1.429.886-.919 0-1.408-.655-1.549-1.216-.156-.629.012-1.208.604-1.654l-1.277-1.545c-.822.665-1.277 1.496-1.377 2.442-.232 2.205 1.525 3.993 3.613 3.993.596 0 1.311-.177 1.841-.51l9.427-5.946c.957-.664 1.492-1.781 1.492-2.897 0-.745-.24-1.454-.688-2.003l-.359-.43zm-7.933-10.062c.188-.087.398-.134.609-.134.532 0 .997.281 1.243.752.312.596.226 1.469-.548 1.912l-5.097 2.888c-.051-1.089-.579-2.081-1.455-2.732l5.248-2.686zm2.097 13.383l.361-.905.249-.609-3.449 2.017.645.781 2.194-1.284z"/></svg>)
                : props.svg;

    if (props.href) {
        return (
            <div>
                <a href={props.href} rel='noopener noreferrer' target='_blank'>
                    <div className='buttons' content={props.content}>
                        {SVG}
                    </div>
                </a>
            </div>
        );
    }
    else if (props.svg === 'e1ixir') {
        return (
            <div>
                <Link to={props.to} rel='noreferrer noopener'>
                    <div className='buttons' align='center'>
                        {SVG}
                    </div>
                </Link>
            </div>
        );
    }
};

const RenderProject = (props) => {
    const direction = (props.id % 2 === 0) ? 'row-reverse' : 'row';
    return (
        <div className='project' style={{ flexDirection: direction }} >
            <div className='project-head'>
                <span className='head' align='center'>{props.head}</span>

                <div id='project-icon-bar' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    {props.buttons.map((button, i) => (
                        <Buttons key={i} {...button} />
                    ))}
                </div>

            </div>
            <div className='project-outline' align={(props.id % 2 === 0) ? 'right' : 'left'}>
                <div className='role'>{props.role}</div>
                <div className='affiliation duration'>{props.affiliation}</div>
                <span className='tag' style={{ display: (props.tag) ? 'inline-block' : 'none' }}>{props.tag}</span>
                <hr style={{ marginTop: (props.tag) ? '25px' : '5px' }} />
                {props.description}
            </div>
        </div >
    );
};

const RenderBetarteeb = (props) => {
    const direction = (props.id % 2 === 0) ? 'row-reverse' : 'row';
    return (
        <div className='project' style={{ flexDirection: direction }} >
            <div className='project-head'>
                <span className='head' align='center'>{props.main_head}</span>

                <div id='project-icon-bar' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    {props.buttons.map((button, i) => (
                        <Buttons key={i} {...button} />
                    ))}
                </div>

            </div>
            <div className='project-outline' align={(props.id % 2 === 0) ? 'right' : 'left'}>
                <div className='betarteeb'>{props.head}</div>
                <span className='tag' style={{ display: (props.tag) ? 'inline-block' : 'none' }}>{props.tag}</span>
                <hr style={{ marginTop: (props.tag) ? '25px' : '5px' }} />
                {props.description}
            </div>
        </div >
    );
};

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

        document.title = "Projects"
        return (
        <>
            <Nav />
            <div style={{ margin: '15px' }}>
                <div align='center' className="heading" data-text='trade'></div>
                <hr />
                <div className='presently'><span className='presently-head glow'>: Current Position :</span>{presently}</div>
                <hr />

                {projects.map((project, i) => (
                    <RenderProject key={i} {...project} />
                ))}

                <div align='center' className="heading" data-text='बे-तरतीब' style={{ fontFamily: 'Tillana' }}></div>
                {betarteeb.map((project, i) => (
                    <RenderBetarteeb key={i} {...project} />
                ))}
                            <hr />
            <div className='glow' align='center' style={{ color: '#ffffffb5', fontSize: '24px', fontFamily: 'Beth Ellen' }}>xf</div>
            <hr />

            </div>
        </>
    );
}

export default Projects;
