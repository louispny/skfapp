from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/api/test")
def read_test():
    return {"Hello": "Test"}

@app.post("/api/upload")
async def upload_file(file: UploadFile):
    try:
        contents = await file.read()
        upload_path = f"uploads/{file.filename}"
        with open(upload_path, "wb") as f:
            f.write(contents)

        return {"status": "success", "message": "File uploaded"}
    except Exception as e:
        return JSONResponse(status_code=500, content={"status": "error", "message": str(e)})