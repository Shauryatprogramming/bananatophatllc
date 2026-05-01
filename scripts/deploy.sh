#!/usr/bin/env bash
# Build the site and publish dist/ to the gh-pages branch.
# Requires GITHUB_TOKEN env var (PAT with repo scope) for the push.
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WORKTREE="/tmp/bananatophat-gh-pages"
REMOTE="${BANANATOPHAT_REMOTE:-https://github.com/Shauryatprogramming/bananatophatllc.git}"

cd "$REPO_DIR"
echo "▸ Building production bundle…"
rm -rf dist
npm run build

echo "▸ Preparing gh-pages worktree…"
rm -rf "$WORKTREE"
git worktree prune
git branch -D gh-pages 2>/dev/null || true
git worktree add -B gh-pages "$WORKTREE"

cd "$WORKTREE"
git rm -rf . >/dev/null 2>&1 || true
cp -R "$REPO_DIR/dist/." .
touch .nojekyll
git add -A
git -c user.name="Deploy Bot" -c user.email="deploy@bananatophat.com" \
    commit -m "Deploy build $(date -u +%Y%m%d-%H%M%S)" || {
      echo "Nothing to deploy."
      exit 0
    }

echo "▸ Pushing gh-pages…"
if [ -n "${GITHUB_TOKEN:-}" ]; then
  PUSH_URL="https://x-access-token:${GITHUB_TOKEN}@${REMOTE#https://}"
  git push --force "$PUSH_URL" gh-pages
else
  git push --force "$REMOTE" gh-pages
fi

cd "$REPO_DIR"
git worktree remove --force "$WORKTREE" 2>/dev/null || rm -rf "$WORKTREE"
echo "✔ Deployed."
