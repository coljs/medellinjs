build:
	harp compile _harp ./
	cp _harp/_meta/* .

run:
	harp server
