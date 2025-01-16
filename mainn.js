class Task {

    constructor(title, description) {
    
    this.title = title;
    
    this.description = description;
    
    this.completed = false;
    
    }
    
    complete() {
    
    this.completed = true;
    
    }
    
    }
    
    class TaskList {
    
    constructor() {
    
    this.tasks = [];
    
    }
    
    addTask(task) {
    
    this.tasks.push(task);
    
    }
    
    removeTask(task) {
    
    const index = this.tasks.indexOf(task);
    
    if (index !== -1) {
    
    this.tasks.splice(index, 1);
    
    }
    
    }
    
    }

    // Создание объектов задач и списка задач

const task1 = new Task("Завершить статью", "Завершить написание статьи о ООП в JavaScript.");

const task2 = new Task("Прочитать книгу", "Прочитать новую книгу по программированию.");

const taskList = new TaskList();

// Добавление задач в список и их завершение

taskList.addTask(task1);

taskList.addTask(task2);

task1.complete();

// Вывод списка задач

console.log("Список задач:");

for (const task of taskList.tasks) {

console.log(`- ${task.title} (${task.completed} ? "Завершено" : "Не завершено"})`);

}