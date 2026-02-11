from pydantic import BaseModel


class BodyCreate(BaseModel):
    subject_line: str
    letter_salutation: str
    part_1: str
    part_2: str | None = None
    part_3: str | None = None
    part_4: str | None = None
    part_5: str | None = None
    part_6: str | None = None
    part_7: str | None = None
    complimentary_close: str
    signature: str

class BodyRead(BaseModel):
    id: int
    subject_line: str
    letter_salutation: str
    part_1: str
    part_2: str | None = None
    part_3: str | None = None
    part_4: str | None = None
    part_5: str | None = None
    part_6: str | None = None
    part_7: str | None = None
    complimentary_close: str
    signature: str

    class Config:
        from_attributes = True  