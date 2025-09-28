#!/usr/bin/env node

/**
 * Helper script to convert Bluesky post URL to AT URI
 * Usage: node get-bluesky-uri.js "https://bsky.app/profile/yourhandle.bsky.social/post/abc123"
 */

async function resolveHandle(handle) {
    const response = await fetch(`https://public.api.bsky.app/xrpc/com.atproto.identity.resolveHandle?handle=${handle}`);
    const data = await response.json();
    return data.did;
}

async function convertUrlToAtUri(url) {
    try {
        // Parse the Bluesky URL
        const urlMatch = url.match(/https:\/\/bsky\.app\/profile\/([^\/]+)\/post\/([^\/\?]+)/);
        
        if (!urlMatch) {
            throw new Error('Invalid Bluesky post URL format');
        }
        
        const [, handle, postId] = urlMatch;
        
        console.log(`Converting Bluesky post...`);
        console.log(`Handle: ${handle}`);
        console.log(`Post ID: ${postId}`);
        console.log('');
        
        // Resolve handle to DID
        console.log('Resolving handle to DID...');
        const did = await resolveHandle(handle);
        console.log(`DID: ${did}`);
        console.log('');
        
        // Construct AT URI
        const atUri = `at://${did}/app.bsky.feed.post/${postId}`;
        
        console.log('✅ AT URI:');
        console.log(atUri);
        console.log('');
        console.log('Add this to your Hugo post frontmatter:');
        console.log('[bluesky]');
        console.log(`did = "${did}"`);
        console.log(`postid = "${postId}"`);
        
        return atUri;
    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
}

// Main execution
const url = process.argv[2];

if (!url) {
    console.log('Usage: node get-bluesky-uri.js "https://bsky.app/profile/yourhandle.bsky.social/post/abc123"');
    console.log('');
    console.log('This script converts a Bluesky post URL to an AT URI for use in Hugo frontmatter.');
    process.exit(1);
}

convertUrlToAtUri(url);
