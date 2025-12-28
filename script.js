let openedDoors = {};

function loadOpenedDoors() {
  const saved = localStorage.getItem('openedDoors_xmas');
  if(saved) openedDoors = JSON.parse(saved);
}

function saveOpenedDoors() {
  localStorage.setItem('openedDoors_xmas', JSON.stringify(openedDoors));
}

function createCalendar() {
  const calendar = document.getElementById('calendar');
  calendar.innerHTML = '';

  const now = new Date();
  const fiTime = new Date(now.toLocaleString("en-US",{timeZone:"Europe/Helsinki"}));
  const currentDay = fiTime.getDate();
  const currentMonth = fiTime.getMonth()+1;

  for(let i=1;i<=24;i++){
    const door = document.createElement('div');
    door.className='door';
    door.textContent=i;

    const isOpened = openedDoors[i]===true;
    const canOpen = (currentMonth===12 && i<=currentDay) || currentMonth>12 || isOpened;

    if(!canOpen){
      door.classList.add('locked');
      door.onclick = ()=> alert(`Tämä luukku avautuu vasta ${i}. joulukuuta!`);
    } else {
      if(isOpened) door.classList.add('opened');
      door.onclick = ()=> openDoor(i);
    }

    calendar.appendChild(door);
  }
}

function openDoor(day){
  fetch(`days/day${day}.html`)
    .then(res => res.text())
    .then(content => {
      document.getElementById('window-title').textContent = `Luukku ${day}`;
      document.getElementById('window-content').innerHTML = content;
      document.getElementById('door-window').style.display = 'block';
    });

  openedDoors[day] = true;
  saveOpenedDoors();

  const doorElements = document.querySelectorAll('.door');
  if(doorElements[day-1]) doorElements[day-1].classList.add('opened');
}

document.getElementById('window-close').onclick = ()=> {
  document.getElementById('door-window').style.display='none';
}

loadOpenedDoors();
createCalendar();

