# PSG Notice Board Project 🏫

**Description:**  

This is a collaborative web-based **Notice Board + Event Tracker + Q&A platform** for PSG College.  
The project follows a structured Git workflow to ensure smooth development, code quality, and collaboration among our team of 9 members.

---

## 👥 Team Overview

| Team     | Lead          | Member(s)                        |
|----------|---------------|----------------------------------|
| Backend  | Ruhan         | Kavin, Nithish, Pravinthaa       |
| Frontend | Subhasree     | Mythili, Pavithra                |
| Database | Sri Varshini  | Nithish Kumar                    |


---

## 📁 Repository Structure

backend/ ← Backend code (API, server, auth,..)  

frontend/ ← Frontend code (UI, components,..)  

database/ ← Database scripts, schemas,..  

README.md ← Project instructions  

.gitignore ← Ignored files  

LICENSE ← MIT License


---

## 🌿 Branching Strategy

- **Main branch (`main`)**  
  - Stable, production-ready code  
  - Contains README, LICENSE, .gitignore, and initial folders  
  - Only merge tested code from `develop` (done by only team leads) 

- **Development branch (`develop`)**  
  - Active development branch  
  - Starts from `main` → inherits README, LICENSE, .gitignore, and folders  
  - All feature branches are merged here first.(via team lead review)

- **Feature branches (one per task)**  
feature/yourname/module


**Example:**  
- `feature/kavin/login-api`  
- `feature/mythili/user-login`  

**Rule:** Always branch off `develop`, never `main`.

---

## 💻 Workflow (Step by Step)

- **Clone the repo (develop branch):**

```
git clone -b develop https://github.com/ruhan-2908/psg-campusconnect.git
cd psg-campusconnect
```

 - **Create a feature branch:**
```
git checkout -b feature/<your-name>/<module-name> (examples mentioned above)
```

 - **Add your files in the correct folder:**

backend/      ← backend code <br>
frontend/     ← frontend code <br>
database/     ← DB scripts <br>

 - **Commit your changes with clear messages:**
```
git add .
git commit -m "Add <module-name>: <short description>"
```

Keep commit messages short and meaningful.  

Example:  

feat(backend): add login API endpoint  

fix(frontend): resolve navbar responsiveness  

docs(database): add schema diagram  


Refer to Conventional Commits (in github documents) for proper formatting.

 - **Push your feature branch:**
```
git push origin <your_feature_branch_name>
```

 - **Open a Pull Request (PR) to develop:**
1) Wait for approval.
2) Merge the PR after approval:
3) Only merge after review and confirmation from the team lead.
4) Keep the development branch clean and conflict-free.

 - **Delete the feature branch (after merge):**

On GitHub: Click “Delete branch” button after merge.

Or Locally:
```
git branch -d <your_feature_branch_name>   # delete local branch
git fetch -p # prune deleted remote branches
```
Note: Only delete after the PR is merged and approved.


 - **Keeping Your Branch Updated:**

Before starting new work or PR, pull the latest changes from develop:
```
git checkout develop
git pull origin develop
git checkout <your_feature_branch_name>
```

 - **Code & Commit Best Practices:**

1) Always follow proper commit message conventions.
2) Write clean, readable, and well-commented code.
3) Avoid committing unnecessary files (use .gitignore).
4) Organize files neatly inside backend/frontend/database folders.
5) Keep PRs small and focused on a single feature for easier review.

---

Let’s maintain a professional, organized, and collaborative environment for this project. 

