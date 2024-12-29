import sys
sys.path.append("app")
import loadExcel as le
import extractData as ed
import pandas as pd

def validateUpload(priceFilePath, standardDiscountFilePath, specialDiscountFilePath, declarationFilePath, linkFilePath):
    try:
        # Load the files
        price_df = le.loadSimpleExcel(priceFilePath)
        standard_discount_df = le.loadSimpleExcel(standardDiscountFilePath)
        special_discount_df = le.loadExcel(specialDiscountFilePath)
        declaration_df = le.loadSimpleExcel(declarationFilePath)
        link_df = le.loadSimpleExcel(linkFilePath)

        # Validate that all files are loaded correctly
        for df, name in zip([price_df, standard_discount_df, declaration_df], 
                            ["price file", "standard discount file", "declaration file"]):
            if not isinstance(df, pd.DataFrame):
                raise ValueError(f"{name} was not loaded correctly. Got: {df}")

        errors = []

        #browse the the sales
        for _, sale in declaration_df.iterrows():
            product_ref = sale["Référence produit"]
            quantity = sale["Quantité"]
            price = sale["Prix payé"]
            discount = sale["Ristourne"]
            client = sale["Nom du client"]

            print(f"Validating sale for product {product_ref} to client {client}")

            product = price_df[price_df["Référence"] == product_ref]

            print(product)

            if product.empty:
                errors.append(f"Product {product_ref} not found in price list")
                continue
            family_code = product.iloc[0]["Famille"]
            unit_price = product.iloc[0]["Prix Unitaire"]

            # Check if the paid price is correct
            standard_discount = ed.getStandardDiscount(family_code, standard_discount_df)
            expected_price = quantity * unit_price * (1 - standard_discount / 100)
            
            special_discount = ed.get_special_discount(family_code, client, link_df, special_discount_df)
            expected_discount = expected_price - (quantity * unit_price * (1 - special_discount / 100))

            if (abs(price - expected_price)/max(price, expected_price) > 0.01) or abs(discount - expected_discount)/max(discount, expected_discount) > 0.01:
                errors.append(f"Sales file incorrect at line {sale.name + 1}: expected price {expected_price}, got {price}, expected discount {expected_discount}, got {discount}")
        
        if errors:
            return {"status": "error", "message": "Validation failed", "errors": errors}
        
        return {"status": "success", "message": "Files validated"}
    
    except Exception as e:
        return {"status": "error", "message": str(e)}