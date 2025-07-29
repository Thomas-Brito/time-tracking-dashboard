fetch('/data.json').then((response) => {
  if (!response.ok) return console.log('Oops! Something went wrong.');
  return response.json();
}).then((data) => {
  const work = data.find(item => item.title === "Work");
  document.getElementById('card-work-daily-current-value').innerText = work.timeframes.daily.current + "hrs";
  document.getElementById('card-work-daily-previous-value').innerText = "Last Day - " + work.timeframes.daily.previous + "hrs";
  document.getElementById('card-work-weekly-current-value').innerText = work.timeframes.weekly.current + "hrs";
  document.getElementById('card-work-weekly-previous-value').innerText = "Last Week - " + work.timeframes.weekly.previous + "hrs";
  document.getElementById('card-work-monthly-current-value').innerText = work.timeframes.monthly.current + "hrs";
  document.getElementById('card-work-monthly-previous-value').innerText = "Last Month - " + work.timeframes.monthly.previous + "hrs";
  
  const play = data.find(item => item.title === "Play");
  document.getElementById('card-play-daily-current-value').innerText = play.timeframes.daily.current + "hrs";
  document.getElementById('card-play-daily-previous-value').innerText = "Last Day - " + play.timeframes.daily.previous + "hrs";
  document.getElementById('card-play-weekly-current-value').innerText = play.timeframes.weekly.current + "hrs";
  document.getElementById('card-play-weekly-previous-value').innerText = "Last Week - " + play.timeframes.weekly.previous + "hrs";
  document.getElementById('card-play-monthly-current-value').innerText = play.timeframes.monthly.current + "hrs";
  document.getElementById('card-play-monthly-previous-value').innerText = "Last Month - " + play.timeframes.monthly.previous + "hrs";

  const study = data.find(item => item.title === "Study");
  document.getElementById('card-study-daily-current-value').innerText = study.timeframes.daily.current + "hrs";
  document.getElementById('card-study-daily-previous-value').innerText = "Last Day - " + study.timeframes.daily.previous + "hrs";
  document.getElementById('card-study-weekly-current-value').innerText = study.timeframes.weekly.current + "hrs";
  document.getElementById('card-study-weekly-previous-value').innerText = "Last Week - " + study.timeframes.weekly.previous + "hrs";
  document.getElementById('card-study-monthly-current-value').innerText = study.timeframes.monthly.current + "hrs";
  document.getElementById('card-study-monthly-previous-value').innerText = "Last Month - " + study.timeframes.monthly.previous + "hrs";

  const exercise = data.find(item => item.title === "Exercise");
  document.getElementById('card-exercise-daily-current-value').innerText = exercise.timeframes.daily.current + "hrs";
  document.getElementById('card-exercise-daily-previous-value').innerText = "Last Day - " + exercise.timeframes.daily.previous + "hrs";
  document.getElementById('card-exercise-weekly-current-value').innerText = exercise.timeframes.weekly.current + "hrs";
  document.getElementById('card-exercise-weekly-previous-value').innerText = "Last Week - " + exercise.timeframes.weekly.previous + "hrs";
  document.getElementById('card-exercise-monthly-current-value').innerText = exercise.timeframes.monthly.current + "hrs";
  document.getElementById('card-exercise-monthly-previous-value').innerText = "Last Month - " + exercise.timeframes.monthly.previous + "hrs";

  const social = data.find(item => item.title === "Social");
  document.getElementById('card-social-daily-current-value').innerText = social.timeframes.daily.current + "hrs";
  document.getElementById('card-social-daily-previous-value').innerText = "Last Day - " + social.timeframes.daily.previous + "hrs";
  document.getElementById('card-social-weekly-current-value').innerText = social.timeframes.weekly.current + "hrs";
  document.getElementById('card-social-weekly-previous-value').innerText = "Last Week - " + social.timeframes.weekly.previous + "hrs";
  document.getElementById('card-social-monthly-current-value').innerText = social.timeframes.monthly.current + "hrs";
  document.getElementById('card-social-monthly-previous-value').innerText = "Last Month - " + social.timeframes.monthly.previous + "hrs";

  const selfCare = data.find(item => item.title === "Self Care");
  document.getElementById('card-self-care-daily-current-value').innerText = selfCare.timeframes.daily.current + "hrs";
  document.getElementById('card-self-care-daily-previous-value').innerText = "Last Day - " + selfCare.timeframes.daily.previous + "hrs";
  document.getElementById('card-self-care-weekly-current-value').innerText = selfCare.timeframes.weekly.current + "hrs";
  document.getElementById('card-self-care-weekly-previous-value').innerText = "Last Week - " + selfCare.timeframes.weekly.previous + "hrs";
  document.getElementById('card-self-care-monthly-current-value').innerText = selfCare.timeframes.monthly.current + "hrs";
  document.getElementById('card-self-care-monthly-previous-value').innerText = "Last Month - " + selfCare.timeframes.monthly.previous + "hrs";
});

const dailyLabel = document.getElementById('daily-label');
const weeklyLabel = document.getElementById('weekly-label');
const monthlyLabel = document.getElementById('monthly-label');

const workDaily = document.getElementById('card-work__daily-container');
const workWeekly = document.getElementById('card-work__weekly-container');
const workMonthly = document.getElementById('card-work__monthly-container');

const playDaily = document.getElementById('card-play__daily-container');
const playWeekly = document.getElementById('card-play__weekly-container');
const playMonthly = document.getElementById('card-play__monthly-container');

