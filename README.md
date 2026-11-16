# Maggie's personal site

Jekyll on GitHub Pages. The existing posts, URLs, and minimal styling are retained.

## One-time setup: posting from your phone

1. After this branch is merged, open https://app.pagescms.org/ and sign in with GitHub.
2. Install the Pages CMS GitHub App, granting access only to `maggie-ku.github.io`.
3. Select this repository and its `main` branch. The `.pages.yml` file provides the editor configuration.
4. Open **Posts**, create an entry, and fill in its title, date, description, tags, and body. Use the image control to upload JPG, PNG, WebP, or GIF photos. Convert HEIC photos to JPG first.
5. Turn **Publish on site** off to save an unpublished draft, or on to publish. Save, then wait for the GitHub Pages build to finish.
6. Bookmark https://maggie-ku.github.io/write/ on your phone for an editor shortcut.

Draft files and uploaded photos are in a **public GitHub repository**. Unpublished means excluded from the rendered site, not private. Don't save private material here. Uploaded photos can become public before the post does.

New filenames use `YYYY-MM-DD-title.md`. When creating a backdated post, adjust the filename date to match. Don't rename existing post files or change their dates casually: that changes their URLs and separates their comments. Editing an old post's title alone does not rename its file.

Pages CMS is an external editing service; saving commits files to the selected branch. Confirm GitHub Pages deploys from `main` / root in repository Settings → Pages. No new deploy workflow is added here. About-page editing is also configured. Existing posts do not need conversion.

Docs: https://pagescms.org/docs/quick-start/ and https://pagescms.org/docs/configuration/.

## One-time setup: comments and guestbook

The integration is **disabled by default**. No CommentBox account, paid plan, or billing agreement has been created.

The proposed provider is https://commentbox.io/. Its published Personal plan includes 100 comments per month and lists a $15 charge above that limit; review current pricing and terms before enabling. The quota is shared by post comments and guestbook entries in the same project. This code does not enforce that quota.

If you choose to use it:

1. Create your own project at https://dashboard.commentbox.io/ for `https://maggie-ku.github.io`.
2. Enable anonymous posting so friends do not need GitHub or another login. Select **Manual** moderation so you approve messages before they appear.
3. Copy the **public project ID** from the embed snippet into `_config.yml` under `commentbox.project_id` and set `commentbox.enabled: true`. Never paste a secret, password, or API key.
4. Deploy the change. Visit `/guestbook/` and an existing post in a signed-out browser to check anonymous commenting.
5. Approve a test message in the CommentBox dashboard. Confirm it appears on the correct page, and check reply and delete actions.

Post threads are keyed to each page's canonical URL. The guestbook uses its own `/guestbook/` thread. Keep `url`, `baseurl`, post permalinks, and the `commentbox` element ID stable. If moving domains later, arrange comment migration before switching.

Set a post's `comments: false` to hide its comments widget. Turn `commentbox.enabled` off to hide all widgets. Existing remote comments are not deleted. CommentBox also provides comment exports in its dashboard.

Docs: https://commentbox.io/docs/ and https://commentbox.io/docs/dashboard/.

## Before merging / activating

- Build with `bundle install` then `bundle exec jekyll build`.
- Confirm both existing post URLs and RSS feed still render.
- On a phone, try a draft with a photo, then publish it and check that the photo fits the screen.
- Enable CommentBox only after reviewing its cost and completing account setup.
- Test a signed-out message, moderation approval, a reply, and deletion on both a post and the guestbook.

Account setup and real posting/moderation checks require the owner's service accounts; a successful local build alone does not verify them.
