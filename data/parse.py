import csv
import json

jsondata = []

with open('drive.csv', 'rb') as csvdata:
    reader = csv.DictReader(csvdata, delimiter=',')
    next(reader) # skip column header
    next(reader) # skip unit header
    for i, row in enumerate(reader):
        jsondata.append({
            's': row['Offset'],
            'rpm': row['Engine RPM (SAE)'],
            'speed': row['Vehicle Speed (SAE)']
        })
        if (i >= 2565):
            break

print json.dumps(jsondata)
