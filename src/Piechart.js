import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircle} from '@fortawesome/free-solid-svg-icons'
//import {ellipsis} from '@fortawesome/free-thin-svg-icons-svg-icons'
export default function Piechart(){
    return (
<div class="col-xl-4 col-lg-5">
                            <div class="card shadow mb-4">
                               { /* Card Header - Dropdown */}
                                <div
                                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                                    <div class="dropdown no-arrow">
                                        <a class="dropdown-toggle" href="www.guvi.com" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 <FontAwesomeIcon icon={faCircle} />
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div class="dropdown-header">Dropdown Header:</div>
                                            <a class="dropdown-item" href="www.guvi.com">Action</a>
                                            <a class="dropdown-item" href="www.guvi.com">Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="www.guvi.com">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                               { /*  Card Body  */}
                                <div class="card-body">
                                    <div class="chart-pie pt-4 pb-2">
                                        <canvas id="myPieChart"></canvas>
                                    </div>
                                    <div class="mt-4 text-center small">
                                        <span class="mr-2">
                                        <FontAwesomeIcon icon={faCircle} style={{color: "#0000FF",}} /> Direct
                                        </span>
                                        <span class="mr-2">
                                        <FontAwesomeIcon icon={faCircle} style={{color: "#bb30af",}} />Social
                                        </span>
                                        <span class="mr-2">
                                        <FontAwesomeIcon icon={faCircle} style={{color: "#00FFFF",}} /> Referral
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
    )
}