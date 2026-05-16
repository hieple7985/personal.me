#!/bin/bash

echo "🚀 Deploying to Vercel..."

# Check if logged in
if ! npx vercel whoami > /dev/null 2>&1; then
    echo "❌ Not logged in. Please run: npx vercel login"
    exit 1
fi

# Generate production build
echo "📦 Generating production build..."
yarn generate

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
echo "Running: npx vercel --prod --confirm"

DEPLOY_OUTPUT=$(npx vercel --prod --confirm)
PROD_URL=$(echo "$DEPLOY_OUTPUT" | grep -oE 'https://[^[:space:]]+\.vercel\.app' | head -n1)

if [ ! -z "$PROD_URL" ]; then
    echo ""
    echo "🎉 Deploy successful!"
    echo "🌐 Production URL: $PROD_URL"
    echo ""
    
    # Add to deployment history
    echo "$(date): $PROD_URL" >> deployment-history.log
else
    echo "❌ Deploy failed"
    exit 1
fi
