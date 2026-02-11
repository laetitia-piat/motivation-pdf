from sqlalchemy import Column, Integer, String
from app.db import Base


class Letter(Base):
    __tablename__ = "letters"

    id = Column(Integer, primary_key=True, index=True)
    candidate_id = Column(Integer, nullable=False)
    employer_id = Column(Integer, nullable=False)
    body_id = Column(Integer, nullable=False)
    date_created = Column(String, nullable=False)