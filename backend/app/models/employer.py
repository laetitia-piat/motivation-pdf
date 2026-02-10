from sqlalchemy import Column, Integer, String
from app.db import Base


class Employer(Base):
    __tablename__ = "employer"

    id = Column(Integer, primary_key=True, index=True)
    company_name = Column(String, nullable=False)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    address_line_1 = Column(String, nullable=False)
    address_line_2 = Column(String, nullable=True)
    post_code = Column(String, nullable=False)
    city = Column(String, nullable=False)