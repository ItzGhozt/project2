# Momentum — Track the Grind, Build the Network

## Authors
**Armaan** — Graduate Student @ Northeastern University
- 🌐 Portfolio: [mohammedarmaan.github.io](https://mohammedarmaan.github.io/personal/)
- 🐙 GitHub: [github.com/mohammedarmaan](https://github.com/mohammedarmaan)
- 📧 Email: lnu.mohammedar@northeastern.edu

**Sankar Sudheer Ayachitula** — Graduate Student @ Northeastern University
- 🌐 Portfolio: [sankar-ayachitu.github.io](https://sankar-ayachitu.github.io)
- 🐙 GitHub: [github.com/Sankar-Ayachitula](https://github.com/Sankar-Ayachitula)
- 📧 Email: sankarayachitula@gmail.com

---

## 📚 Class Reference

This project was created as part of **CS 5610 - Web Development** at Northeastern University.

Course Link: [CS 5610 Web Development](https://khoury.northeastern.edu)

---

## 🌐 Live Website

[https://momentum-psi-navy.vercel.app/](https://momentum-psi-navy.vercel.app/)

---

## Project Objective

The objective of this project is to design and implement a full-stack job search management application that helps users track job applications, manage their professional network, and gain insights through data — all in one place.

**Momentum** showcases:

- **Application Tracker** — Create, view, edit, and delete job applications with status, source, salary range, and notes
- **Pipeline Statistics** — Response rate, rejection rate, average stage duration, and applications over time
- **Network / Contacts** — Log professional contacts with meeting context, follow-up reminders, and urgency indicators
- **Networking Statistics** — Total contacts, contacts per company, and breakdown by meeting source
- **Contact Linking** — Link network contacts directly to specific job applications
- **Activity Logging** — Auto-generated logs for every create, update, and delete action
- **Authentication** — Session-based login and registration with secure password handling

The project emphasizes clean REST API design, modular JavaScript, session-based authentication, MongoDB aggregation pipelines, and a professional responsive UI without any frontend frameworks.

---

// I really liked you UI for your site I can tell you put a lot of effort, good job! 

## Design Document

View the design document for this project: [Design_document.pdf](https://github.com/mohammedarmaan/project2/blob/master/assets/Design%20Document.pdf)

### Home / Auth Page:
<img width="2938" height="1460" alt="image" src="https://github.com/user-attachments/assets/5d47d46a-84f8-4933-a9cc-2cca54da4fb5" />


### Application Tracker Page:
<img width="2922" height="1572" alt="image" src="https://github.com/user-attachments/assets/c754547b-0a04-4a91-a641-39e7facdeb68" />


### Network Page:
<img width="2912" height="1572" alt="image" src="https://github.com/user-attachments/assets/4e3363bd-b27e-47cb-80c2-8c1f104a6825" />


---

## Tech Stack

**Frontend**
- HTML5
- CSS3 (custom properties, responsive layout, no `!important`)
- JavaScript (ES6 modules, vanilla — no frontend framework)

**Backend**
- Node.js
- Express.js
- MongoDB (native driver)
- express-session + connect-mongo (session-based auth)

**Tooling**
- ESLint (class-provided configuration)
- Vercel (frontend deployment)
- Render (backend deployment)

---

## Project Structure

```
.
├── backend/
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Application.js
│   │   ├── Network.js
│   │   └── ActivityLog.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── applications.js
│   │   ├── network.js
│   │   └── activityLogs.js
│   ├── utils/
│   │   └── activityLogger.js
│   ├── package.json
│   └── .env
│
└── frontend/
    ├── index.html
    ├── pages/
    │   ├── tracker.html
    │   └── network.html
    ├── css/
    │   ├── shared.css
    │   ├── auth.css
    │   ├── tracker.css
    │   └── network.css
    ├── js/
    │   ├── api.js
    │   ├── auth.js
    │   ├── tracker.js
    │   └── network.js
    └── README.md
```

---

## Instructions to Build and Run

### 1. Clone the repository

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:

```
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
PORT=3000
CLIENT_URL=http://localhost:5500
```

Start the backend server:

```bash
npm run dev
```

The API will be available at `http://localhost:3000`

### 3. Start the frontend

Open a second terminal:

```bash
cd frontend
npx serve . -l 5500
```

Or use the **Live Server** extension in VS Code — right-click `index.html` → Open with Live Server.

### 4. Open in browser

- Auth / Login page: `http://localhost:5500/index.html`
- Application Tracker: `http://localhost:5500/pages/tracker.html`
- Network page: `http://localhost:5500/pages/network.html`

### 5. (Optional) Run code linting

```bash
npm run lint
```

---

## API Reference

### Authentication
| Method | Route | Description |
|--------|-------|-------------|
| POST | /api/auth/register | Register a new user |
| POST | /api/auth/login | Log in |
| POST | /api/auth/logout | Log out |
| GET | /api/auth/me | Get current session user |

### Applications (Armaan)
| Method | Route | Description |
|--------|-------|-------------|
| GET | /api/applications | Get all applications (supports filters) |
| GET | /api/applications/:id | Get single application |
| POST | /api/applications | Create application (409 on duplicate) |
| PUT | /api/applications/:id | Update application |
| DELETE | /api/applications/:id | Delete application |
| GET | /api/applications/stats | Aggregated stats |
| GET | /api/applications/streak | Current and longest streak |

### Network (Sankar)
| Method | Route | Description |
|--------|-------|-------------|
| GET | /api/network | Get all contacts (supports filters) |
| GET | /api/network/:id | Get single contact |
| POST | /api/network | Create contact |
| POST | /api/network/from-application | Create contact from application |
| PUT | /api/network/:id | Update contact |
| DELETE | /api/network/:id | Delete contact |
| GET | /api/network/stats | Aggregated stats |

---
1000 records in the mongoDB collection (Applications)
<img width="1474" height="1003" alt="image" src="https://github.com/user-attachments/assets/953867a2-4dc0-4e6c-ac77-04ae2b410c36" />

---

## GenAI Tools Usage

This project utilized AI assistance in the following ways:

| Tool | Version | Usage |
|------|---------|-------|
| Claude | Claude Sonnet 4.6 | README generation, code review |

### Prompts Used:
- *"Generate a README following these guidelines: [image of requirements]"*

---

## License

This project is open source and available under the [MIT License](./LICENSE).
