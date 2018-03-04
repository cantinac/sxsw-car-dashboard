serve:
	python -m SimpleHTTPServer

build:
	cd data && python parse.py > drive.json
