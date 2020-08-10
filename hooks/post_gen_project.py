bashCommand = "npm i && npm run dev && open "localhost:4000"
import subprocess
process = subprocess.Popen(bashCommand.split(), stdout=subprocess.PIPE)
output, error = process.communicate()