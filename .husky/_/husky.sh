npm run build
echo "Build is complete"

cd apps/ui/ && 
npm run lint
echo "Linter validation complete"

cd ../ && cd ui/ && 
npm run lint
echo "Linter validation complete"
