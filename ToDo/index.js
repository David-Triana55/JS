window.addEventListener('DOMContentLoaded', () =>{
  location.hash = '#/all'
})
window.addEventListener('hashchange', navigate)

function navigate(){
  if (location.hash.startsWith('#/all')){
    all()
  } else if(location.hash.startsWith('#/pending')){
    pending()
  } else if(location.hash.startsWith('#/completed')){
    completed()
  } 
}

function all(){
  console.log('all');
  render();
}

function render(){
  hideSections();
  bindClearCompletedButton()
}

function pending(){
  let item = saveTaskList();

  const tasks = Object.values(JSON.parse(localStorage.getItem('mydayapp-js')));
  const ul = document.querySelector('.todo-list')
  ul.innerHTML = ''
  console.log(tasks, 'Section pending');
  const count = document.querySelector('.todo-count')
  let counting = 0

  for(let i = 0; i < tasks.length; i++) {
    if(tasks[i].completed === false) {
      counting++
    }
  }

  if(counting === 1) {
    count.innerHTML = counting + ' item left';

  } else {
    count.innerHTML = counting + ' items left';
  }

  tasks.forEach(task => {
    if(task.completed === false){

      const lista = document.createElement('li');
      const vista = document.createElement('div');
      const inputBox = document.createElement('input');
      const label = document.createElement('label');
      const button = document.createElement('button');
      const input = document.createElement('input');
      
      inputBox.classList.add('toggle')
      vista.classList.add('view')
      lista.classList.add('pending'); 
      button.classList.add('destroy');
      input.classList.add('edit');
      label.textContent = task.id;
      input.setAttribute('value', task.id);
      inputBox.type = 'checkbox'

      lista.appendChild(vista)
      vista.appendChild(inputBox)
      vista.appendChild(label);
      vista.appendChild(button);
      lista.appendChild(input);
      ul.appendChild(lista);  

      button.addEventListener('click', () => {
        delete item[task.id];
        ul.removeChild(lista);
        localStorage.setItem('mydayapp-js', JSON.stringify(item));
        hideSections();
      });
    } 
  })
}

function completed(){
  let item = saveTaskList();

  const tasks = Object.values(JSON.parse(localStorage.getItem('mydayapp-js')));
  const ul = document.querySelector('.todo-list')
  ul.innerHTML = ''


  const count = document.querySelector('.todo-count')
  let counting = 0

  for(let i = 0; i < tasks.length; i++) {
    if(tasks[i].completed) {
      counting++
    }
  }

  if(counting === 1) {
    count.innerHTML = counting + ' item left';

  } else {
    count.innerHTML = counting + ' items left';
  }

  console.log(tasks, 'Section completed');

  tasks.forEach(task => {
    if(task.completed){

      const lista = document.createElement('li');
      const vista = document.createElement('div');
      const inputBox = document.createElement('input');
      const label = document.createElement('label');
      const button = document.createElement('button');
      const input = document.createElement('input');
      
      inputBox.classList.add('toggle')
      vista.classList.add('view')
      lista.classList.add('pending'); // completed, pending, editing
      button.classList.add('destroy');
      input.classList.add('edit');
      label.textContent = task.id;
      input.setAttribute('value', task.id);
      inputBox.type = 'checkbox'
      inputBox.checked = task.completed === true

      if(task.completed){
        lista.classList.add('completed');
      }

      lista.appendChild(vista)
      vista.appendChild(inputBox)
      vista.appendChild(label);
      vista.appendChild(button);
      lista.appendChild(input);
      ul.appendChild(lista);


      button.addEventListener('click', () => {
        delete item[task.id];
        ul.removeChild(lista);
        localStorage.setItem('mydayapp-js', JSON.stringify(item));
        hideSections();
      });
    } 
  })
}

function saveTaskList(){
  const item = JSON.parse(localStorage.getItem('mydayapp-js')); 
  let tarea;

  if (item) {
    tarea = { ...item }; 
  } else {
    tarea = {};
  }
  return tarea;
}

