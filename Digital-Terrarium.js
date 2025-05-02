const draggables = document.querySelectorAll('.draggable');
const terrarium = document.getElementById('terrarium');
let draggedElement = null;

// For staging area plants
draggables.forEach(img => {
  img.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('type', 'new');
    e.dataTransfer.setData('src', e.target.src);
  });
});

// For already-placed plants in terrarium
terrarium.addEventListener('dragstart', (e) => {
  if (e.target.classList.contains('plant')) {
    draggedElement = e.target;
    e.dataTransfer.setData('type', 'existing');
  }
});

terrarium.addEventListener('dragover', (e) => {
  e.preventDefault();
});

terrarium.addEventListener('drop', (e) => {
  e.preventDefault();
  const type = e.dataTransfer.getData('type');

  if (type === 'new') {
    const src = e.dataTransfer.getData('src');
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Plant in terrarium';
    img.classList.add('plant');
    img.draggable = true;
    img.style.position = 'absolute';
    img.style.left = `${e.offsetX - 40}px`;
    img.style.top = `${e.offsetY - 40}px`;
    terrarium.appendChild(img);
  }

  if (type === 'existing' && draggedElement) {
    draggedElement.style.left = `${e.offsetX - 40}px`;
    draggedElement.style.top = `${e.offsetY - 40}px`;
  }

  draggedElement = null;
});
