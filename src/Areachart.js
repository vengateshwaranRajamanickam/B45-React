import React from 'react'

export default function Areachart(){
    return (
// Area Chart 
<div class="col-xl-8 col-lg-7">
    <div class="card shadow mb-4">
       
        <div
            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Earnings Overview</h6>
            <div class="dropdown no-arrow">
                <a class="dropdown-toggle" href="www.guvi.com" role="button" id="dropdownMenuLink"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
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
        
        <div class="card-body">
            <div class="chart-area">
                <canvas id="myAreaChart"></canvas>
            </div>
        </div>
    </div>
</div>
    )
}