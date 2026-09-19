import json
import re
import subprocess
import sys
import os

def run_cmd(cmd):
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error executing command: {' '.join(cmd)}\n{result.stderr}", file=sys.stderr)
    return result.stdout.strip()

def main():
    repo = os.environ.get("GITHUB_REPOSITORY", "Webghost01-NG/mssn-lasu-portal")
    print(f"Checking for blocked issues in {repo}...")

    raw_issues = run_cmd([
        "gh", "issue", "list",
        "--repo", repo,
        "--label", "status: blocked",
        "--state", "open",
        "--limit", "100",
        "--json", "number,title,body,assignees"
    ])

    if not raw_issues:
        print("No open blocked issues found.")
        return

    try:
        blocked_issues = json.loads(raw_issues)
    except json.JSONDecodeError as e:
        print(f"Failed to decode issues: {e}")
        return

    print(f"Found {len(blocked_issues)} blocked issue(s). Checking dependencies...")

    issue_states = {}

    def is_issue_closed(issue_num):
        if issue_num in issue_states:
            return issue_states[issue_num]
        state = run_cmd(["gh", "issue", "view", str(issue_num), "--repo", repo, "--json", "state", "-q", ".state"])
        is_closed = (state.lower() == "closed")
        issue_states[issue_num] = is_closed
        return is_closed

    unblocked_count = 0
    for issue in blocked_issues:
        num = issue["number"]
        body = issue.get("body", "")

        match = re.search(r"\*\*Blocked by:\*\*\s*(.+)", body)
        if not match:
            continue

        blockers_line = match.group(1).split("\n")[0]
        blocker_nums = [int(n) for n in re.findall(r"#(\d+)", blockers_line)]

        if not blocker_nums:
            continue

        all_closed = True
        for b_num in blocker_nums:
            if not is_issue_closed(b_num):
                all_closed = False
                break

        if all_closed:
            print(f"Issue #{num} blockers ({blocker_nums}) are ALL closed! Unblocking...")
            run_cmd([
                "gh", "issue", "edit", str(num),
                "--repo", repo,
                "--remove-label", "status: blocked",
                "--add-label", "status: ready"
            ])

            assignees = issue.get("assignees", [])
            mentions = " ".join([f"@{a['login']}" for a in assignees]) if assignees else "@team"
            comment = (
                f"🚀 **All Blockers Resolved!** ({', '.join([f'#{b}' for b in blocker_nums])})\n\n"
                f"This issue has been automatically transitioned from `status: blocked` ➔ **`status: ready`**.\n\n"
                f"{mentions} — you can now proceed with implementation without delay! ⚡"
            )
            run_cmd([
                "gh", "issue", "comment", str(num),
                "--repo", repo,
                "--body", comment
            ])
            print(f"Successfully unblocked #{num}!")
            unblocked_count += 1

    print(f"Done! Successfully unblocked {unblocked_count} issue(s).")

if __name__ == "__main__":
    main()
