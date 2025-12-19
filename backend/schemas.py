from pydantic import BaseModel
from typing import Optional
from models import Priority, Status

class IssueCreate(BaseModel):
    title: str
    priority: Priority
    status: Status = Status.open

class IssueUpdate(BaseModel):
    title: Optional[str] = None
    priority: Optional[Priority] = None
    status: Optional[Status] = None

class Issue(BaseModel):
    id: int
    title: str
    priority: Priority
    status: Status
