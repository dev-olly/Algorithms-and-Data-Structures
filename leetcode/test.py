import pandas as pd
 
 
# Read CSV files
df1 = pd.read_csv('fileB.csv')
df2 = pd.read_csv('fileA.csv')

service_charge = 4.3
df1['amount'] = df1['amount'] - service_charge
 
 
# Define function to check if two names intersect
def check_names_intersect(name1, name2):
    for n1 in name1.split(' '):
        for n2 in name2.split(' '):
            if n1 == n2:
                return True
    return False
 

# create a hash table for df1  with amount as key and the value should be a tuple of (name, index)
def create_hash_table(df):
    hash_table = {}
    for index, row in df.iterrows():
        if row['amount'] in hash_table:
            hash_table[row['amount']].append((row['name'], index))
        else:
            hash_table[row['amount']] = [(row['name'], index)]
    return hash_table


df1_amount_hash_table = create_hash_table(df1)

# iterate over df2 and check if the amount is present in the hash table
# if present, check if the names intersect
# if names intersect, print the name and amount and drop the row from both the dataframes

for index, row in df2.iterrows():
    if row['amount'] in df1_amount_hash_table:
        for name, index1 in df1_amount_hash_table[row['amount']]:
            if check_names_intersect(name, row['name']):
                print(name, row['amount'])
                try
                    df1 = df1.drop(index1)
                except KeyError:
                    print("Key not found")
                df2 = df2.drop(index)
                break


# # Iterate over dataframes and find matching rows
# for index1, row1 in df1.iterrows():
#     for index2, row2 in df2.iterrows():
#         if row1['amount'] == row2['amount'] and check_names_intersect(row1['name'], row2['name']):
#             print(row1['name'], row1['amount'])
#             df1 = df1.drop(index1)
#             df2 = df2.drop(index2)
 
# Write result to CSV
df1.to_csv('result2.csv', index=False)
