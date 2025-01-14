# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, DateTime, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

Base = declarative_base()

class Bone(Base):
    """
    description: Represents a single bone in 'los esqueletos'.
    """
    __tablename__ = 'bone'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    length = Column(Float, nullable=True)  # Length in centimeters

class Skeleton(Base):
    """
    description: Represents the entire skeleton, each having a unique identifier.
    """
    __tablename__ = 'skeleton'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    discovery_date = Column(DateTime, nullable=False, default=datetime.datetime.now)

class BoneType(Base):
    """
    description: Defines different types of bones, such as 'femur', 'tibia', etc.
    """
    __tablename__ = 'bone_type'
    id = Column(Integer, primary_key=True, autoincrement=True)
    type_name = Column(String, nullable=False)

class BoneSkeleton(Base):
    """
    description: Junction table to associate bones with skeletons.
    """
    __tablename__ = 'bone_skeleton'
    id = Column(Integer, primary_key=True, autoincrement=True)
    bone_id = Column(Integer, ForeignKey('bone.id'), nullable=False)
    skeleton_id = Column(Integer, ForeignKey('skeleton.id'), nullable=False)

class Site(Base):
    """
    description: Archaeological site where the skeletons were discovered.
    """
    __tablename__ = 'site'
    id = Column(Integer, primary_key=True, autoincrement=True)
    location = Column(String, nullable=False)

class Discovery(Base):
    """
    description: Records details of the discovery of skeletons at a site.
    """
    __tablename__ = 'discovery'
    id = Column(Integer, primary_key=True, autoincrement=True)
    skeleton_id = Column(Integer, ForeignKey('skeleton.id'), nullable=False)
    site_id = Column(Integer, ForeignKey('site.id'), nullable=False)
    discovery_date = Column(DateTime, nullable=False, default=datetime.datetime.now)

class Researcher(Base):
    """
    description: Information about researchers studying the skeletons.
    """
    __tablename__ = 'researcher'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    specialty = Column(String, nullable=True)

class ResearcherSkeleton(Base):
    """
    description: Junction table to link researchers to specific skeletons for studies.
    """
    __tablename__ = 'researcher_skeleton'
    id = Column(Integer, primary_key=True, autoincrement=True)
    researcher_id = Column(Integer, ForeignKey('researcher.id'), nullable=False)
    skeleton_id = Column(Integer, ForeignKey('skeleton.id'), nullable=False)

class DinosaurType(Base):
    """
    description: Classification of dinosaurs, e.g., 'Tyrannosaurus', 'Stegosaurus'.
    """
    __tablename__ = 'dinosaur_type'
    id = Column(Integer, primary_key=True, autoincrement=True)
    type_name = Column(String, nullable=False)

class SkeletonDinosaurType(Base):
    """
    description: Associates skeletons with their dinosaur type.
    """
    __tablename__ = 'skeleton_dinosaur_type'
    id = Column(Integer, primary_key=True, autoincrement=True)
    skeleton_id = Column(Integer, ForeignKey('skeleton.id'), nullable=False)
    dinosaur_type_id = Column(Integer, ForeignKey('dinosaur_type.id'), nullable=False)

class BoneTypeFunction(Base):
    """
    description: Relationship that describes the function of a type of bone.
    """
    __tablename__ = 'bone_type_function'
    id = Column(Integer, primary_key=True, autoincrement=True)
    bone_type_id = Column(Integer, ForeignKey('bone_type.id'), nullable=False)
    function_description = Column(String, nullable=True)

class Analysis(Base):
    """
    description: Details about various analyses performed on a skeleton.
    """
    __tablename__ = 'analysis'
    id = Column(Integer, primary_key=True, autoincrement=True)
    skeleton_id = Column(Integer, ForeignKey('skeleton.id'), nullable=False)
    analysis_date = Column(DateTime, nullable=False, default=datetime.datetime.now)
    report_content = Column(String, nullable=True)

# Connect to the database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

# Create a new session
Session = sessionmaker(bind=engine)
session = Session()

# Sample data
bones = [
    Bone(name='Femur', length=52.5),
    Bone(name='Humerus', length=35.0),
    Bone(name='Tibia', length=45.3),
    Bone(name='Fibula', length=40.1)
]

skeletons = [
    Skeleton(name='Specimen A', discovery_date=datetime.datetime(2023, 1, 15)),
    Skeleton(name='Specimen B', discovery_date=datetime.datetime(2023, 2, 20))
]

bone_types = [
    BoneType(type_name='Long Bone'),
    BoneType(type_name='Short Bone')
]

bone_skeletons = [
    BoneSkeleton(bone_id=1, skeleton_id=1),
    BoneSkeleton(bone_id=2, skeleton_id=1),
    BoneSkeleton(bone_id=3, skeleton_id=2)
]

sites = [
    Site(location='Jurassic Park Region'),
    Site(location='Cretaceous Valley')
]

discoveries = [
    Discovery(skeleton_id=1, site_id=1, discovery_date=datetime.datetime(2023, 1, 20)),
    Discovery(skeleton_id=2, site_id=2, discovery_date=datetime.datetime(2023, 2, 25))
]

researchers = [
    Researcher(name='Dr. Alan Grant', specialty='Paleontology'),
    Researcher(name='Dr. Ellie Sattler', specialty='Botany')
]

researcher_skeletons = [
    ResearcherSkeleton(researcher_id=1, skeleton_id=1),
    ResearcherSkeleton(researcher_id=2, skeleton_id=2)
]

dinosaur_types = [
    DinosaurType(type_name='Tyrannosaurus'),
    DinosaurType(type_name='Velociraptor')
]

skeleton_dinosaur_types = [
    SkeletonDinosaurType(skeleton_id=1, dinosaur_type_id=1),
    SkeletonDinosaurType(skeleton_id=2, dinosaur_type_id=2)
]

bone_type_functions = [
    BoneTypeFunction(bone_type_id=1, function_description='Support and leverage of movement'),
    BoneTypeFunction(bone_type_id=2, function_description='Stability and compactness')
]

analyses = [
    Analysis(skeleton_id=1, report_content='Analysis of thigh bone shows signs of growth.'),
    Analysis(skeleton_id=2, report_content='Examined tibia reveals impact marks.')
]

# Insert sample data
session.add_all(bones + skeletons + bone_types + bone_skeletons + sites + discoveries +
                researchers + researcher_skeletons + dinosaur_types + skeleton_dinosaur_types +
                bone_type_functions + analyses)
session.commit()
session.close()
