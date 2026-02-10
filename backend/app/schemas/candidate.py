from pydantic import BaseModel, EmailStr


class CandidateCreate(BaseModel):
    first_name: str
    last_name: str
    address_line_1: str
    address_line_2: str | None = None
    post_code: str
    city: str
    email: EmailStr
    phone_number: str

class CandidateRead(BaseModel):
    id: int
    first_name: str
    last_name: str
    address_line_1: str
    address_line_2: str | None = None
    post_code: str
    city: str
    email: EmailStr
    phone_number: str

    class Config:
        from_attributes = True