const studyDaily = document.getElementById('card-study__daily-container');
const studyWeekly = document.getElementById('card-study__weekly-container');
const studyMonthly = document.getElementById('card-study__monthly-container');

const exerciseDaily = document.getElementById('card-exercise__daily-container');
const exerciseWeekly = document.getElementById('card-exercise__weekly-container');
const exerciseMonthly = document.getElementById('card-exercise__monthly-container');

const socialDaily = document.getElementById('card-social__daily-container');
const socialWeekly = document.getElementById('card-social__weekly-container');
const socialMonthly = document.getElementById('card-social__monthly-container');

const selfCareDaily = document.getElementById('card-self-care__daily-container');
const selfCareWeekly = document.getElementById('card-self-care__weekly-container');
const selfCareMonthly = document.getElementById('card-self-care__monthly-container');


function changePeriod() {
  const selectedOption = document.querySelector('input[name="period"]:checked');

  switch (selectedOption.id) {
    case "daily":
      // Work
      workDaily.classList.add('card-work__daily-container--active');
      workWeekly.classList.remove('card-work__weekly-container--active');
      workMonthly.classList.remove('card-work__monthly-container--active');
      // Play
      playDaily.classList.add('card-play__daily-container--active');
      playWeekly.classList.remove('card-play__weekly-container--active');
      playMonthly.classList.remove('card-play__monthly-container--active');
      // Study
      studyDaily.classList.add('card-study__daily-container--active');
      studyWeekly.classList.remove('card-study__weekly-container--active');
      studyMonthly.classList.remove('card-study__monthly-container--active');
      // Exercise
      exerciseDaily.classList.add('card-exercise__daily-container--active');
      exerciseWeekly.classList.remove('card-exercise__weekly-container--active');
      exerciseMonthly.classList.remove('card-exercise__monthly-container--active');
      // Social
      socialDaily.classList.add('card-social__daily-container--active');
      socialWeekly.classList.remove('card-social__weekly-container--active');
      socialMonthly.classList.remove('card-social__monthly-container--active');
      // Self Care
      selfCareDaily.classList.add('card-self-care__daily-container--active');
      selfCareWeekly.classList.remove('card-self-care__weekly-container--active');
      selfCareMonthly.classList.remove('card-self-care__monthly-container--active');
      // Option
      dailyLabel.classList.add('card-person__item--selected');
      weeklyLabel.classList.remove('card-person__item--selected');
      monthlyLabel.classList.remove('card-person__item--selected');
      break;

    case "weekly":
      // Work
      workDaily.classList.remove('card-work__daily-container--active');
      workWeekly.classList.add('card-work__weekly-container--active');
      workMonthly.classList.remove('card-work__monthly-container--active');
      // Play
      playDaily.classList.remove('card-play__daily-container--active');
      playWeekly.classList.add('card-play__weekly-container--active');
      playMonthly.classList.remove('card-play__monthly-container--active');
      // Study
      studyDaily.classList.remove('card-study__daily-container--active');
      studyWeekly.classList.add('card-study__weekly-container--active');
      studyMonthly.classList.remove('card-study__monthly-container--active');
      // Exercise
      exerciseDaily.classList.remove('card-exercise__daily-container--active');
      exerciseWeekly.classList.add('card-exercise__weekly-container--active');
      exerciseMonthly.classList.remove('card-exercise__monthly-container--active');
      // Social
      socialDaily.classList.remove('card-social__daily-container--active');
      socialWeekly.classList.add('card-social__weekly-container--active');
      socialMonthly.classList.remove('card-social__monthly-container--active');
      // Self Care
      selfCareDaily.classList.remove('card-self-care__daily-container--active');
      selfCareWeekly.classList.add('card-self-care__weekly-container--active');
      selfCareMonthly.classList.remove('card-self-care__monthly-container--active');
      // Option
      dailyLabel.classList.remove('card-person__item--selected');
      weeklyLabel.classList.add('card-person__item--selected');
      monthlyLabel.classList.remove('card-person__item--selected');
      break;

    case "monthly":
      // Work
      workDaily.classList.remove('card-work__daily-container--active');
      workWeekly.classList.remove('card-work__weekly-container--active');
      workMonthly.classList.add('card-work__monthly-container--active');
      // Play
      playDaily.classList.remove('card-play__daily-container--active');
      playWeekly.classList.remove('card-play__weekly-container--active');
      playMonthly.classList.add('card-play__monthly-container--active');
      // Study
      studyDaily.classList.remove('card-study__daily-container--active');
      studyWeekly.classList.remove('card-study__weekly-container--active');
      studyMonthly.classList.add('card-study__monthly-container--active');
      // Exercise
      exerciseDaily.classList.remove('card-exercise__daily-container--active');
      exerciseWeekly.classList.remove('card-exercise__weekly-container--active');
      exerciseMonthly.classList.add('card-exercise__monthly-container--active');
      // Social
      socialDaily.classList.remove('card-social__daily-container--active');
      socialWeekly.classList.remove('card-social__weekly-container--active');
      socialMonthly.classList.add('card-social__monthly-container--active');
      // Self Care
      selfCareDaily.classList.remove('card-self-care__daily-container--active');
      selfCareWeekly.classList.remove('card-self-care__weekly-container--active');
      selfCareMonthly.classList.add('card-self-care__monthly-container--active');
      // Option
      dailyLabel.classList.remove('card-person__item--selected');
      weeklyLabel.classList.remove('card-person__item--selected');
      monthlyLabel.classList.add('card-person__item--selected');
      break;
  }
}
document.addEventListener('change', changePeriod);