function saveTask(taskData){
  const task = saveTaskList();

  console.log(task, 'task');

  if (task[taskData.id]) {
    delete task[taskData.id]; 
  } else {
    task[taskData.id] = taskData; 
  }
  console.log(task, 'add task');

  localStorage.setItem('mydayapp-js', JSON.stringify(task));
  render()
}

function hideSections(){
  const main = document.querySelector('.main');
  const footer = document.querySelector('.footer');

  if(localStorage.getItem('mydayapp-js') === '{}' ){
    main.classList.add('hidden');
    footer.classList.add('hidden');
    createTodo()
    console.log('hidden section');
  } else {
    createTodo()
    createTask()
    main.classList.remove('hidden');
    footer.classList.remove('hidden');
  }
}

function createTodo() {
  const addTask = document.querySelector(".new-todo");

  addTask.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
      let inputElement = document.querySelector('.new-todo');
      let valor = inputElement.value.trim();

      if(valor !== ""){
        inputElement.value = '';
        console.log(valor);

        const taskData = {
          id: valor, 
          title: valor,
          completed: false
        }
        saveTask(taskData);
      } 
    }
  });
}


function createTask() {
  let item = saveTaskList();
  const tasks = Object.values(JSON.parse(localStorage.getItem('mydayapp-js')));

  console.log(tasks);

  const count = document.querySelector('.todo-count');
  if (tasks.length === 1) {
    count.innerHTML = tasks.length + ' item left';
  } else {
    count.innerHTML = tasks.length + ' items left';
  }

  const ul = document.querySelector('.todo-list');
  ul.innerHTML = '';

  tasks.forEach(task => {
    console.log('creating task');
    const lista = document.createElement('li');
    const vista = document.createElement('div');
    const inputBox = document.createElement('input');
    const label = document.createElement('label');
    const button = document.createElement('button');
    const input = document.createElement('input');

    inputBox.classList.add('toggle');
    vista.classList.add('view');
    lista.classList.add('pending'); // completed, pending, editing
    button.classList.add('destroy');
    input.classList.add('edit');
    label.textContent = task.id;
    input.setAttribute('value', task.id);
    inputBox.type = 'checkbox';
    inputBox.checked = task.completed === true;

    if (task.completed) {
      lista.classList.add('completed');
    }

    lista.appendChild(vista);
    vista.appendChild(inputBox);
    vista.appendChild(label);
    vista.appendChild(button);
    lista.appendChild(input);
    ul.appendChild(lista);
    

    inputBox.addEventListener('click', () => {
      lista.classList.toggle('completed')
    
      if(lista.classList.contains('completed')){
        item[task.id].completed = true
      } else {
        item[task.id].completed = false
      }

      localStorage.setItem('mydayapp-js', JSON.stringify(item));
    })

    vista.addEventListener('dblclick', () => {
      console.log('Doble clic detectado en el label!');
      lista.classList.add('editing');
      input.value = task.title;
      input.focus();
    });

    input.addEventListener('keydown', (event) => {
      let valor = input.value.trim();
      if (event.key === "Enter") {
        item[task.id].id = valor;
        item[task.id].title = valor;
        localStorage.setItem('mydayapp-js', JSON.stringify(item));
        createTask();
      }
      if (event.key === "Escape") {
        input.value = valor;
        console.log('escape');
        lista.classList.remove('editing');
      }
    });
    

    button.addEventListener('click', () => {
      delete item[task.id];
      ul.removeChild(lista);
      localStorage.setItem('mydayapp-js', JSON.stringify(item));
      hideSections();
    });
  });
}


function clearCompletedTasks() {
  let item = saveTaskList();
  const tasks = Object.values(item);

  const completedTasks = tasks.filter(task => task.completed);

  completedTasks.forEach(task => {
    delete item[task.id];
  });

  localStorage.setItem('mydayapp-js', JSON.stringify(item));

  createTask();

  hideSections();
}

function bindClearCompletedButton() {
  const clearCompletedButton = document.querySelector('.clear-completed');

  clearCompletedButton.addEventListener('click', () => {
    clearCompletedTasks();
  });
}

render()