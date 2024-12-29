def getStandardDiscount(familyCode, standardDiscountDf):
    discountRow = standardDiscountDf[standardDiscountDf['Famille'] == familyCode]
    if discountRow.empty:
        return 0
    return discountRow.iloc[0]['Remise (%)']

def get_special_discount(family_code, client_name, client_grille_df, special_discount_df_grilles):
    # Récupérer la grille associée au client
    client_grille = client_grille_df[client_grille_df['Nom du client'] == client_name]
    if not client_grille.empty:
        grille_name = client_grille.iloc[0]['Nom grille remisier']
        if grille_name in special_discount_df_grilles:
            grille_df = special_discount_df_grilles[grille_name]
            discount_row = grille_df[grille_df['Famille'] == family_code]
            if not discount_row.empty:
                return discount_row.iloc[0]['Remise (%)']
    print(f"Special discount not found for family {family_code} and client {client_name}")
    return 0