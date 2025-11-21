# PSG Progress Tracker

**Description:**  

This is a collaborative web-based **Academic Progress tracker for CAT and Semester exams**. 
The project follows a structured Git workflow to ensure smooth development, code quality, and collaboration among our team of 9 members.

---

## API Endpoints Overview

**Auth**

- POST /api/auth/login – Student login

- POST /api/auth/logout – Student logout

- GET /api/auth/me – Get logged-in student info

**Marks**

- GET /api/marks – Fetch CAT/semester marks (from eCampus or cache)

- POST /api/marks/expected – Save expected marks for predictions

**Predictions**

- GET /api/predictions – Fetch predicted GPA & weak subjects

- POST /api/predictions/compute – Compute predictions using actual + expected marks

**Subject / Semester Analytics**

- GET /api/predictions/subject/:subjectId – Prediction for a particular subject

- GET /api/dashboard/semester/:semesterId – Semester-wise analytics

- GET /api/dashboard/subject/:subjectId – Subject-level analytics

**Dashboard + Reports**

- GET /api/dashboard – Complete dashboard (GPA trend, weak subjects, charts)

- GET /api/reports/download – Download academic report as PDF

---

## 🌿 Branching Strategy

- **Main branch (`main`)**  
  - Stable, production-ready code  
  - Contains README, LICENSE, .gitignore, and initial folders  
  - Only merge tested code from `development` (done by only team leads) 

- **Development branch (`development`)**  
  - Active development branch  
  - Starts from `main` → inherits README, LICENSE, .gitignore, and folders  
  - All feature branches are merged here first.(via team lead review)

- **Feature branches (one per task)**  
feature/yourname/module


**Example:**  
- `feature/kavin/login-api`  
- `feature/mythili/user-login`  

**Rule:** Always branch off `development`, never `main`.

---

## 💻 Workflow (Step by Step)

- **Clone the repo (development branch):**

```
git clone https://github.com/ruhan-2908/psg-campusconnect.git
cd psg-campusconnect
```

 - **Create a feature branch:**
```
git branch feature/<your-name>/<module-name> development 
```

 - **Add your files in the correct folder:**

backend/      ← backend code <br>
frontend/     ← frontend code <br>

 - **Commit your changes with clear messages:**
```
git add .
git commit -m "Add <module-name>: <short description>"
```

Keep commit messages short and meaningful.  

Example:  

feat(backend): add login API endpoint  

fix(frontend): resolve navbar responsiveness  


Refer to Conventional Commits (in github documents) for proper formatting.

 - **Push your feature branch:**
```
git push origin <your_feature_branch_name>
```

 - **Open a Pull Request (PR) to development:**
1) Wait for approval.
2) Merge the PR after approval:
3) Only merge after review and confirmation from the team lead.
4) Keep the development branch clean and conflict-free.

 - **Delete the feature branch (after merge):**

On GitHub: Click “Delete branch” button after merge.

Or Locally:
```
git branch -d <your_feature_branch_name>   # delete local branch
```
Note: Only delete after the PR is merged and approved.


 - **Keeping Your Branch Updated:**

Before starting new work or PR, pull the latest changes from develop:
```
git checkout development
git pull origin development
git checkout <your_feature_branch_name>
git merge development -m "merge development into feature"
```

 - **Code & Commit Best Practices:**

1) Always follow proper commit message conventions.
2) Write clean, readable, and well-commented code.
3) Avoid committing unnecessary files (use .gitignore).
4) Organize files neatly inside backend/frontend/database folders.
5) Keep PRs small and focused on a single feature for easier review.

---

Let’s maintain a professional, organized, and collaborative environment for this project. 
