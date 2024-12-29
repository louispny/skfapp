import os
import pandas as pd

def loadSimpleExcel(filename):
    try:
        # Open the file
        df = pd.read_excel(filename)
        return df
    except Exception as e:
        return ValueError(f"Error loading file {filename}: {str(e)}")
    
def loadExcel(filename):
    try:
        # Open the file
        df = {}
        with pd.ExcelFile(filename) as xls:
            for sheet_name in xls.sheet_names:
                df[sheet_name] = pd.read_excel(xls, sheet_name)
        return df
    except Exception as e:
        return str(e)