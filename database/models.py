# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 18, 2024 22:06:53
# Database: sqlite:////tmp/tmp.4K9inDArKb/asme_lago_sobre_los_esqueleto_1/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Bone(SAFRSBaseX, Base):
    """
    description: Represents a single bone in 'los esqueletos'.
    """
    __tablename__ = 'bone'
    _s_collection_name = 'Bone'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    length = Column(Float)

    # parent relationships (access parent)

    # child relationships (access children)
    BoneSkeletonList : Mapped[List["BoneSkeleton"]] = relationship(back_populates="bone")



class BoneType(SAFRSBaseX, Base):
    """
    description: Defines different types of bones, such as 'femur', 'tibia', etc.
    """
    __tablename__ = 'bone_type'
    _s_collection_name = 'BoneType'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    type_name = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    BoneTypeFunctionList : Mapped[List["BoneTypeFunction"]] = relationship(back_populates="bone_type")



class DinosaurType(SAFRSBaseX, Base):
    """
    description: Classification of dinosaurs, e.g., 'Tyrannosaurus', 'Stegosaurus'.
    """
    __tablename__ = 'dinosaur_type'
    _s_collection_name = 'DinosaurType'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    type_name = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    SkeletonDinosaurTypeList : Mapped[List["SkeletonDinosaurType"]] = relationship(back_populates="dinosaur_type")



class Researcher(SAFRSBaseX, Base):
    """
    description: Information about researchers studying the skeletons.
    """
    __tablename__ = 'researcher'
    _s_collection_name = 'Researcher'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    specialty = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    ResearcherSkeletonList : Mapped[List["ResearcherSkeleton"]] = relationship(back_populates="researcher")



class Site(SAFRSBaseX, Base):
    """
    description: Archaeological site where the skeletons were discovered.
    """
    __tablename__ = 'site'
    _s_collection_name = 'Site'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    location = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    DiscoveryList : Mapped[List["Discovery"]] = relationship(back_populates="site")



class Skeleton(SAFRSBaseX, Base):
    """
    description: Represents the entire skeleton, each having a unique identifier.
    """
    __tablename__ = 'skeleton'
    _s_collection_name = 'Skeleton'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    discovery_date = Column(DateTime, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    AnalysiList : Mapped[List["Analysi"]] = relationship(back_populates="skeleton")
    BoneSkeletonList : Mapped[List["BoneSkeleton"]] = relationship(back_populates="skeleton")
    DiscoveryList : Mapped[List["Discovery"]] = relationship(back_populates="skeleton")
    ResearcherSkeletonList : Mapped[List["ResearcherSkeleton"]] = relationship(back_populates="skeleton")
    SkeletonDinosaurTypeList : Mapped[List["SkeletonDinosaurType"]] = relationship(back_populates="skeleton")



class Analysi(SAFRSBaseX, Base):
    """
    description: Details about various analyses performed on a skeleton.
    """
    __tablename__ = 'analysis'
    _s_collection_name = 'Analysi'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    skeleton_id = Column(ForeignKey('skeleton.id'), nullable=False)
    analysis_date = Column(DateTime, nullable=False)
    report_content = Column(String)

    # parent relationships (access parent)
    skeleton : Mapped["Skeleton"] = relationship(back_populates=("AnalysiList"))

    # child relationships (access children)



class BoneSkeleton(SAFRSBaseX, Base):
    """
    description: Junction table to associate bones with skeletons.
    """
    __tablename__ = 'bone_skeleton'
    _s_collection_name = 'BoneSkeleton'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    bone_id = Column(ForeignKey('bone.id'), nullable=False)
    skeleton_id = Column(ForeignKey('skeleton.id'), nullable=False)

    # parent relationships (access parent)
    bone : Mapped["Bone"] = relationship(back_populates=("BoneSkeletonList"))
    skeleton : Mapped["Skeleton"] = relationship(back_populates=("BoneSkeletonList"))

    # child relationships (access children)



class BoneTypeFunction(SAFRSBaseX, Base):
    """
    description: Relationship that describes the function of a type of bone.
    """
    __tablename__ = 'bone_type_function'
    _s_collection_name = 'BoneTypeFunction'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    bone_type_id = Column(ForeignKey('bone_type.id'), nullable=False)
    function_description = Column(String)

    # parent relationships (access parent)
    bone_type : Mapped["BoneType"] = relationship(back_populates=("BoneTypeFunctionList"))

    # child relationships (access children)



class Discovery(SAFRSBaseX, Base):
    """
    description: Records details of the discovery of skeletons at a site.
    """
    __tablename__ = 'discovery'
    _s_collection_name = 'Discovery'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    skeleton_id = Column(ForeignKey('skeleton.id'), nullable=False)
    site_id = Column(ForeignKey('site.id'), nullable=False)
    discovery_date = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    site : Mapped["Site"] = relationship(back_populates=("DiscoveryList"))
    skeleton : Mapped["Skeleton"] = relationship(back_populates=("DiscoveryList"))

    # child relationships (access children)



class ResearcherSkeleton(SAFRSBaseX, Base):
    """
    description: Junction table to link researchers to specific skeletons for studies.
    """
    __tablename__ = 'researcher_skeleton'
    _s_collection_name = 'ResearcherSkeleton'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    researcher_id = Column(ForeignKey('researcher.id'), nullable=False)
    skeleton_id = Column(ForeignKey('skeleton.id'), nullable=False)

    # parent relationships (access parent)
    researcher : Mapped["Researcher"] = relationship(back_populates=("ResearcherSkeletonList"))
    skeleton : Mapped["Skeleton"] = relationship(back_populates=("ResearcherSkeletonList"))

    # child relationships (access children)



class SkeletonDinosaurType(SAFRSBaseX, Base):
    """
    description: Associates skeletons with their dinosaur type.
    """
    __tablename__ = 'skeleton_dinosaur_type'
    _s_collection_name = 'SkeletonDinosaurType'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    skeleton_id = Column(ForeignKey('skeleton.id'), nullable=False)
    dinosaur_type_id = Column(ForeignKey('dinosaur_type.id'), nullable=False)

    # parent relationships (access parent)
    dinosaur_type : Mapped["DinosaurType"] = relationship(back_populates=("SkeletonDinosaurTypeList"))
    skeleton : Mapped["Skeleton"] = relationship(back_populates=("SkeletonDinosaurTypeList"))

    # child relationships (access children)
