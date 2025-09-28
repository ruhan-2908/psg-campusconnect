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
  - All feature branches are merged here first  

- **Feature branches (one per teammate)**  
feature/<your-name>/<module-name>


**Example:**  
- `feature/kavin/login-api`  
- `feature/mythili/user-login`  

**Rule:** Always branch off `develop`, never `main`.

---

## 💻 Workflow (Step by Step)

**Clone the repo (develop branch):**

```bash
git clone -b develop https://github.com/ruhan-2908/psg-campusconnect.git
cd psg-noticeboard

Create a feature branch:

git checkout -b feature/<your-name>/<module-name> (examples mentioned above)
Add your files in the correct folder:

backend/      ← backend code
frontend/     ← frontend code
database/     ← DB scripts


Commit your changes with clear messages:

git add .
git commit -m "Add <module-name>: <short description>"
Commit message convention:

Example:
feat(backend): add login API endpoint
fix(frontend): resolve navbar responsiveness
docs(database): add schema diagram
Refer to Conventional Commits(in github documents) for proper formatting.


Push your feature branch:

git push origin feature/<your-name>/<module-name>


Open a Pull Request (PR) to develop:

Wait for approval.

Merge the PR after approval:

Only merge after review and confirmation from the team lead.

Keep the development branch clean and conflict-free.

Delete the feature branch (after merge):

On GitHub: Click “Delete branch” button after merge.

Or Locally:

git branch -d feature/<your-name>/<module-name>   # delete local branch
git fetch -p                                      # prune deleted remote branches
Note: Only delete after the PR is merged and approved.

Keeping Your Branch Updated:

Before starting new work or PR, pull the latest changes from develop:

git checkout develop
git pull origin develop
git checkout feature/<your-name>/<module-name>


Code & Commit Best Practices:

Always follow proper commit message conventions.

Write clean, readable, and well-commented code.

Avoid committing unnecessary files (use .gitignore).

Organize files neatly inside backend/frontend/database folders.

Keep PRs small and focused on a single feature for easier review.

Workflow Diagram:


          main (stable)
             ▲
             |
       Merge stable
             |
         develop (active dev)
        /      |       \
       /       |        \
feature/...  feature/...  feature/...
(branches per teammate)
       \       |        /
    Review by team lead → Merge → Delete feature branch
       ▲
       |
 Other team leads (optional) tagged for cross-team review


Legend:

Feature branches → individual teammate work

Review → team lead reviews and approves PR

Cross-team review → when multiple teams are affected

Merge → into develop after approval

Delete feature branch → keeps repo clean

develop → integration of all features

main → production-ready stable code


Summary:

Branch from develop, not main.

Name feature branches like feature/<your-name>/<module-name>.

Add files in correct folder (backend/frontend/database).

Follow commit message conventions.

Open PRs → tag your team lead → merge after approval.

Team leads can tag other team leads for cross-team review.

Delete feature branches after merge.

Keep code clean and organized for a professional learning and development environment.

References:

Conventional Commits
Git Branching Workflow



Let’s maintain a professional, organized, and collaborative environment for this project. 

