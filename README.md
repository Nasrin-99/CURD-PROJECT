![Node.js CI](https://github.com/Nasrin-99/CURD-PROJECT/actions/workflows/nodejs-ci.yml/badge.svg?branch=new-root)

# 📘 README.md

```md
# RESTful CRUD Application – Express.js

A clean and beginner-friendly **CRUD (Create, Read, Update, Delete)** web application built using **Node.js, Express.js, and EJS**, following **RESTful architecture principles**.

This project demonstrates how real-world backend applications handle data operations, routing, and server-side rendering.

---

## 🚀 Features

- Create new posts with title, image URL, and content
- View all posts in a responsive card layout
- View single post details
- Edit existing posts
- Delete posts using RESTful DELETE route
- Uses `method-override` to support PATCH & DELETE
- Server-side rendering with EJS
- Clean project structure (MVC-like separation)

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- EJS (Embedded JavaScript Templates)

### Backend
- Node.js
- Express.js
- RESTful Routing
- UUID (unique identifiers)
- Method-Override

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

````

---

## 🔁 RESTful Routes Used

| Method | Route | Description |
|------|------|------------|
| GET | /posts | View all posts |
| GET | /posts/create | Create form |
| POST | /posts | Add new post |
| GET | /posts/:id | View single post |
| GET | /posts/:id/edit | Edit form |
| PATCH | /posts/:id | Update post |
| DELETE | /posts/:id | Delete post |

---

## ▶️ How to Run Locally

1. Clone the repository
```bash
git clone https://github.com/your-username/your-repo-name.git
````

2. Navigate into the project

```bash
cd your-repo-name
```

3. Install dependencies

```bash
npm install
```
```bash
npm install express
```
```bash
npm install ejs
```
```bash
npm install uuid
```
```bash
npm install method-override
```

4. Start the server

```bash
node index.js
```

5. Open in browser

```
http://localhost:8080/posts
```

---

## 🧠 What I Learned

* Implementing RESTful routing in Express
* Handling HTTP verbs beyond GET & POST using method-override
* Server-side rendering using EJS
* Managing in-memory data structures (foundation for DB integration)
* Writing clean and maintainable backend code

---

## 🔮 Future Improvements

* Database integration (MongoDB)
* Authentication & authorization
* API-based architecture
* Deployment on cloud platforms

---

## 👨‍💻 Author

**Your Name**
Aspiring Backend / Full Stack Developer
Open to internships and entry-level opportunities

---

## 📄 License

This project is licensed under the ISC License.


#WebDevelopment
#BackendDevelopment
#NodeJS
#ExpressJS
#RESTAPI
#CRUD
#JavaScript
#HTML,#CSS
#FullStackDeveloper
#LearningByBuilding
#OpenToWork
#Hiring
#HR
#Recruiters
