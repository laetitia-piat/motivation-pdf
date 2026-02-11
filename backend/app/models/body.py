from sqlalchemy import Column, Integer, String
from app.db import Base


class Body(Base):
    __tablename__ = "body"

    id = Column(Integer, primary_key=True, index=True)
    subject_line = Column(String, nullable=False)
    letter_salutation = Column(String, nullable=False)
    part_1 = Column(String, nullable=False)
    part_2 = Column(String, nullable=True)
    part_3 = Column(String, nullable=True)
    part_4 = Column(String, nullable=True)
    part_5 = Column(String, nullable=True)
    part_6 = Column(String, nullable=True)
    part_7 = Column(String, nullable=True)
    complimentary_close = Column(String, nullable=False)
    signature = Column(String, nullable=False)