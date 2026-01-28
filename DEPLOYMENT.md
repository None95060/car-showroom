# Vercel Deployment Guide for Car Showroom

## Prerequisites
1. MongoDB Atlas account (free tier available at https://www.mongodb.com/cloud/atlas)
2. Vercel account (https://vercel.com)
3. Git repository pushed to GitHub

## Step 1: Setup MongoDB Atlas

1. Go to https://cloud.mongodb.com and sign up/login
2. Create a new cluster (Free M0 tier)
3. Click "Connect" on your cluster
4. Choose "Connect your application"
5. Copy the connection string (looks like: `mongodb+srv://username:<password>@cluster.mongodb.net/mernapp`)
6. Replace `<password>` with your actual database password
7. Add your database name after `.net/` (e.g., `mernapp`)

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard
1. Go to https://vercel.com and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Add Environment Variable:
   - Name: `MONGODB_URI`
   - Value: Your MongoDB Atlas connection string
5. Click "Deploy"

### Option B: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Add environment variable
vercel env add MONGODB_URI

# Deploy to production
vercel --prod
```

## Step 3: Configure Environment Variables in Vercel

In your Vercel project dashboard:
1. Go to Settings → Environment Variables
2. Add:
   - **MONGODB_URI**: Your MongoDB Atlas connection string
   - **NODE_ENV**: production

## Step 4: Test Your Deployment

Once deployed, Vercel will give you a URL like: `https://your-app.vercel.app`

Test the following endpoints:
- Homepage: `https://your-app.vercel.app/`
- Signup: `https://your-app.vercel.app/signup`
- Login: `https://your-app.vercel.app/login`
- Dashboard: `https://your-app.vercel.app/dashboard`

## Important Notes

- MongoDB Atlas allows connections from anywhere by default. Configure IP whitelist in Atlas for security.
- Environment variables must be set in Vercel dashboard for production.
- The app will NOT work on localhost anymore (unless you set NODE_ENV != production).
- Static files (CSS, JS, images) are served directly from the backend folder.

## Troubleshooting

**CSS not loading?**
- Check browser console for 404 errors
- Verify vercel.json routes configuration
- Check that CSS files exist in backend/css/

**MongoDB connection failed?**
- Verify MONGODB_URI environment variable is set correctly in Vercel
- Check MongoDB Atlas allows connections from all IPs (0.0.0.0/0)
- Ensure database user has read/write permissions

**API routes not working?**
- Check Vercel function logs in dashboard
- Verify routes are defined in vercel.json
- Check that server.js exports the app properly

## Redeploying

Push changes to GitHub and Vercel will automatically redeploy:
```bash
git add .
git commit -m "Update for Vercel deployment"
git push origin main
```
