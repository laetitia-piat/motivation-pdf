from pathlib import Path
from dotenv import load_dotenv
import os
from sqlalchemy import text
from sqlalchemy.orm import Session
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware

from app.models.candidate import Candidate
from app.models.employer import Employer
from app.models.body import Body
from app.schemas.candidate import CandidateRead, CandidateCreate
from app.schemas.employer import EmployerRead, EmployerCreate
from app.schemas.body import BodyCreate, BodyRead

from .db import get_db


ENV_PATH = Path(__file__).resolve().parent / ".env"
load_dotenv(dotenv_path=ENV_PATH)

app = FastAPI()

origins_env = os.getenv("FRONTEND_ORIGINS", "")
allowed_origins = [o.strip() for o in origins_env.split(",") if o.strip()]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post('/candidate', response_model=CandidateRead)
def create_candidate_details(
    candidate: CandidateCreate,
    db: Session = Depends(get_db)
) : 
    db_candidate = Candidate(**candidate.dict())
    db.add(db_candidate)
    db.commit()
    db.refresh(db_candidate)
    return db_candidate

@app.get("/candidate", response_model=list[CandidateRead])
def list_candidates(db: Session = Depends(get_db)):
    return db.query(Candidate).all()

@app.get("/candidate/{candidate_id}", response_model=CandidateRead)
def get_candidate(candidate_id: int, db: Session = Depends(get_db)):
    return db.query(Candidate).filter(Candidate.id == candidate_id).first()

@app.post('/employer', response_model=EmployerRead)
def create_employer_details(
    employer: EmployerCreate,
    db: Session = Depends(get_db)
) : 
    db_employer = Employer(**employer.dict())
    db.add(db_employer)
    db.commit()
    db.refresh(db_employer)
    return db_employer

@app.get("/employer", response_model=list[EmployerRead])
def list_employers(db: Session = Depends(get_db)):
    return db.query(Employer).all()

@app.get("/employer/{employer_id}", response_model=EmployerRead)
def get_employer(employer_id: int, db: Session = Depends(get_db)):
    return db.query(Employer).filter(Employer.id == employer_id).first()

@app.post('/body', response_model=BodyRead)
def create_body_details(
    body: BodyCreate,
    db: Session = Depends(get_db)
) : 
    db_body = Body(**body.dict())
    db.add(db_body)
    db.commit()
    db.refresh(db_body)
    return db_body

@app.get("/body", response_model=list[BodyRead])
def list_bodies(db: Session = Depends(get_db)):
    return db.query(Body).all()

@app.get("/body/{body_id}", response_model=BodyRead)
def get_body(body_id: int, db: Session = Depends(get_db)): 
    return db.query(Body).filter(Body.id == body_id).first()