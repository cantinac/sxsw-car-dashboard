# SXSW Car Dashboard

## Run Server

This will start a basic Python server at <http://localhost:8000/>.

```bash
$ make serve
```

## Build

This command will take the data from `data/drive.csv` and convert it into a JSON file for use within the dashboard. If you'd like to change the data made avalible to the dashboard modify `data/parse.py` and add the headers (below). Then run the following command to update `data/drive.json`.

```bash
$ make build
```

### Column Headers in `data/drive.csv`

1. Offset
1. Engine RPM (SAE)
1. Mass Airflow Sensor
1. Knock Retard
1. Delivered Engine Torque
1. Calculated Engine Load (SAE)
1. Air-Fuel Ratio Commanded
1. Equivalence Ratio Commanded
1. Vehicle Speed (SAE)
1. Engine Coolant Temp (SAE)
1. Intake Air Temp (SAE)
1. Mass Airflow (SAE)
1. Dynamic Airflow
1. Intake Manifold Absolute Pressure (SAE)
1. Timing Advance (SAE)
1. Knock Learn Factor
1. Throttle Position (SAE)
1. O2 Voltage B1S1 (SAE)
1. O2 Voltage B2S1 (SAE)
1. Fuel System #1 Status (SAE)
1. Short Term Fuel Trim Bank 1 (SAE)
1. Long Term Fuel Trim Bank 1 (SAE)
1. Short Term Fuel Trim Bank 2 (SAE)
1. Long Term Fuel Trim Bank 2 (SAE)
1. EVAP Purge
1. EVAP Vent
1. INJ. Pulse Width Avg. Bank 1
1. INJ. Pulse Width Avg. Bank 2
