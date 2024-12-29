from fastapi import FastAPI, UploadFile, File, Form
from fastapi.responses import JSONResponse
import os
from typing import List

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/api/test")
def read_test():
    return {"Hello": "Test"}

@app.post("/api/upload")
async def upload_files(
    files: List[UploadFile] = File(...),
    destinations: List[str] = Form(...)
):
    try:
        os.makedirs("uploads", exist_ok=True)

        for file, destination in zip(files, destinations):
            # Crée le sous-dossier si nécessaire
            upload_path = os.path.join("uploads", destination)
            os.makedirs(upload_path, exist_ok=True)
            
            # Écrit le fichier dans le sous-dossier
            file_path = os.path.join(upload_path, file.filename)
            with open(file_path, "wb") as f:
                f.write(await file.read())

        return {"status": "success", "message": "Files uploaded"}
    except Exception as e:
        return {"status": "error", "message": str(e)}
