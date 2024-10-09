// Отримуємо елемент canvas
const ctx = document.getElementById('sales-chart').getContext('2d');

// Дані для графіка
const chartData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: "rgba(33, 150, 243, 0.2)",  // Напівпрозорий фон
      borderColor: "#2196f3",  // Колір лінії
      borderWidth: 2,  // Ширина лінії
      fill: true,  // Заповнення простору під лінією
    },
  ],
};

// Конфігурація для графіка
const config = {
  type: 'line',  // Тип графіка "line"
  data: chartData,  // Передаємо дані
  options: {
    responsive: true,  // Адаптивність до розміру екрану
    scales: {
      x: {
        title: {
          display: true,
          text: 'Дні місяця',  // Підпис осі X
        },
      },
      y: {
        title: {
          display: true,
          text: 'Продажі (в одиницях)',  // Підпис осі Y
        },
        beginAtZero: true,  // Початок осі Y з нуля
      },
    },
  },
};

// Створюємо графік
const salesChart = new Chart(ctx, config);
