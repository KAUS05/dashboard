//navbar
const notification_btn = document.getElementById('notification_btn')
const notification_list = document.getElementById('notification_list')

notification_list.style.display = 'none'

notification_btn.addEventListener('click', (e) => {
  if(notification_list.style.display === 'none'){
    notification_list.style.display = 'block'
  }
  else{
    notification_list.style.display = 'none'
  }
})

const dropdown_btn = document.getElementById('dropdown_btn')
const dropdown_list = document.getElementById('dropdown_list')

dropdown_list.style.display = 'none'

dropdown_btn.addEventListener('click', (e) => {
  if(dropdown_list.style.display === 'none'){
    dropdown_list.style.display = 'block'
  }
  else{
    dropdown_list.style.display = 'none'
  }
})

//sidebar
const left = document.querySelector('.sidebar_left')
function openSideMenu(e) {
  document.getElementById('side-menu').style.width = '220px'
  document.querySelector('.manage_campaign_right').style.marginLeft = '65px'
}

function closeSideMenu(){
  document.getElementById('side-menu').style.width = '0px'
  document.querySelector('.manage_campaign_right').style.marginLeft = '0px'
}


//dropdwon
document.querySelector('.custom-select-wrapper-service').addEventListener('click', function() {
  this.querySelector('.custom-select-service').classList.toggle('open-service');
})

for (const option of document.querySelectorAll(".custom-option-service")) {
option.addEventListener('click', function() {
    if (!this.classList.contains('selected-service')) {
        this.parentNode.querySelector('.custom-option-service.selected-service').classList.remove('selected-service');
        this.classList.add('selected-service');
        this.closest('.custom-select-service').querySelector('.custom-select__trigger-service span').textContent = this.textContent;
    }
})
}

document.querySelector('.custom-select-wrapper-template').addEventListener('click', function() {
  this.querySelector('.custom-select-template').classList.toggle('open-template');
})

for (const option of document.querySelectorAll(".custom-option-template")) {
option.addEventListener('click', function() {
    if (!this.classList.contains('selected-template')) {
        this.parentNode.querySelector('.custom-option-template.selected-template').classList.remove('selected-template');
        this.classList.add('selected-template');
        this.closest('.custom-select-template').querySelector('.custom-select__trigger-template span').textContent = this.textContent;
    }
})
}

document.querySelector('.custom-select-wrapper-language').addEventListener('click', function() {
  this.querySelector('.custom-select-language').classList.toggle('open-language');
})

for (const option of document.querySelectorAll(".custom-option-language")) {
option.addEventListener('click', function() {
    if (!this.classList.contains('selected-language')) {
        this.parentNode.querySelector('.custom-option-language.selected-language').classList.remove('selected-language');
        this.classList.add('selected-language');
        this.closest('.custom-select-language').querySelector('.custom-select__trigger-language span').textContent = this.textContent;
    }
})
}


//chart

let myChart = document.getElementById('myChart').getContext('2d')
Chart.defaults.global.defaultFontFamily = 'Open Sans';
Chart.defaults.global.legend.display = false;
Chart.defaults.global.tooltips.enabled = false;


// default
new Chart(myChart, {
  type: 'line',
  data: {
    labels: [0, 5, 10, 15, 20, 25 ],
    datasets: [{ 
      data: [1686,114,106,106,107,111,133,221,783,2478],
      label: "sms failed",
      borderColor: "red",
      fill: false
    }, { 
      data: [1282,350,411,502,635,809,947,1402,3700,5267],
      label: "sms processing",
      borderColor: "blue",
      fill: false
    }, { 
      data: [1168,170,178,190,203,276,408,547,675,734],
      label: "sms delivered",
      borderColor: "#3cba9f",
      fill: false
    }, { 
      data: [4110,20,10,16,24,38,74,167,508,784],
      label: "sms sent",
        borderColor: "green",
        fill: false
      }
    ]
  },
  options: {
    title: {
      // display: true,
      text: ''
    }
  }
});


// chart 1-4
var sent = {
  chart: {
      // height: 350,
      type: 'line',
      zoom: {
          enabled: false
      },
      toolbar: {
        show: false
      }
  },
  series: [{
      data: [1, 5]
  }],
  dataLabels: {
      enabled: false
  },
  stroke: {
      curve: 'straight'
  },
  title: {
      // text: '231',
      // align: 'left'
  },
  grid: {
      row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.1
      },
  },
  xaxis: {
      categories: ['', '', ],
  },
  stroke: {
    // show: true,
    curve: 'smooth',
    // lineCap: 'butt',
    colors: '#00FF00',
    width: 1,
    // dashArray: 0,      
}
}
var error = {
  chart: {
      // height: 350,
      type: 'line',
      zoom: {
          enabled: false
      },
      toolbar: {
        show: false
      }
  },
  series: [{
    //   name: "Desktops",
      data: [1, 5]
  }],
  dataLabels: {
      enabled: false
  },
  stroke: {
      curve: 'straight'
  },
  title: {
      // text: '231',
      // align: 'left'
  },
  grid: {
      row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        //   opacity: 0.5
      },
  },
  xaxis: {
      categories: ['', ''],
  },
  stroke: {
    // show: true,
    curve: 'smooth',
    // lineCap: 'butt',
    colors: '#ff0000',
    width: 1,
    // dashArray: 0,      
}
}

var chartOne = new ApexCharts(
  document.querySelector("#chartOne"),
  sent
);
var chartTwo = new ApexCharts(
  document.querySelector("#chartTwo"),
  error
);
var chartThree = new ApexCharts(
  document.querySelector("#chartThree"),
  sent
);
var chartFour = new ApexCharts(
  document.querySelector("#chartFour"),
  error
);

chartOne.render();
chartTwo.render();
chartThree.render();
chartFour.render();


// tracker chart
 // Chart options
 Chart.defaults.global.legend.display = false;
 Chart.defaults.global.tooltips.enabled = false;

let trackerOneChart = document.getElementById('tracker_one_chart').getContext('2d')

let pieChart = new Chart(trackerOneChart, {
  type: 'doughnut',
  data: {
    labels: ['Select', 'Select', 'Select'],
    datasets: [{
      label: '',
      data: [283, 345, 654],
      backgroundColor: [ "#55D8FE","#FF5454", "#A3A0FB"],
    }]
  },
  option: {}
})

let trackerTwoChart = document.getElementById('tracker_two_chart').getContext('2d')

let pieTwoChart = new Chart(trackerTwoChart, {
  type: 'doughnut',
  data: {
    labels: ['Select', 'Select', 'Select'],
    datasets: [{
      label: '',
      data: [283, 345, 654],
      backgroundColor: [ "#55D8FE","#FF5454", "#A3A0FB"],
    }]
  },
  option: {}
})
