const RELEASES_URL = import.meta.env.VITE_RELEASES_URL ?? ''
export const VERSION = import.meta.env.VITE_APP_VERSION ?? '1.1.4'

const INSTALLER_NAME = `git-graph-ui-setup-${VERSION}.exe`

export const LINKS = {
  releases: RELEASES_URL,
  download: RELEASES_URL
    ? `${RELEASES_URL}/releases/latest/download/${INSTALLER_NAME}`
    : '',
}

export const SCREENSHOTS = {
  graph: '/screenshots/graph.png',
  graphFocus: '/screenshots/graph-focus.png',
  diff: '/screenshots/file-diffs.png',
  conflict: '/screenshots/merge-conflict.png',
}

export const FEATURES = [
  {
    icon: 'graph',
    title: 'Visual commit graph',
    description:
      'Branch lanes, author avatars, and live refresh when your repo changes — history you can actually read.',
    highlights: ['Colored branch lanes', 'Right-click context menus', 'Zoom 90%–120%'],
  },
  {
    icon: 'diff',
    title: 'Split diff viewer',
    description:
      'Side-by-side BEFORE and AFTER panels with intra-line highlights, a minimap, and hunk or full-file mode.',
    highlights: ['Intra-line diff', 'Minimap sidebar', 'Hunks vs full file'],
  },
  {
    icon: 'conflict',
    title: 'Conflict resolver',
    description:
      'Ours vs. Theirs with accept and reject per conflict. No switching back to the terminal mid-merge.',
    highlights: ['Ours vs Theirs', 'Per-conflict controls', 'Abort during merge/rebase'],
  },
  {
    icon: 'branch',
    title: 'Drag-and-drop merges',
    description:
      'Drag a branch badge onto HEAD to merge, rebase, fast-forward, or no-ff — from the graph or branch panel.',
    highlights: ['Merge, rebase, no-ff', 'Fast-forward only', 'Branch panel'],
  },
  {
    icon: 'remote',
    title: 'Remote operations',
    description:
      'Fetch, pull, push, and stash from the toolbar. Pick a local SSH key — it never leaves your machine.',
    highlights: ['Local SSH key picker', 'No keys on our servers', 'Stash push/pop/drop'],
  },
  {
    icon: 'tabs',
    title: 'Multi-repository tabs',
    description:
      'One repo tab at a time — open, switch, and pick up where you left off with per-repo cache.',
    highlights: ['IDE-style tabs', 'Per-repo cache', '1 repo tab'],
  },
]

export const FAQ = [
  {
    q: 'Is Git Graph UI free?',
    a: 'Yes — completely free. The download includes the commit graph, split diffs, conflict resolution, squash, cherry-pick, graph search, and advanced merge strategies. One repo tab and up to 1,000 commits of history.',
  },
  {
    q: 'Does it work offline?',
    a: 'Git runs on your machine via a local server. The app works fully offline — internet is only needed for push, pull, fetch, and checking for updates.',
  },
  {
    q: 'What Git hosts are supported?',
    a: 'Any remote — GitHub, GitLab, Bitbucket, self-hosted. SSH keys or HTTPS, your choice.',
  },
  {
    q: 'Is my code sent to the cloud?',
    a: 'No. Your repositories never leave your computer. We do not host repos or run Git for you.',
  },
  {
    q: 'Are my SSH private keys stored on your servers?',
    a: 'No. Git Graph UI reads keys that already exist on your PC to run local Git commands. We never upload or store private key data.',
  },
  {
    q: 'Where do I download the installer?',
    a: 'From this site or our GitHub releases page. Both link to the same official Windows installer.',
  },
  {
    q: 'How do updates work?',
    a: 'The desktop app checks GitHub releases for new versions and can install updates automatically.',
  },
  {
    q: 'Windows shows "Unknown publisher" when I install. Is it safe?',
    a: 'Yes. We have not purchased a commercial code-signing certificate yet, so SmartScreen may warn on first install. Click More info, then Run anyway. Only download from this website or our GitHub releases page.',
  },
]

export const INCLUDED_FEATURES = [
  'Multi-repo support (up to 3 tabs)',
  '1,000 commits history depth',
  'Core Git operations',
  'Conflict resolution',
  'Advanced merge strategies',
  'Squash commits',
  'Cherry-pick from context menu',
  'Graph search with navigation',
  'Local-first, offline capable',
]
