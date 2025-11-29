const dataMap = {
  forms: [9, 5, 1, 3],
  seminars: [7, 3, 2, 3],
  projects: [10, 7, 3, 9]
};

const ctx = document.getElementById('pieChart').getContext('2d');

let pieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Done', 'Due', 'Partial', 'Incomplete'],
    datasets: [{
      data: dataMap.forms,
      backgroundColor: ['#4CAF50', '#FFC107', '#DC143C', '#FF7F50'],
      borderWidth: 1,
      borderColor: '#fff'
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Activity Progress' }
    }
  }
});

document.getElementById('activityDropdown').addEventListener('change', function () {
  const selected = this.value;
  pieChart.data.datasets[0].data = dataMap[selected];
  pieChart.update();
});
