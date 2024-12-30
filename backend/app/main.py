from fastapi import FastAPI, UploadFile, File, Form
from fastapi.responses import JSONResponse
import os
from typing import List
import sys
sys.path.append("app")
import validation as val

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/api/test")
def read_test():
    return {"Hello": "Test"}

@app.get("/api/priceNames")
def read_PriceNames():
    directory = "uploads/price"
    file_names = []

    if os.path.exists(directory):
        file_names = os.listdir(directory)
    else:
        file_names = []

    return {"names": file_names}

@app.get("/api/standardDiscountNames")
def read_standardDiscountNames():
    directory = "uploads/standardDiscount"
    file_names = []

    if os.path.exists(directory):
        file_names = os.listdir(directory)
    else:
        file_names = []

    return {"names": file_names}

@app.get("/api/specialDiscountNames")
def read_specialDiscountNames():
    directory = "uploads/specialDiscount"
    file_names = []

    if os.path.exists(directory):
        file_names = os.listdir(directory)
    else:
        file_names = []

    return {"names": file_names}

@app.get("/api/aidsListNames")
def read_aidsListNames():
    directory = "uploads/aidsList"
    file_names = []

    if os.path.exists(directory):
        file_names = os.listdir(directory)
    else:
        file_names = []

    return {"names": file_names}

@app.post("/api/upload")
async def upload_files(
    files: List[UploadFile] = File(...),
    destinations: List[str] = Form(...),
    standardDiscount: str = Form(...),
    specialDiscount: str = Form(...)
):
    try:
        os.makedirs("uploads", exist_ok=True)
        uploadDirectory = "uploads"
        declarationFilePath = ""

        print(standardDiscount)
        print(specialDiscount)

        for file, destination in zip(files, destinations):
            # Crée le sous-dossier si nécessaire
            upload_path = os.path.join(uploadDirectory, destination)
            os.makedirs(upload_path, exist_ok=True)
            
            # Écrit le fichier dans le sous-dossier
            file_path = os.path.join(upload_path, file.filename)
            with open(file_path, "wb") as f:
                f.write(await file.read())
            declarationFilePath = file_path

        priceFilePath = os.path.join(uploadDirectory, "price")
        priceFileName = os.listdir(priceFilePath)[0]
        priceFilePath = os.path.join(priceFilePath, priceFileName)
        standardDiscountFilePath = os.path.join(uploadDirectory, "standardDiscount", standardDiscount)
        specialDiscountFilePath = os.path.join(uploadDirectory, "specialDiscount", specialDiscount)
        aidsListFilePath = os.path.join(uploadDirectory, "aidsList")
        aidsListFileName = os.listdir(aidsListFilePath)[0]
        aidsListFilePath = os.path.join(aidsListFilePath, aidsListFileName)

        
        validation_result = val.validateUpload(priceFilePath, standardDiscountFilePath, specialDiscountFilePath, declarationFilePath, aidsListFilePath)

        return {"status": "success", "message": "Files uploaded", "validation": validation_result}
    except Exception as e:
        return {"status": "error", "message": str(e)}
