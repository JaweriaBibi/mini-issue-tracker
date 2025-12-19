from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List

from schemas import Issue, IssueCreate, IssueUpdate

app = FastAPI()

# Enable CORS (allow frontend access)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

issues: List[Issue] = []
next_id = 1


@app.get("/issues", response_model=List[Issue])
def get_issues():
    return issues


@app.post("/issues", response_model=Issue)
def create_issue(issue: IssueCreate):
    global next_id
    new_issue = Issue(
        id=next_id,
        title=issue.title,
        priority=issue.priority,
        status=issue.status,
    )
    issues.append(new_issue)
    next_id += 1
    return new_issue


@app.put("/issues/{issue_id}", response_model=Issue)
def update_issue(issue_id: int, update: IssueUpdate):
    for index, issue in enumerate(issues):
        if issue.id == issue_id:
            updated_issue = issue.copy(update=update.dict(exclude_unset=True))
            issues[index] = updated_issue
            return updated_issue

    raise HTTPException(status_code=404, detail="Issue not found")


@app.delete("/issues/{issue_id}")
def delete_issue(issue_id: int):
    for index, issue in enumerate(issues):
        if issue.id == issue_id:
            issues.pop(index)
            return {"message": "Issue deleted"}

    raise HTTPException(status_code=404, detail="Issue not found")
