set -e

npm i && 
npm run prepare && 
cd server && 
npm install && 
cd .. && 
cd ui && 
npm install &&
cd ..

echo "Installation successful"