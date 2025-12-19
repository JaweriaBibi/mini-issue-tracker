from enum import Enum

class Priority(str, Enum):
    low = "Low"
    medium = "Medium"
    high = "High"

class Status(str, Enum):
    open = "Open"
    in_progress = "In-Progress"
    done = "Done"
