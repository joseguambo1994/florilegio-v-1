import sys
newf=""
with open(sys.argv[1],'r') as f:
	for line in f:
		newf+=line.strip()+"\\n"+"\\"+"\n"
	f.close()
with open(sys.argv[1],'w') as f:
	f.write(newf)
	f.close()