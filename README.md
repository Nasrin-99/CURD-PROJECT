## 🔄 Continuous Integration (CI)

> **Automated quality checks with GitHub Actions**

This project uses **GitHub Actions** to implement **Continuous Integration (CI)**, ensuring the codebase remains stable, consistent, and production-ready.

🔗 **CI Workflow Configuration**
👉 [https://github.com/Nasrin-99/CURD-PROJECT/tree/new-root/.github/workflows/npm-publish.yml](https://github.com/Nasrin-99/CURD-PROJECT/tree/new-root/.github/workflows/npm-publish.yml)

### ⚙️ What the CI Pipeline Does

* 📦 Installs all project dependencies
* 🧪 Runs test scripts (if available)
* 🟢 Validates Node.js environment compatibility
* 🔁 Triggers automatically on every **push** and **pull request**

This setup helps prevent broken builds and maintains clean development practices.

---

# 📘 RESTful CRUD Application – Express.js

A clean and beginner-friendly **CRUD (Create, Read, Update, Delete)** web application built using **Node.js, Express.js, and EJS**, following **RESTful architecture principles**.

This project demonstrates how real-world backend applications handle data operations, routing, and server-side rendering.

---

## 🚀 Features

* ✍️ Create new posts with title, image URL, and content
* 🗂️ View all posts in a responsive card layout
* 🔍 View individual post details
* ✏️ Edit existing posts
* 🗑️ Delete posts using RESTful DELETE routes
* 🔄 Uses `method-override` for PATCH & DELETE
* 🧩 Server-side rendering with EJS
* 🏗️ Clean and organized project structure (MVC-like)

---

## 🛠️ Tech Stack

### 🎨 Frontend

* HTML5
* CSS3
* EJS (Embedded JavaScript Templates)

### ⚙️ Backend

* Node.js
* Express.js
* RESTful Routing
* UUID (unique identifiers)
* Method-Override

---

## 📂 Project Structure

```
CRUD-App/
│── index.js
│── package.json
│── package-lock.json
│── views/
│   ├── index.ejs
│   ├── show.ejs
│   ├── create.ejs
│   ├── edit.ejs
│── public/
│   └── styles.css
```

---

## 🔁 RESTful Routes Used

| Method | Route           | Description      |
| ------ | --------------- | ---------------- |
| GET    | /posts          | View all posts   |
| GET    | /posts/create   | Create post form |
| POST   | /posts          | Add new post     |
| GET    | /posts/:id      | View single post |
| GET    | /posts/:id/edit | Edit post form   |
| PATCH  | /posts/:id      | Update post      |
| DELETE | /posts/:id      | Delete post      |

---

## ▶️ How to Run Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
```

### 2️⃣ Navigate into the project

```bash
cd your-repo-name
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Start the server

```bash
node index.js
```

### 5️⃣ Open in browser

```
http://localhost:8080/posts
```

---

## 🧠 What I Learned

* Implementing RESTful routing in Express
* Handling HTTP verbs beyond GET & POST using `method-override`
* Server-side rendering with EJS
* Managing in-memory data (foundation for database integration)
* Writing clean and maintainable backend code

---

## 🔮 Future Improvements

* Database integration (MongoDB / SQL)
* Authentication & authorization
* REST API version
* Cloud deployment (Render / Railway / AWS)

---

## 👨‍💻 Author

**Your Name**
Aspiring Backend / Full-Stack Developer
Open to internships and entry-level opportunities

---

## 📄 License

This project is licensed under the **ISC License**.

---

### 🏷️ Tags

`#WebDevelopment` `#BackendDevelopment` `#NodeJS` `#ExpressJS`
`#RESTAPI` `#CRUD` `#JavaScript` `#HTML` `#CSS`
`#FullStackDeveloper` `#LearningByBuilding` `#OpenToWork`

