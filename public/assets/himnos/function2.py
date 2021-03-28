import sys
newf=""
with open(sys.argv[1],'r',encoding="utf8") as f:
	for line in f:
		newf+=line.strip()+"\\"+"\n"
	f.close()
with open(sys.argv[1],'w',encoding="utf8") as f:
	f.write(newf)
	f.close()