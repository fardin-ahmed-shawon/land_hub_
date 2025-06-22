import Navbar from './components/Navbar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

import IMG1 from './img/property-1.jpg';
import IMG3 from './img/property-3.jpg';
import IMG4 from './img/property-4.jpg';

import AboutIMG from './img/about.jpg';
import GLR4 from './img/_property-4.jpg';
import CR1 from './img/carousel-1.jpg';
import CR2 from './img/carousel-2.jpg';
import IMGHDR from './img/header.jpg';
import AGENTIMG from './img/team-1.jpg';

function PropertyDetails() {
  return (
    <div className="container-xxl bg-white p-0">
      <Navbar />
      <Header />
      <SearchBar />

      <div className="container-xxl py-5">
            <div className="container">

                <h1 className="text-center pb-5">Property Images</h1>
                {/* <!-- Image Gallery --> */}
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src={AboutIMG} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="row mb-2">
                            <div className="col-md-6">
                                <img className="img-fluid" src={GLR4} alt="" />
                            </div>
                            <div className="col-md-6">
                                <img className="img-fluid" src={CR1} alt="" />
                            </div>
                        </div>
                        <div className="row mb-2">  
                            <div className="col-md-6">
                                <img className="img-fluid" src={CR2} alt="" />
                            </div>
                            <div className="col-md-6">
                                <img className="img-fluid" src={IMGHDR} alt="" />
                            </div>
                        </div>
                        <div className="row">  
                            <div className="col-md-6">
                                <img className="img-fluid" src={CR2} alt="" />
                            </div>
                            <div className="col-md-6">
                                <img className="img-fluid" src={IMGHDR} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Property Details --> */}
                <div className="row">
                    <div className="col-6">
                        <h1 className="pt-5">Villa with Amazing View</h1>
                    </div>
                    <div className="col-6 text-end">
                        <h1 style={{color: '#52AA5E'}} className="pt-5">5.500.000 €</h1>
                    </div>
                </div>
                <p><i className="bi bi-geo-alt"></i> Calle de Lagasca, Madrid, Castellana</p>

                <div className="row">
                    <div className="col-lg-8">

                        {/* <!-- Overview Card--> */}
                        <div className="card p-3">
                            <div className="card-body">
                                <h3>Overview</h3>
                                <br />
                                <div className="row">
                                    <div className="col-4 col-md-2">
                                        Updated On:
                                        <br />
                                        2nd Nov 2023
                                    </div>
                                    <div className="col-4 col-md-2 text-center">
                                        <svg width="40" height="40" viewBox="0 0 798 569" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M236.65 0H560.87C567.29 0 573.12 2.61 577.33 6.83L656.2 85.7C660.75 90.24 663.02 96.2 663.02 102.17L663.03 216.94C667.14 217.92 671.04 220 674.23 223.21L712.37 261.37C717.33 265.63 720.47 271.96 720.47 279.02V329.58H754.52C760.95 329.58 766.78 332.19 770.99 336.41L790.71 356.12C795.25 360.66 797.52 366.63 797.52 372.59L797.53 446.06C797.53 458.91 787.1 469.35 774.24 469.35H717.9V545.52C717.9 558.38 707.47 568.81 694.61 568.81H624.8C611.94 568.81 601.51 558.38 601.51 545.52V469.35H196.02V545.52C196.02 558.38 185.59 568.81 172.73 568.81H102.92C90.06 568.81 79.63 558.38 79.63 545.52V469.35H23.29C10.43 469.35 0 458.91 0 446.06V372.59C0 366.16 2.61 360.34 6.82 356.12L26.54 336.41C31.08 331.87 37.04 329.6 43.01 329.58H77.04V279.02C77.06 273.06 79.33 267.1 83.87 262.55L123.31 223.11C126.34 220.08 130.18 217.89 134.49 216.89V102.17C134.49 95.74 137.1 89.91 141.31 85.7L220.19 6.83C224.73 2.28 230.69 0.01 236.65 0V0ZM52.65 376.16L46.58 382.23V422.77C281.37 422.77 516.16 422.77 750.95 422.77V382.23L744.88 376.16C514.13 376.16 283.4 376.16 52.65 376.16V376.16ZM262.99 119.54H534.51C547.37 119.54 557.8 129.97 557.8 142.83V216.29H616.45V111.81L551.22 46.58H246.3L181.07 111.81V216.29H239.7V142.83C239.7 129.97 250.14 119.54 262.99 119.54V119.54ZM511.22 166.12H286.28V216.29H511.22V166.12ZM149.44 469.35H126.21V522.23H149.44V469.35ZM671.32 469.35H648.09V522.23H671.32V469.35ZM639.74 262.87C479.08 262.87 318.44 262.87 157.78 262.87H149.42L123.62 288.66V329.58H673.89V288.57L648.22 262.87H639.74V262.87Z" fill="#333333"></path>
                                        </svg>
                                        <br />
                                        5 Bedrooms
                                    </div>
                                    <div className="col-4 col-md-2 text-center">
                                        <svg width="40" height="40" viewBox="0 0 517 515" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M53.7957 274.151C131 273.543 208.204 272.936 285.409 272.328C320.502 272.052 355.595 271.776 390.687 271.499C408.709 271.357 436.246 267.321 453.855 271.002C483.718 277.245 500.827 291.055 460.56 297.045C394.658 306.848 320.713 297.873 254.042 298.06C220.181 298.154 186.32 298.249 152.459 298.344C132.142 298.4 111.826 298.457 91.5092 298.514C84.737 298.533 77.9649 298.552 71.1927 298.571C52.3786 304.32 40.7481 296.826 36.3013 276.088C52.8826 279.86 59.9619 254.352 43.3362 250.57C24.104 246.195 9.18371 253.464 2.87718 272.911C-7.86142 306.025 12.9416 323.181 40.7178 325.119C107.664 329.789 176.766 324.739 243.883 324.551C313.315 324.357 383.305 326.686 452.681 323.869C475.355 322.948 505.639 324.33 513.939 298.79C523.252 270.129 504.563 248.411 478.428 244.846C413.411 235.977 340.514 245.431 274.881 245.948C201.186 246.528 127.491 247.108 53.7957 247.688C36.7748 247.822 36.7351 274.285 53.7957 274.151Z" fill="#222222"></path>
                                            <path d="M466.461 323.548C474.73 375.537 434.999 433.231 387.646 453.943C349.846 470.477 295.94 463.719 254.54 464.503C214.778 465.257 180.991 468.261 146.51 445.99C109.925 422.358 55.4102 377.073 57.7829 329.415C58.6303 312.393 32.165 312.438 31.3198 329.415C28.8418 379.189 68.1589 422.234 105.975 450.969C163.88 494.97 203.297 492.106 274.482 490.561C338.061 489.181 389.722 494.909 438.653 449.799C477.721 413.783 500.49 370.025 491.979 316.513C489.311 299.741 463.807 306.861 466.461 323.548Z" fill="#222222"></path>
                                            <path d="M334.065 61.9826C335.204 45.8633 330.105 43.7571 345.043 34.9641C356.06 28.4795 367.53 30.2771 379.689 30.2471C414.788 30.1607 403.851 39.6988 403.886 73.8339C403.94 127.831 403.995 181.828 404.05 235.825C404.067 252.852 430.531 252.881 430.513 235.825C430.461 184.67 430.409 133.515 430.357 82.3597C430.335 60.6536 439.565 21.7027 418.084 7.15394C401.503 -4.07547 349.393 -0.082615 330.83 5.5742C302.887 14.0895 309.347 37.2869 307.602 61.9826C306.402 78.9773 332.87 78.9021 334.065 61.9826Z" fill="#222222"></path>
                                            <path d="M352.821 107.029C330.46 107.037 304.602 110.618 282.562 107.149C285.198 109.176 287.834 111.203 290.47 113.23C287.659 109.117 303.833 98.2036 305.929 96.6067C312.01 91.9742 315.44 89.1697 322.877 88.4098C328.161 87.8699 337.461 87.4048 342.258 89.8401C353.907 95.7527 352.133 108.756 351.855 119.376C351.41 136.411 377.873 136.401 378.318 119.376C378.914 96.5592 374.266 71.7971 349.293 64.3223C339.232 61.3106 327.763 61.3313 317.357 62.0418C303.547 62.9849 295.08 71.5673 284.66 79.9306C272.257 89.8861 250.532 115.735 271.027 130.299C279.718 136.474 294.167 133.512 304.151 133.509C320.374 133.503 336.597 133.498 352.821 133.492C369.848 133.486 369.877 107.023 352.821 107.029Z" fill="#222222"></path>
                                            <path d="M341.354 158.199C341.354 162.021 341.354 165.844 341.354 169.666C341.354 186.694 367.817 186.722 367.817 169.666C367.817 165.844 367.817 162.021 367.817 158.199C367.817 141.171 341.354 141.143 341.354 158.199Z" fill="#222222"></path>
                                            <path d="M277.405 164.373C278.206 166.629 278.029 165.509 277.797 167.892C277.106 175.015 284.373 181.124 291.029 181.124C298.759 181.124 303.568 175.035 304.26 167.892C304.605 164.343 304.116 160.695 302.923 157.338C300.531 150.608 293.895 146.105 286.646 148.097C280.131 149.887 275.001 157.608 277.405 164.373Z" fill="#222222"></path>
                                            <path d="M307.834 203.186C307.834 205.832 307.834 208.479 307.834 211.125C307.834 228.153 334.297 228.181 334.297 211.125C334.297 208.479 334.297 205.832 334.297 203.186C334.297 186.158 307.834 186.13 307.834 203.186Z" fill="#222222"></path>
                                            <path d="M317.537 488.987C317.537 493.398 317.537 497.808 317.537 502.219C317.537 519.246 344 519.275 344 502.219C344 497.808 344 493.398 344 488.987C344 471.959 317.537 471.931 317.537 488.987Z" fill="#222222"></path>
                                            <path d="M170.226 487.222C170.226 492.221 170.226 497.219 170.226 502.218C170.226 519.245 196.689 519.274 196.689 502.218C196.689 497.219 196.689 492.221 196.689 487.222C196.689 470.194 170.226 470.166 170.226 487.222Z" fill="#222222"></path>
                                            </svg>
                                        <br />
                                        3 Bathrooms
                                    </div>
                                    <div className="col-4 col-md-2 text-center">
                                        <svg width="40" height="40" viewBox="0 0 696 525" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M693.732 158.062C692.963 146.618 685.277 138.75 672.98 138.75C668.368 138.75 663.757 138.75 659.145 138.75C633.781 138.75 616.104 165.931 616.104 165.931C614.567 169.507 612.261 172.368 609.187 176.66C606.112 166.646 603.806 158.063 601.501 150.194C590.74 114.431 573.831 80.8125 550.774 50.7708C534.633 29.3125 511.576 22.1598 486.212 17.8681C440.097 10.7153 391.675 0 345.56 0C298.676 0 254.098 10.7153 207.982 17.8681C182.619 22.1598 159.561 30.0278 143.421 50.7708C120.363 81.5278 103.454 114.431 92.6936 150.194C90.3879 158.063 88.0821 166.646 85.0077 176.66C81.9334 171.653 79.6277 168.792 78.0905 165.931C78.0905 165.931 60.4128 138.75 35.0493 138.75C30.4378 138.75 25.8264 138.75 21.2148 138.75C8.91736 139.465 1.23136 147.333 0.462769 158.062C0.462769 165.931 0.462769 174.514 0.462769 182.382C0.462769 194.542 9.68593 202.41 22.752 202.41C35.818 202.41 48.884 202.41 61.95 202.41C67.3302 202.41 72.7103 202.41 77.3218 202.41C78.0904 203.125 78.0905 203.84 78.8591 204.556C77.3219 205.271 75.0161 205.986 74.2475 207.417C41.1981 236.743 23.5205 272.507 24.2891 315.424C25.0577 341.174 27.3635 366.208 30.4379 391.958C32.7436 411.271 37.3552 430.583 47.3468 448.465C51.1898 456.333 56.5699 462.055 65.793 463.486C70.4045 464.201 70.4046 467.062 70.4046 469.924C70.4046 480.653 70.4046 490.667 70.4046 501.396C70.4046 516.417 79.6277 525 95.7681 525C109.603 525 122.669 525 136.503 525C154.181 525 162.635 516.417 162.635 500.681C162.635 492.813 162.635 484.229 162.635 475.646C224.891 479.938 286.379 482.083 347.866 482.083C409.353 482.083 471.609 479.938 533.096 475.646C533.096 484.229 533.096 492.813 533.096 500.681C533.096 516.417 542.319 525 559.228 525C573.063 525 586.129 525 599.964 525C616.104 525 625.327 516.417 625.327 501.396C625.327 490.667 625.327 480.653 625.327 469.924C625.327 466.347 626.096 464.201 629.939 463.486C639.162 462.055 644.542 455.618 648.385 448.465C657.608 430.583 662.988 411.271 665.294 391.958C668.368 366.924 670.674 341.174 671.442 315.424C672.211 272.507 654.533 236.743 621.484 207.417C619.947 205.986 618.41 205.986 616.872 204.556C617.641 203.84 617.641 203.125 618.41 202.41C623.79 202.41 629.17 202.41 633.782 202.41C646.848 202.41 659.914 202.41 672.98 202.41C686.046 202.41 694.5 194.542 695.269 182.382C694.5 173.799 694.5 165.931 693.732 158.062ZM124.206 183.097C134.198 144.472 149.569 108.708 171.09 74.375C172.627 72.2292 173.396 70.7986 174.933 70.0833C176.47 68.6527 178.007 67.9375 180.313 67.2222C194.148 61.5 234.883 67.9375 345.56 67.2222C456.237 67.9375 498.51 61.5 512.344 67.2222C514.65 67.9375 516.187 68.6527 517.724 70.0833C519.261 71.5138 520.799 72.9444 521.567 74.375C543.088 107.993 558.46 144.472 568.451 183.097C569.22 185.958 569.22 188.819 569.988 190.25C495.435 184.528 420.113 180.951 345.56 180.951C271.007 180.951 196.453 183.812 121.132 190.25C123.437 188.104 123.437 185.243 124.206 183.097ZM135.735 346.181C108.834 346.181 86.545 325.438 86.545 300.403C86.545 275.368 108.834 254.625 135.735 254.625C162.635 254.625 184.925 275.368 184.925 300.403C184.925 326.153 162.635 346.181 135.735 346.181ZM558.46 346.181C531.559 346.181 509.27 325.438 509.27 300.403C509.27 275.368 531.559 254.625 558.46 254.625C585.36 254.625 607.649 275.368 607.649 300.403C607.649 326.153 585.36 346.181 558.46 346.181Z" fill="#222222"></path>
                                            </svg>
                                        <br />
                                        1 Garage
                                    </div>
                                    <div className="col-4 col-md-2 text-center">
                                        <svg width="40" height="40" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M357.143 0H42.8571C31.4907 0 20.5898 4.50961 12.5526 12.5368C4.51529 20.5639 0 31.4511 0 42.8032V356.694C0 368.046 4.51529 378.933 12.5526 386.96C20.5898 394.987 31.4907 399.497 42.8571 399.497H357.143C368.509 399.497 379.41 394.987 387.447 386.96C395.485 378.933 400 368.046 400 356.694V42.8032C400 31.4511 395.485 20.5639 387.447 12.5368C379.41 4.50961 368.509 0 357.143 0ZM371.429 356.694C371.429 360.478 369.923 364.107 367.244 366.782C364.565 369.458 360.932 370.961 357.143 370.961H171.429V299.623H314.286C318.075 299.623 321.708 298.119 324.387 295.444C327.066 292.768 328.571 289.139 328.571 285.355C328.571 281.571 327.066 277.942 324.387 275.266C321.708 272.59 318.075 271.087 314.286 271.087H157.143C153.354 271.087 149.72 272.59 147.041 275.266C144.362 277.942 142.857 281.571 142.857 285.355V370.961H42.8571C39.0683 370.961 35.4347 369.458 32.7556 366.782C30.0765 364.107 28.5714 360.478 28.5714 356.694V171.213H142.857V199.748C142.857 203.532 144.362 207.162 147.041 209.837C149.72 212.513 153.354 214.016 157.143 214.016C160.932 214.016 164.565 212.513 167.244 209.837C169.923 207.162 171.429 203.532 171.429 199.748V114.142C171.429 110.358 169.923 106.729 167.244 104.053C164.565 101.377 160.932 99.8742 157.143 99.8742C153.354 99.8742 149.72 101.377 147.041 104.053C144.362 106.729 142.857 110.358 142.857 114.142V142.677H28.5714V42.8032C28.5714 39.0192 30.0765 35.3901 32.7556 32.7144C35.4347 30.0387 39.0683 28.5355 42.8571 28.5355H242.857V185.481C242.857 189.265 244.362 192.894 247.041 195.57C249.72 198.245 253.354 199.748 257.143 199.748H314.286C318.075 199.748 321.708 198.245 324.387 195.57C327.066 192.894 328.571 189.265 328.571 185.481C328.571 181.697 327.066 178.068 324.387 175.392C321.708 172.716 318.075 171.213 314.286 171.213H271.429V28.5355H357.143C360.932 28.5355 364.565 30.0387 367.244 32.7144C369.923 35.3901 371.429 39.0192 371.429 42.8032V356.694Z" fill="#222222"></path>
                                            </svg>
                                        <br />
                                        250 m*m
                                    </div>
                                    <div className="col-4 col-md-2 text-center">
                                        <svg width="40" height="40" viewBox="0 0 406 424" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M290.204 0C297.84 0 304.03 6.19017 304.03 13.8261V66.9701C320.062 72.7236 331.682 88.0982 331.682 106C331.682 128.744 312.948 147.478 290.204 147.478C267.46 147.478 248.725 128.744 248.725 106C248.725 88.0982 260.345 72.7236 276.378 66.9701V13.8261C276.378 6.19017 282.568 0 290.204 0ZM115.073 0C122.709 0 128.899 6.19017 128.899 13.8261V66.9701C144.932 72.7236 156.552 88.0982 156.552 106C156.552 128.744 137.817 147.478 115.073 147.478C92.3294 147.478 73.5951 128.744 73.5951 106C73.5951 88.0982 85.2148 72.7236 101.247 66.9701V13.8261C101.247 6.19017 107.438 0 115.073 0ZM354.725 27.6522C382.648 27.6522 405.565 50.5689 405.565 78.4918V373.16C405.565 401.084 382.648 424 354.725 424H50.8396C22.917 424 0 401.084 0 373.16V78.4918C0 50.5689 22.917 27.6522 50.8396 27.6522H78.3478C85.6521 27.5489 92.3179 34.173 92.3179 41.4782C92.3179 48.7835 85.6521 55.4076 78.3478 55.3043H50.8396C37.7841 55.3043 27.6522 65.4359 27.6522 78.4918V156.695H377.913V78.4918C377.913 65.4359 367.781 55.3043 354.725 55.3043H327.217C319.913 55.4075 313.247 48.7835 313.247 41.4782C313.247 34.173 319.913 27.5489 327.217 27.6522H354.725ZM253.478 27.6522C261.114 27.6522 267.304 33.8421 267.304 41.4782C267.304 49.1139 261.114 55.3043 253.478 55.3043H152.087C144.451 55.3043 138.261 49.1139 138.261 41.4782C138.261 33.8421 144.451 27.6522 152.087 27.6522H253.478ZM377.913 184.348H27.6522V373.16C27.6522 386.216 37.7841 396.348 50.8396 396.348H354.725C367.781 396.348 377.913 386.216 377.913 373.16V184.348Z" fill="#222222"></path>
                                            </svg>
                                        <br />
                                        Year Build: 200
                                    </div>
                                </div>
                            </div>
                        </div>


                        <br />
                        {/* <!-- Description Card --> */}
                        <div className="card p-3">
                            <div className="card-body">
                                <h3>Description</h3>
                                <p>
                                    This beautiful property is located in the heart of the city, offering a perfect blend of modern amenities and classNameic charm. With spacious rooms, a large garden, and proximity to local attractions, it is ideal for families or individuals looking for a comfortable living space. The property features high ceilings, hardwood floors, and large windows that provide plenty of natural light. Don't miss out on this opportunity to own a piece of paradise!
                                </p>
                            </div>
                        </div>
                        

                        <br />
                        {/* <!-- Address Card --> */}
                        <div className="card">
                            <div className="card-header">
                                <h3>Address</h3>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                <div className="listing_detail wpresidence-detail-address col-md-4">
                                    <strong>Address:</strong> Calle de Lagasca
                                </div>
                                <div className="listing_detail wpresidence-detail-city col-md-4">
                                    <strong>City:</strong> <a style={{color: '#52AA5E', textDecoration: 'none'}} href="https://madrid.wpresidence.net/property_city/madrid/" rel="tag">Madrid</a>
                                </div>
                                <div className="listing_detail wpresidence-detail-area col-md-4">
                                    <strong>Area:</strong> <a style={{color: '#52AA5E', textDecoration: 'none'}} href="https://madrid.wpresidence.net/property_area/castellana/" rel="tag">Castellana</a>
                                </div>
                                <div className="listing_detail wpresidence-detail-state-county col-md-4">
                                    <strong>State/County:</strong> <a style={{color: '#52AA5E', textDecoration: 'none'}} href="https://madrid.wpresidence.net/property_county_state/comunidad-de-madrid/" rel="tag">Comunidad de Madrid</a>
                                </div>
                                <div className="listing_detail wpresidence-detail-zip col-md-4">
                                    <strong>Zip:</strong> 28006
                                </div>
                                <div className="listing_detail wpresidence-detail-country col-md-4">
                                    <strong>Country:</strong> Spain
                                </div>
                                <div className="col-md-12 p-0"></div>
                                </div>
                            </div>
                        </div>

                        <br />
                        {/* <!-- Details Card --> */}
                        <div className="card">
                            <div className="card-header">
                                <h3>Details</h3>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                <div className="listing_detail col-md-4 propertyid_display">
                                    <strong>Property Id:</strong> 139
                                </div>
                                <div className="listing_detail col-md-4 property_default_price">
                                    <strong>Price:</strong> 5.500.000 € <span className="price_label"></span>
                                </div>
                                <div className="listing_detail col-md-4 property_default_property_size">
                                    <strong>Property Size:</strong> <span>250 m<sup>2</sup></span>
                                </div>
                                <div className="listing_detail col-md-4 property_default_lot_size">
                                    <strong>Property Lot Size:</strong> <span>600 m<sup>2</sup></span>
                                </div>
                                <div className="listing_detail col-md-4 property_default_rooms">
                                    <strong>Rooms:</strong> 3
                                </div>
                                <div className="listing_detail col-md-4 property_default_bedrooms">
                                    <strong>Bedrooms:</strong> 5
                                </div>
                                <div className="listing_detail col-md-4 property_default_bathrooms">
                                    <strong>Bathrooms:</strong> 3
                                </div>
                                <div className="listing_detail col-md-4 property-year">
                                    <strong>Year Built:</strong> 200
                                </div>
                                <div className="listing_detail col-md-4 property-garage">
                                    <strong>Garages:</strong> 1
                                </div>
                                <div className="listing_detail col-md-4 property-garage-size">
                                    <strong>Garage Size:</strong> 1 car
                                </div>
                                <div className="listing_detail col-md-4 property-date">
                                    <strong>Available from:</strong> 2021-09-16
                                </div>
                                <div className="listing_detail col-md-4 property-basement">
                                    <strong>Basement:</strong> cement
                                </div>
                                <div className="listing_detail col-md-4 property-external-construction">
                                    <strong>External construction:</strong> No
                                </div>
                                <div className="listing_detail col-md-4 property-roofing">
                                    <strong>Roofing:</strong> Old
                                </div>
                                </div>
                            </div>
                            </div>

                        
                        <br />
                        {/* <!-- Features Card --> */}
                        {/* <!-- Features Card --> */}
<div className="card">
  <div className="card-header">
    <h3>Features</h3>
  </div>
  <div className="card-body">
    <div className="row">
      {/* Interior Details */}
      <div className="col-md-6">
        <h5>Interior Details</h5>
        <ul className="list-unstyled">
          <li><i className="bi bi-house-door"></i> Equipped Kitchen</li>
          <li><i className="bi bi-dumbbell"></i> Gym</li>
          <li><i className="bi bi-washing-machine"></i> Laundry</li>
          <li><i className="bi bi-tv"></i> Media Room</li>
        </ul>
      </div>

      {/* Outdoor Details */}
      <div className="col-md-6">
        <h5>Outdoor Details</h5>
        <ul className="list-unstyled">
          <li><i className="bi bi-tree"></i> Back Yard</li>
          <li><i className="bi bi-basketball"></i> Basketball Court</li>
          <li><i className="bi bi-garage"></i> Garage Attached</li>
          <li><i className="bi bi-hot"></i> Hot Bath</li>
          <li><i className="bi bi-water"></i> Pool</li>
        </ul>
      </div>

      {/* Utilities */}
      <div className="col-md-6">
        <h5>Utilities</h5>
        <ul className="list-unstyled">
          <li><i className="bi bi-wind"></i> Central Air</li>
          <li><i className="bi bi-lightning"></i> Electricity</li>
          <li><i className="bi bi-thermometer"></i> Heating</li>
          <li><i className="bi bi-fuel-pump"></i> Natural Gas</li>
          <li><i className="bi bi-fan"></i> Ventilation</li>
          <li><i className="bi bi-droplet"></i> Water</li>
        </ul>
      </div>

      {/* Other Features */}
      <div className="col-md-6">
        <h5>Other Features</h5>
        <ul className="list-unstyled">
          <li><i className="bi bi-wheelchair"></i> Chair Accessible</li>
          <li><i className="bi bi-building"></i> Elevator</li>
          <li><i className="bi bi-bell"></i> Smoke Detectors</li>
        </ul>
      </div>
    </div>
  </div>
</div>

                        
                        <br />
                        {/* <!-- Floor Plan --> */}
                        <div className="card">
    <div className="card-header">
        <h3>Floor Plans</h3>
    </div>
    <div className="card-body">
        <div className="row">
            <div className="row front_plan_row">
                <div className="col-md-12">
                    <h5 className="floor_title">Floor Plan C</h5>
                </div>
                <div className="col-md-3 card p-3 align-items-center">
                    <p className="floor_details mb-0"><span className="bold_detail">Size:</span> 200 m<sup>2</sup></p>
                </div>
                <div className="col-md-3 card p-3 align-items-center">
                    <p className="floor_details mb-0"><span className="bold_detail">Rooms:</span> 2</p>
                </div>
                <div className="col-md-3 card p-3 align-items-center">
                    <p className="floor_details mb-0"><span className="bold_detail">Baths:</span> 2</p>
                </div>
                <div className="col-md-3 card p-3 align-items-center">
                    <p className="floor_details floor_price_details mb-0"><span className="bold_detail">Price:</span> 1.500 €</p>
                </div>
            </div>
            <div className="front_plan_row_image" style={{ display: 'block' }}>
                <div className="floor_image">
                    <a href="https://madrid.b-cdn.net/wp-content/uploads/2021/11/floor-plan-3-1-5-3.jpg" title="Inside this enchanting home, the great room enjoys a fireplace and views of the rear patio. The secluded master suite at the front of the home delights in tons of natural light, a splendid bath, a sitting room with a fireplace, and a private lanai. Three upper-level bedrooms share an optional bonus room, perfect for a home gym, playroom, or studio. Click the home to see the layout!">
                        <img className="img-fluid lightbox_trigger_floor" data-slider-no="1" src="https://madrid.b-cdn.net/wp-content/uploads/2021/11/floor-plan-3-1-5-3.jpg" alt="Floor Plan C" />
                    </a>
                </div>
                <div className="floor_description">Inside this enchanting home, the great room enjoys a fireplace and views of the rear patio. The secluded master suite at the front of the home delights in tons of natural light, a splendid bath, a sitting room with a fireplace, and a private lanai. Three upper-level bedrooms share an optional bonus room, perfect for a home gym, playroom, or studio. Click the home to see the layout!</div>
            </div>
            <div className="row front_plan_row">
                <div className="col-md-12">
                    <h5 className="floor_title pt-3">Floor Plan B</h5>
                </div>
                <div className="col-md-3 card p-3 align-items-center">
                    <p className="floor_details mb-0"><span className="bold_detail">Size:</span> 300 m<sup>2</sup></p>
                </div>
                <div className="col-md-3 card p-3 align-items-center">
                    <p className="floor_details mb-0"><span className="bold_detail">Rooms:</span> 3</p>
                </div>
                <div className="col-md-3 card p-3 align-items-center">
                    <p className="floor_details mb-0"><span className="bold_detail">Baths:</span> 2</p>
                </div>
                <div className="col-md-3 card p-3 align-items-center">
                    <p className="floor_details floor_price_details mb-0"><span className="bold_detail">Price:</span> 1.600 €</p>
                </div>
            </div>
            <div className="front_plan_row_image pt-3">
                <div className="floor_description">Living Spaces are more easily interpreted. All-In-Ones color floor plan option clearly defines your listing’s living spaces, making them obvious and clearly visible to your potential buyers/clients. Add extra value to your services. Color floor-plans show that you care about selling your client’s listing; they add a premium, high value look to any listing and can be used in your brochures, email and websites.</div>
            </div>
        </div>
    </div>
</div>

                        <br />
                        {/* <!-- Reviews --> */}
                         <div className="card p-3">
                            <div className="card-body">
                                <div className="bg-" id="property_reviews_area"><h3>Reviews</h3>You need to <span  style={{color: '#52AA5E'}}><b>login</b></span> in order to post a review</div>
                            </div>
                         </div>
                        

                        <br />
                        {/* <!-- Similer Listing card --> */}
                        <div className="card p-3">
                            <div className="card-body">
                                <h3>Similer Property Listing</h3>
                                <br />
                                <div className="row">
                                    <div className="col-sm-6 col-md-4 wow fadeInUp" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp'}}>
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href=""><img className="img-fluid" src={IMG1} alt="" /></a>
                                                <div style={{background: '#52AA5E', color: '#fff'}} className="rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                                <div style={{color: '#52AA5E'}} className="bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 style={{color: '#52AA5E', fontWeight: '700'}} className="mb-3">৳5999</h5>
                                                <a style={{color: '#000', textDecoration: 'none'}} className="d-block h5 mb-2" href="">Property Title </a>
                                                <p><i style={{color: '#52AA5E'}} className="fa fa-map-marker-alt me-2"></i>Dhanmondi 26/A, Bangladesh</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined me-2" style={{color: '#52AA5E'}}></i>1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed me-2" style={{color: '#52AA5E'}}></i>3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath me-2" style={{color: '#52AA5E'}}></i>2 Bath</small>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-md-4 wow fadeInUp" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp'}}>
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href=""><img className="img-fluid" src={IMG4} alt="" /></a>
                                                <div style={{background: '#52AA5E', color: '#fff'}} className="rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                                <div style={{color: '#52AA5E'}} className="bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 style={{color: '#52AA5E', fontWeight: '700'}} className="mb-3">৳5999</h5>
                                                <a style={{color: '#000', textDecoration: 'none'}} className="d-block h5 mb-2" href="">Property Title </a>
                                                <p><i style={{color: '#52AA5E'}} className="fa fa-map-marker-alt me-2"></i>Dhanmondi 26/A, Bangladesh</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined me-2" style={{color: '#52AA5E'}}></i>1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed me-2" style={{color: '#52AA5E'}}></i>3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath me-2" style={{color: '#52AA5E'}}></i>2 Bath</small>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-md-4 wow fadeInUp" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp'}}>
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href=""><img className="img-fluid" src={IMG3} alt="" /></a>
                                                <div style={{background: '#52AA5E', color: '#fff'}} className="rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                                <div style={{color: '#52AA5E'}} className="bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 style={{color: '#52AA5E', fontWeight: '700'}} className="mb-3">৳5999</h5>
                                                <a style={{color: '#000', textDecoration: 'none'}} className="d-block h5 mb-2" href="">Property Title </a>
                                                <p><i style={{color: '#52AA5E'}} className="fa fa-map-marker-alt me-2"></i>Dhanmondi 26/A, Bangladesh</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined me-2" style={{color: '#52AA5E'}}></i>1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed me-2" style={{color: '#52AA5E'}}></i>3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath me-2" style={{color: '#52AA5E'}}></i>2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                        

                    </div>
                    {/* <!-- Right Area --> */}
                    <div className="col-lg-4 pt-4 pt-md-0">

                        {/* <!-- Agent Contact Card--> */}
                        <div className="card p-3">
                            <div className="card-body">
                                <h3>Contact with Agent</h3>
                                <br /><br />
                                <div className="row">
                                    <div className="col-md-3">
                                        <img className="img-thumbnail img-fluid" src={AGENTIMG} alt="" />
                                    </div>
                                    <div className="col-md-9">
                                        <h4>Fardin Ahmed</h4>
                                        <h6 style={{color: '#52AA5E'}}>Property Agent</h6>
                                    </div>
                                </div>
                                <br />
                                <form>
                                    <div className="mb-3">
                                        <label for="name" className="form-label">Name</label>
                                        <input type="text" className="py-3 form-control" id="name" placeholder="Enter your name" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email</label>
                                        <input type="email" className="py-3 form-control" id="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="phone" className="form-label">Phone</label>
                                        <input type="tel" className="py-3 form-control" id="phone" placeholder="Enter your phone number" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="description" className="form-label">Description</label>
                                        <textarea className="py-3 form-control" id="description" rows="3" placeholder="Enter your message"></textarea>
                                    </div>
                                    <button style={{background: '#52AA5E', color: '#fff'}} type="submit" className="py-3 btn w-100">Send Email</button>
                                </form>
                                <div className="mt-3 d-flex row">
                                    <div className="col-6">
                                        <a style={{border: '1px solid #52AA5E'}} href="tel:+1234567890" className="w-100 py-3 btn">
                                            <i className="bi bi-telephone"></i> Call
                                        </a>
                                    </div>
                                    <div className="col-6">
                                        <a style={{border: '1px solid #52AA5E'}} href="https://wa.me/1234567890" className="w-100 py-3 btn">
                                            <i className="bi bi-whatsapp"></i> WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br />
                     
                        <div className="card p-3">
                            <div className="card-body">
                                <div className="widget-container advanced_search_sidebar ag_ag_dev_search_widget boxed_widget">
                                    <h3 className="widget-title-sidebar">Agents Search</h3>
                                    <br />
                                    <form role="search" method="get" action="https://madrid.wpresidence.net/agents-agencies-developers-search-results/">
                                        {/* <!-- Keyword Search --> */}
                                        <div className="mb-3">
                                            <label for="keyword_search" className="form-label">Name</label>
                                            <input type="text" id="keyword_search" className="py-3 form-control" name="_keyword_search" placeholder="Name" />
                                        </div>
                                
                                        
                                        <div className="mb-3">
                                            <label for="sidebar-search_post_type" className="form-label">Agent Type</label>
                                            <select id="sidebar-search_post_type" className="py-3 form-select" name="_search_post_type">
                                                <option value="estate_agent">Agent</option>
                                                <option value="estate_agency">Agency</option>
                                                <option value="estate_developer">Developer</option>
                                            </select>
                                        </div>
                                
                                        
                                        <div className="mb-3">
                                            <label for="sidebar-property_city_agent" className="form-label">Select City</label>
                                            <select id="sidebar-property_city_agent" className="py-3 form-select" name="_property_city_agent">
                                                <option value="all">Select City</option>
                                                <option value="madrid">Madrid (4)</option>
                                            </select>
                                        </div>
                                
                                        {/* <!-- Area Dropdown --> */}
                                        <div className="mb-3">
                                            <label for="sidebar-property_area_agent" className="form-label">Select Area</label>
                                            <select id="sidebar-property_area_agent" className="py-3 form-select" name="_property_area_agent">
                                                <option value="all">Select Area</option>
                                                <option value="malasana">Malasaña (4)</option>
                                            </select>
                                        </div>
                                
                                        {/* <!-- Category Dropdown --> */}
                                        <div className="mb-3">
                                            <label for="sidebar-property_category_agent" className="form-label">Select Category</label>
                                            <select id="sidebar-property_category_agent" className="py-3 form-select" name="_property_category_agent">
                                                <option value="all">Select Category</option>
                                                <option value="residential">Residential (4)</option>
                                            </select>
                                        </div>
                                
                                        {/* <!-- Action Category Dropdown --> */}
                                        <div className="mb-3">
                                            <label for="sidebar-property_action_category_agent" className="form-label">Select Action Category</label>
                                            <select id="sidebar-property_action_category_agent" className="py-3 form-select" name="_property_action_category_agent">
                                                <option value="all">Select Action Category</option>
                                                <option value="commercial">Commercial (4)</option>
                                            </select>
                                        </div>
                                
                                        {/* <!-- Submit Button --> */}
                                        <button style={{background: '#52AA5E', color: '#fff'}} type="submit" className="py-3 btn w-100">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <br />
                        {/* <!-- Schedule booking --> */}
                         <div className="card p-3">
                            <div className="card-body">
                                <div>
                                    <h3>Schedule a Tour</h3>
                                    <br />
                                    <form>
                                        {/* <!-- Date Selector --> */}
                                        <div className="mb-3">
                                            <label for="schedule_date" className="form-label">Select Date</label>
                                            <input type="date" id="schedule_date" className="py-3 form-control" name="schedule_date" />
                                        </div>
                                
                                        {/* <!-- Time Selector --> */}
                                        <div className="mb-3">
                                            <label for="wpestate_schedule_tour_time" className="form-label">Select Time</label>
                                            <select name="wpestate_schedule_tour_time" className="py-3 form-select" id="wpestate_schedule_tour_time">
                                                <option value="0">Please select the time</option>
                                                <option value="10:00 am">10:00 am</option>
                                                <option value="10:30 am">10:30 am</option>
                                                <option value="11:00 am">11:00 am</option>
                                                <option value="11:30 am">11:30 am</option>
                                                <option value="12:00 pm">12:00 pm</option>
                                                <option value="12:30 pm">12:30 pm</option>
                                                <option value="01:00 pm">01:00 pm</option>
                                                <option value="01:30 pm">01:30 pm</option>
                                                <option value="02:00 pm">02:00 pm</option>
                                                <option value="02:30 pm">02:30 pm</option>
                                            </select>
                                        </div>
                                
                                        {/* <!-- Tour Options --> */}
                                        <div className="mb-3">
                                            <label className="form-label">Tour Type</label>
                                            <div className="d-flex">
                                                <button style={{border: '1px solid #52AA5E'}} type="button" className="btn me-2">
                                                    <i className="bi bi-person"></i> In Person
                                                </button>
                                                <button type="button" className="btn btn-outline-secondary">
                                                    <i className="bi bi-camera-video"></i> Video Chat
                                                </button>
                                            </div>
                                        </div>
                                
                                        {/* <!-- Contact Information --> */}
                                        <h5>Your Information</h5>
                                        <div className="alert alert-danger d-none" id="alert-agent-contact"></div>
                                        <div className="row g-3">
                                            <div className="col-md-12">
                                                <input name="contact_name" id="agent_contact_name" type="text" placeholder="Your Name" className="py-3 form-control" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="email" name="email" className="py-3 form-control" id="agent_user_email" placeholder="Your Email" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="tel" name="phone" className="py-3 form-control" id="agent_phone" placeholder="Your Phone" />
                                            </div>
                                            <div className="col-md-12">
                                                <textarea id="agent_comment" name="comment" className="py-3 form-control" rows="4">I would like to schedule a tour for [ Villa with Amazing View ].</textarea>
                                            </div>
                                        </div>
                                
                                        
                                        <div className="form-check mt-3">
                                            <input type="checkbox" className="form-check-input" id="wpestate_agree_gdpr_schedule_section" name="wpestate_agree_gdpr" />
                                            <label className="form-check-label" for="wpestate_agree_gdpr_schedule_section">
                                                I consent to the <a style={{color: '#52AA5E', textDecoration: 'none'}} target="_blank" href="https://madrid.wpresidence.net/">GDPR Terms</a>
                                            </label>
                                        </div>
                                
                                        
                                        <button type="submit" style={{background: '#52AA5E', color: '#fff'}} className="btn mt-3">Send Email</button>
                                    </form>
                                </div>
                            </div>
                         </div>

                    </div>
                </div>

            </div>
      </div>

      <Footer />
    </div>
  );
}

export default PropertyDetails;