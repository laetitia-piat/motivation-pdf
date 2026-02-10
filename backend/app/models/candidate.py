from sqlalchemy import Column, Integer, String
from app.db import Base



class Candidate(Base):
    __tablename__ = "candidate"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    address_line_1 = Column(String, nullable=False)
    address_line_2 = Column(String, nullable=True)
    post_code = Column(String, nullable=False)
    city = Column(String, nullable=False)
    email = Column(String, nullable=False, unique=True)
    phone_number = Column(String, nullable=False)