# Update Repository Description

Github action for update description on repository.

## Usage

- [Example](./.github/workflows/main.yml)

```yaml
uses: zhengbangbo/update-repository-description@v0.0.1
with:
  repo: ${{ github.repository }}
  repo-token: ${{ secrets.MY_TOKEN }}
```

> **Note**
> 1. Creat [PAT(Personal access token)](https://github.com/settings/tokens) and set `actions secrets` of repository.
> 2. If `repo-token` use `secrets.GITHUB_TOKEN` or `github.token`, throw `Error: Resource not accessible by integration`. Like [this job](https://github.com/zhengbangbo/update-repository-description/actions/runs/3318862036/jobs/5483297578).


## License

MIT
