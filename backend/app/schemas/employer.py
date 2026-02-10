from pydantic import BaseModel


class EmployerCreate(BaseModel):
    company_name: str | None = None
    first_name: str | None = None
    last_name: str | None = None
    address_line_1: str | None = None
    address_line_2: str | None = None
    post_code: str | None = None
    city: str | None = None
    
class EmployerRead(BaseModel):
    id: int
    company_name: str | None = None
    first_name: str | None = None
    last_name: str | None = None
    address_line_1: str | None = None
    address_line_2: str | None = None
    post_code: str | None = None
    city: str | None = None

    class Config:
        from_attributes = True