# Bluesky Comments for Hugo Blog

This Hugo blog now supports Bluesky comments! When you publish a blog post, you can link it to a Bluesky post and all replies to that post will appear as comments on your blog.

## How It Works

1. **You publish a blog post** on your Hugo site
2. **You share the post on Bluesky** (manually, with your own commentary)
3. **You add the Bluesky post URI** to your blog post's frontmatter
4. **Replies to your Bluesky post** automatically appear as comments on your blog

## Setting Up Comments for a Post

### Step 1: Publish Your Blog Post
Write and publish your blog post as usual. Make sure it's live on your site.

### Step 2: Share on Bluesky
Create a post on Bluesky that links to your blog post. For example:
```
Just published a new blog post about [topic]! 

[your blog post URL]

What do you think? 🤔
```

### Step 3: Get the AT URI
After posting on Bluesky, you need to get the AT URI for that post. There are several ways:

**Method 1: From the Bluesky URL**
- Your Bluesky post URL looks like: `https://bsky.app/profile/yourhandle.bsky.social/post/abc123xyz`
- Convert it to AT URI format: `at://did:plc:your-did/app.bsky.feed.post/abc123xyz`
- You'll need to find your DID (see below)

**Method 2: Use the Bluesky API**
- Visit: `https://public.api.bsky.app/xrpc/com.atproto.identity.resolveHandle?handle=yourhandle.bsky.social`
- This returns your DID
- Then construct: `at://your-did/app.bsky.feed.post/post-id`

**Method 3: Browser Developer Tools**
- Open your Bluesky post in the browser
- Open developer tools → Network tab
- Look for API calls to see the AT URI in the responses

### Step 4: Add to Blog Post Frontmatter
Edit your blog post's markdown file and add the Bluesky configuration to the frontmatter:

```toml
+++
title = 'Your Post Title'
date = 2025-09-28T12:00:00-00:00
draft = false

[bluesky]
uri = "at://did:plc:your-did/app.bsky.feed.post/your-post-id"
+++
```

### Step 5: Rebuild Your Site
Run `hugo` to rebuild your static site, and the comments should appear!

## Finding Your DID

Your DID (Decentralized Identifier) is your unique identifier on the AT Protocol. To find it:

1. **API Method**: Visit `https://public.api.bsky.app/xrpc/com.atproto.identity.resolveHandle?handle=yourhandle.bsky.social`
2. **Look for**: A string that starts with `did:plc:` followed by random characters
3. **Example**: `did:plc:abc123def456ghi789jkl012`

## Example Complete AT URI

If your DID is `did:plc:abc123def456ghi789jkl012` and your post ID is `xyz789`, your AT URI would be:
```
at://did:plc:abc123def456ghi789jkl012/app.bsky.feed.post/xyz789
```

## Features

- **Nested replies** up to 5 levels deep
- **Rich content** including images, links, and quote posts
- **User avatars and profiles** 
- **Direct links** to view/reply on Bluesky
- **Responsive design** that works on mobile
- **Dark mode support**
- **No authentication required** - uses Bluesky's public API

## Disabling Comments

To disable comments on a specific post, add this to the frontmatter:
```toml
comments = false
```

## Troubleshooting

### Comments not loading?
- Check that the AT URI is correct
- Verify the Bluesky post exists and is public
- Check browser console for JavaScript errors
- Make sure the CSS and JS files are loading

### Wrong comments showing?
- Double-check the post ID in your AT URI
- Ensure you're using the correct DID

### Styling issues?
- The CSS is in `/static/css/bluesky-comments.css`
- Customize it to match your site's design

## Technical Details

- Uses Bluesky's public API (`https://public.api.bsky.app/xrpc/app.bsky.feed.getPostThread`)
- No server-side code required
- Comments are loaded client-side with JavaScript
- Gracefully handles API failures
- Progressive enhancement - site works without JavaScript

## Workflow Summary

1. Write blog post → Publish
2. Share on Bluesky → Get AT URI  
3. Add URI to frontmatter → Rebuild site
4. Comments appear automatically! 

The lift is minimal - just adding one line to your frontmatter after sharing each post on Bluesky.
