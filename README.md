# 📝 Mini Code Editor

A web-based Python code editor and runner built with Django, CodeMirror, and xterm.js.  
Users can write Python code, provide input, and execute the code securely (optionally in Docker). Output and errors are displayed in a terminal-like interface.

---

## 🚀 Features

- 🖊️ **Code Editor:** Syntax-highlighted Python editor (CodeMirror)
- 💻 **Terminal Output:** Output and errors in a terminal (xterm.js)
- ⌨️ **Input Support:** Provide standard input for your code
- 🌗 **Dark/Light Mode:** Toggle between dark and light themes
- 🐳 **Secure Execution:** (Recommended) Run code inside a Docker container for isolation

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript, [CodeMirror](https://codemirror.net/), [xterm.js](https://xtermjs.org/)
- **Backend:** Python, Django, (optionally [Docker SDK for Python](https://docker-py.readthedocs.io/en/stable/))
- **Containerization:** Python code can be executed inside a Docker container for security

---
## [![Preview](https://img.shields.io/badge/Live%20Preview-%23007ACC?style=for-the-badge&logo=google-chrome&logoColor=white)](https://mini-editor.onrender.com/)

---
## ⚡ Quick Start

### 1. Clone the Repository

```sh
git clone https://github.com/shubham032/mini_editor.git
cd mini_editor
```

### 2. Install Python Dependencies

```sh
pip install -r requirements.txt
```

### 3. (Optional) Install Docker

Make sure [Docker](https://www.docker.com/products/docker-desktop) is installed and running for secure code execution.

### 4. Django Migrations

```sh
python manage.py migrate
```

### 5. Run the Development Server

```sh
python manage.py runserver
```

### 6. Open in Browser

Go to [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

---

## 📁 File Structure

```
mini_editor/
├── code_executor/
│   ├── templates/
│   │   └── code_executor/
│   │       └── editor.html
│   ├── static/
│   │   ├── css/
│   │   │   └── xterm.css
│   │   └── js/
│   │       └── editor.js
│   ├── views.py
│   ├── urls.py
│   └── ...
├── mini_editor/
│   ├── settings.py
│   ├── urls.py
│   └── ...
└── manage.py
```

---

## 🔒 Security Notes

- **Never use this in production without sandboxing!**
- The provided backend runs code with `subprocess` (for demo). For real deployments, use Docker or another sandbox.
- Limit resources (CPU, memory, time) and disable networking in containers.

---

## 🙏 Credits

- [CodeMirror](https://codemirror.net/)
- [xterm.js](https://xtermjs.org/)
- [Django](https://www.djangoproject.com/)
- [Docker](https://www.docker.com/)

---

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.
